# Studio Mimimei — Beauty Academy 💜

> Landing page profissional e de alta conversão para o Studio Mimimei Beauty Academy, localizado em Osasco/SP.

![Studio Mimimei](https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1200&q=80&fit=crop)

---

## ✨ Visão Geral do Projeto

A landing page do **Studio Mimimei - Beauty Academy** foi desenvolvida com foco em:

- **Alta conversão** — CTAs estratégicos e claros para agendamento via Trinks
- **Design sofisticado** — Paleta roxo + pastel, tipografia elegante, animações suaves
- **Mobile-first** — 100% responsivo para todos os dispositivos
- **SEO pronto** — Meta tags, semântica HTML5 e performance otimizada

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Descrição |
|---|---|---|
| **React** | 19.x | Framework UI |
| **Vite** | 6.x | Bundler e dev server |
| **Tailwind CSS** | 4.x | Estilização utility-first |
| **Framer Motion** | 12.x | Animações fluidas |
| **Lucide React** | latest | Ícones modernos |
| **Google Fonts** | — | Cormorant Garamond + DM Sans |

---

## 📁 Arquitetura do Projeto

```
studio-mimimei/
├── public/
│   └── favicon.svg              # Ícone SVG da marca
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navbar sticky + menu mobile animado
│   │   ├── Hero.jsx             # Seção hero full-screen com CTA
│   │   ├── Services.jsx         # Grid de 6 serviços com cards animados
│   │   ├── Team.jsx             # 3 cards de profissionais com portfólio
│   │   ├── Info.jsx             # Políticas, comodidades e pagamentos
│   │   └── Footer.jsx           # Contato, horários e CTA final
│   ├── App.jsx                  # Componente raiz — orquestra todas as seções
│   ├── main.jsx                 # Entry point React
│   └── index.css                # Design system (tokens CSS + Tailwind v4)
├── index.html                   # HTML base com SEO meta tags
├── vite.config.js               # Configuração Vite + plugin Tailwind
├── package.json
└── README.md
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Node.js** 18+ ([download](https://nodejs.org))
- **npm** 9+ (incluído com Node.js)

### 1. Clone ou acesse o diretório

```bash
# Se clonar de um repositório:
git clone <url-do-repositorio>
cd studio-mimimei

# Se já estiver no diretório:
cd studio-mimimei
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O servidor abrirá em **http://localhost:5173** com hot-reload automático.

---

## 🏗️ Build para Produção

```bash
# Gera os arquivos otimizados na pasta /dist
npm run build

# Pré-visualize o build de produção localmente
npm run preview
```

---

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Deploy direto do diretório
vercel

# Para produção:
vercel --prod
```

### Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `/dist` (após `npm run build`) para o painel de deploy
3. Ou conecte o repositório Git para CI/CD automático

### GitHub Pages

```bash
npm install -D gh-pages

# Adicione no package.json:
# "homepage": "https://<usuario>.github.io/<repo>",
# "scripts": { "deploy": "gh-pages -d dist" }

npm run build
npm run deploy
```

---

## 🎨 Design System

### Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `primary` | `#7C3AED` | Botões, destaques |
| `primary-light` | `#A78BFA` | Elementos secundários |
| `accent` | `#EC4899` | Gradientes, CTAs |
| `lavender` | `#F5F3FF` | Fundos de seções |
| `blush` | `#FDF2F8` | Fundos suaves |
| `lilac` | `#EDE9FE` | Cards e chips |

### Tipografia

- **Display**: `Cormorant Garamond` — Títulos elegantes e sofisticados
- **Body**: `DM Sans` — Texto limpo e legível

---

## 🔗 Links Importantes

| Recurso | Link |
|---|---|
| Agendamento (Trinks) | https://www.trinks.com/studioborges-beautyacademy |
| Instagram | https://www.instagram.com/studio.mimimei |
| Email | boorges.studio@gmail.com |

---

## 📝 Personalizações Futuras

- [ ] Adicionar fotos reais das profissionais nos cards da equipe
- [ ] Substituir placeholders de Unsplash por fotos próprias dos procedimentos
- [ ] Integrar formulário de contato com backend ou FormSpree
- [ ] Adicionar seção de depoimentos/reviews de clientes
- [ ] Confirmar horário de funcionamento aos sábados
- [ ] Implementar pixel do Facebook/Meta Ads para remarketing
- [ ] Adicionar Google Analytics (GA4)

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para **Studio Mimimei - Beauty Academy**.  
Todos os direitos reservados © 2025.

---

<p align="center">Feito com 💜 para realçar a sua beleza</p>
