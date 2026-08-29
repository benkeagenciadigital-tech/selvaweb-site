# SELVA — Ecossistema Digital

> **We build digital habitats that hunt tomorrow.**
> Website premium de alta performance — Next.js 16 · React 19 · TypeScript · Tailwind v4 · Motion · Lenis.

---

## 1. Como rodar

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
npm run build    # build de produção (estático)
npm run start    # servir o build
```

Node ≥ 20.9. O projeto roda 100% estático (todas as rotas prerenderizadas).

---

## 2. Sitemap & Arquitetura de Informação

```
/ (Home)
├── Hero ............... headline + pantera + CTAs + ticker de métricas
├── Marquee ............ faixa de palavras-chave em movimento
├── Problema ........... por que a maioria dos sites falha (4 sinais)
├── Solução ........... 4 pilares interativos (Architecture/Experience/Performance/Conversion)
├── Serviços ........... 6 serviços (lista expansível)
├── Processo ........... 6 fases (Discovery → Optimization)
├── Cases .............. grid premium com métricas
├── Resultados ......... contadores animados
├── Depoimentos ........ slider
└── CTA ................ diagnóstico estratégico

/about (Estúdio) ....... essência da marca + arquétipos + princípios + paleta
/services (Serviços) ... hero + serviços + processo + CTA
/work (Cases) .......... hero + cases + resultados + depoimentos + CTA
/process (Processo) .... hero + timeline vertical de 6 fases + CTA
/contact (Contato) ..... hero + formulário (briefing) + contato direto + FAQ

/sitemap.xml  ·  /robots.txt  ·  /opengraph-image.jpg
```

**Hierarquia de conversão:** cada página termina em CTA. A Home segue a jornada
Problema → Solução → Prova (Serviços/Processo/Cases/Resultados/Depoimentos) → Ação.

---

## 3. Design System

### Cores (CSS tokens em `app/globals.css` · `@theme`)
| Token | Hex | Uso |
|---|---|---|
| `jungle` | `#000000` | preto puro |
| `canopy` | `#0a0a0a` | fundo base |
| `canopy-2` | `#0e120d` | superfície elevada |
| `forest` | `#1a2a1f` | secundária (Deep Forest) |
| `forest-line`| `#21321f` | hairlines |
| `lime` | `#a6ce39` | **primária** (Selva Lime) |
| `lime-bright`| `#c4f24a` | hover / glow |
| `mist` | `#f4f4f0` | texto / superfície neutra |
| `signal` | `#b0b0b0` | texto de apoio |

### Tipografia
- **Display/Headlines:** Inter (700–900), tracking apertado, line-height 0.95 — classe `.display`.
- **Texto:** Open Sans (400–700).
- **Labels técnicas/HUD:** JetBrains Mono — classes `.eyebrow`, `.mono-label`.

### Espaçamento / Raios / Grid
- Escala 8px · raios 4/8/16/24 · container `--shell: 1320px` · margens 24px.

### Componentes (`components/`)
`Logo` · `Header` (sticky, pill ao rolar, drawer mobile) · `Footer` · `PantherMark` ·
`JungleBackdrop` (canvas de data-streams + constelação) · `PageHero` · `ContactForm`
`ui/`: `Button` (primary/outline/ghost) · `Eyebrow` · `Reveal` · `Stagger`/`StaggerItem` ·
`AnimatedHeading` (revelação palavra-a-palavra) · `useReveal` (trigger de scroll robusto).

### Motion
- **Lenis** para smooth scroll (`SmoothScroll`), respeita `prefers-reduced-motion`.
- **Motion (Framer)** para reveals, stagger, hover, slider, contadores.
- Easing assinatura: `cubic-bezier(0.16, 1, 0.3, 1)`.
- `useReveal` usa 3 camadas (check no mount + IntersectionObserver + fallback por timer)
  para nunca deixar conteúdo invisível em nenhum ambiente.

---

## 4. Estrutura de pastas

