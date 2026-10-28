<p align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:1a1b27,100:7aa2f7&height=200&section=header&text=Velnox%20White%20Label&fontSize=46&fontColor=70a5fd&fontAlignY=36&desc=Sites%20para%20restaurantes%20gerados%20com%20IA&descSize=16&descAlignY=56" alt="Velnox White Label" />
</p>

<p align="center">
  <a href="https://velnox-white-label.vercel.app"><img src="https://img.shields.io/badge/ver_online-velnox--white--label.vercel.app-7aa2f7?style=for-the-badge&labelColor=1a1b27" alt="Ver online" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-1a1b27?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-1a1b27?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TanStack_Start-1a1b27?style=for-the-badge&logo=reactquery&logoColor=FF4154" alt="TanStack Start" />
  <img src="https://img.shields.io/badge/Claude_AI-1a1b27?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude AI" />
  <img src="https://img.shields.io/badge/Vercel-1a1b27?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

## 🤖 Sobre

O **Velnox White Label** cria **sites de delivery para restaurantes usando IA**. O dono informa os dados do negócio, a IA analisa e gera os textos e as seções do site, e a loja fica pronta com cardápio, página de produto e carrinho.

Foi a base do [Velnox APP](https://github.com/joaovictormaria/velnoxia-APP), que evoluiu para uma plataforma completa de gestão.

## ✨ Funcionalidades

- 🧠 **Análise do negócio** (`/analise`): a IA entende o restaurante e o público
- 🪄 **Criar site** (`/criar-site`): geração do conteúdo do site com IA, validado com Zod
- 👀 **Preview** (`/preview`): veja o site antes de publicar
- 🛒 **Loja** (`/:loja`): cardápio, página de produto e carrinho para cada restaurante

## 🛠️ Tecnologias

- **React 19 + TanStack Start** (rotas por arquivo e server functions)
- **TanStack Query** para dados
- **Radix UI + Tailwind** para a interface
- **Anthropic SDK (Claude)** para gerar o conteúdo dos sites
- **Zod** para validar a resposta da IA
- **Vercel** para hospedagem

## ▶️ Como rodar

```bash
git clone https://github.com/joaovictormaria/velnox-white-label.git
cd velnox-white-label
npm install
cp .env.example .env   # coloque sua ANTHROPIC_API_KEY
npm run dev
```

<p align="center">Feito com 💙 por <a href="https://github.com/joaovictormaria">João Victor</a></p>

<p align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:7aa2f7,50:1a1b27,100:0d1117&height=100&section=footer" alt="Rodapé" />
</p>
