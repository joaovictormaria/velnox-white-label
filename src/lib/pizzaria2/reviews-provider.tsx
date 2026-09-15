import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getVisitorId } from "./visitor-id";
import { getAvaliacoes } from "./mock/get-store";

/**
 * Avaliações da vitrine.
 *
 * Nesta etapa a lista vem dos mocks e as interações (curtir, avaliar) vivem
 * só no estado desta aba — nada é persistido, e é assim de propósito: fingir
 * gravação seria pior que não gravar, porque esconderia a ausência de backend
 * de quem estiver demonstrando o template.
 *
 * Quando o backend entrar, as três funções abaixo (`carregar`, `like`,
 * `submit`) passam a chamar as server functions correspondentes. O contrato
 * consumido pelos componentes não muda.
 */
export type Review = {
  id: string;
  customerNameSnapshot: string;
  rating: number;
  comment: string;
  response: string | null;
  createdAt: string;
  likeCount: number;
  likedByMe: boolean;
};

type ReviewsApi = {
  visitorId: string;
  reviews: Review[];
  summary: { average: number; total: number };
  like: (reviewId: string) => void;
  submit: (input: {
    name: string;
    rating: number;
    comment: string;
  }) => Promise<string | null>;
};

const ReviewsContext = createContext<ReviewsApi | null>(null);

function resumir(reviews: Review[]) {
  if (!reviews.length) return { average: 0, total: 0 };
  const soma = reviews.reduce((acc, r) => acc + r.rating, 0);
  return {
    average: Math.round((soma / reviews.length) * 10) / 10,
    total: reviews.length,
  };
}

/**
 * As avaliações são lidas em dois lugares — a lista dentro do card "Nosso
 * restaurante" e a faixa em movimento abaixo dela. Compartilham um provider
 * para que um coração preenchido num lugar apareça preenchido no outro, em vez
 * de duas cópias divergirem.
 */
export function ReviewsProvider({
  storeSlug,
  children,
}: {
  storeSlug: string;
  children: React.ReactNode;
}) {
  const [visitorId, setVisitorId] = useState("");
  const [reviews, setReviews] = useState<Review[]>(() =>
    getAvaliacoes(storeSlug),
  );

  // localStorage só existe depois da hidratação, então o id é lido num efeito —
  // lê-lo durante a renderização quebraria o render do servidor.
  useEffect(() => {
    setVisitorId(getVisitorId());
  }, []);

  useEffect(() => {
    setReviews(getAvaliacoes(storeSlug));
  }, [storeSlug]);

  const summary = useMemo(() => resumir(reviews), [reviews]);

  const like = useCallback((reviewId: string) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? {
              ...r,
              likedByMe: !r.likedByMe,
              likeCount: Math.max(0, r.likeCount + (r.likedByMe ? -1 : 1)),
            }
          : r,
      ),
    );
  }, []);

  const submit = useCallback<ReviewsApi["submit"]>(
    async ({ name, rating, comment }) => {
      const nome = name.trim();
      const texto = comment.trim();
      if (!nome) return "Escreva seu nome.";
      if (rating < 1 || rating > 5) return "Escolha de 1 a 5 estrelas.";
      if (texto.length < 3) return "Escreva sua avaliação.";

      // Só entra na lista desta aba. Recarregar a página traz os mocks de volta.
      setReviews((prev) => [
        {
          id: `local-${Date.now()}`,
          customerNameSnapshot: nome,
          rating,
          comment: texto,
          response: null,
          createdAt: new Date().toISOString(),
          likeCount: 0,
          likedByMe: false,
        },
        ...prev,
      ]);
      return null;
    },
    [],
  );

  const value = useMemo(
    () => ({ visitorId, reviews, summary, like, submit }),
    [visitorId, reviews, summary, like, submit],
  );

  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  );
}

export function useReviews(): ReviewsApi {
  const ctx = useContext(ReviewsContext);
  if (!ctx)
    throw new Error("useReviews precisa estar dentro de ReviewsProvider");
  return ctx;
}