```
selva-website/
├── app/
│   ├── layout.tsx          # fonts, metadata, JSON-LD, Header/Footer/SmoothScroll
│   ├── page.tsx            # Home (composição das seções)
│   ├── globals.css         # design tokens + utilidades
│   ├── about|services|work|process|contact/page.tsx
│   ├── sitemap.ts · robots.ts · opengraph-image.jpg
├── components/
│   ├── sections/           # Hero, Problem, Solution, Services, Process, Cases,
│   │                       #   Results, Testimonials, CTA, Marquee
│   ├── ui/                 # Button, Reveal, AnimatedHeading, Eyebrow, useReveal
│   ├── Header · Footer · Logo · PantherMark · PageHero · JungleBackdrop · SmoothScroll · ContactForm
├── lib/site.ts             # fonte única de copy & dados
└── public/                 # hero-panther.webp, panther-eye.webp, palette.webp, logo-selva.svg
```

Toda a copy e os dados (serviços, processo, cases, stats, depoimentos, FAQ) vivem em
`lib/site.ts` — edite ali para atualizar o site inteiro.

---

## 5. SEO

- `metadata` por página (title template, description, keywords, Open Graph, Twitter).
- **JSON-LD** `ProfessionalService` no layout raiz.
- `sitemap.xml` e `robots.txt` gerados via convenção do App Router.
- `opengraph-image.jpg` (1200px) para compartilhamento social.
- `lang="pt-BR"`, headings semânticos (um `h1` por página), imagens com `alt`.
- **Ajuste antes de publicar:** troque `site.url`, `email`, `phone` em `lib/site.ts`.

---

## 6. Estratégia de conversão

1. **Hero** entrega proposta de valor + 2 CTAs em < 3s, com prova social (ticker).
2. **Problema → Solução** cria tensão e resolve (framework PAS).
3. **Serviços/Processo** reduzem incerteza e demonstram método.
4. **Cases/Resultados/Depoimentos** = prova (números + autoridade).
5. **CTA recorrente** ("Start a Project") fixo no header e ao fim de cada página.
6. **Formulário de baixa fricção** (briefing) com seleção rápida de tipo de projeto.

---

## 7. Prompts de imagem (IA) — direção cinematográfica

> Estética: ultra realistic, luxury advertising, cinematic, 8K, dark jungle,
> lime green (#A6CE39) accents, premium lighting, high contrast, depth of field.

1. **Hero / Pantera (já aplicado — `hero-panther.webp`)**
   *"Black panther prowling through a dark futuristic jungle at night, bioluminescent lime-green data veins glowing across its body, fiber-optic vines, server racks fused with foliage in the background, volumetric mist, cinematic rim light, ultra realistic, luxury advertising, 8K, shallow depth of field, color grade black + lime."*

2. **Brand essence / Olho (já aplicado — `panther-eye.webp`)**
   *"Extreme close-up of a black panther's glowing lime-green eye dissolving into digital pixels on one side, organic-to-digital transition, fine fur detail, dark background, cinematic, ultra realistic, 8K."*

3. **Case — Indústria**
   *"Heavy industrial machinery silhouette inside a dark facility, lime-green HUD data overlays and circuit lines tracing the metal, fiber-optic cables, premium product photography lighting, cinematic, 8K."*

4. **Case — Saúde premium**
   *"Minimalist premium medical environment at night, lime-green vital-sign waveforms as light streaks, glass and black surfaces, organic plant detail, clean luxury advertising aesthetic, 8K."*

5. **Seção Performance**
   *"Macro shot of a single dew drop on a dark leaf containing a reflected glowing green circuit board, micro + circuit detail, hyper realistic, cinematic, 8K."*

6. **Textura de fundo / Sistemas**
   *"Abstract network of glowing lime-green fiber-optic threads forming a neural constellation over pure black, organic vector systems, depth, premium, 8K."*

7. **OG / Social**
   *"Black panther emerging from neon-green digital jungle, dramatic backlight, cinematic banner composition with negative space on the left for text, ultra realistic, 8K."*

---

## 8. Observações

- A pasta `public/` já contém as imagens otimizadas (PNG 9–10MB → WebP 50–330KB).
- `window.lenis` é exposto para navegação programática/debug (inofensivo).
- Responsivo: layouts validados para desktop, tablet e mobile (grids fluidos + drawer).
- Acessibilidade: foco visível, `aria-label`s, `prefers-reduced-motion`, contraste alto.
