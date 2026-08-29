# SELVA Web Sites — pacote de transferência

Pacote gerado em 20/08/2026 a partir de `Desktop/Claude Files/selva-website`
(branch `fable-redesign`, commit `1c3cacb` — a versão que está no ar em
https://site-selva-novo.vercel.app).

Build de produção validado antes do empacotamento: **13 rotas, todas estáticas, sem erro.**

---

## O que tem aqui

| Pasta / arquivo | O que é |
|---|---|
| `app/` | rotas do site (home, about, services, work, process, contact, lab-3d) |
| `components/` | todos os componentes de UI e seções |
| `lib/site.ts` | **copy, dados, contatos, cases — tudo centralizado aqui** |
| `public/` | imagens, vídeos da pantera, logos SVG, mascote 3D (`mascot.glb`) |
| `package.json` + `package-lock.json` | dependências travadas na versão exata |
| `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs` | configuração |
| `DELIVERABLES.md` | documentação do que foi entregue |

**Stack:** Next.js 16.2.9 · React 19.2.4 · TypeScript · Tailwind v4 · Motion · Lenis · three/react-three-fiber

## O que ficou de fora (de propósito)

- `node_modules/` — reinstala com `npm install`
- `.next/` — cache de build, se refaz sozinho
- `.git/` — o histórico continua na pasta original no Mac mini
- `.vercel/` — **o vínculo com a conta antiga**; tem que sair, senão o deploy volta pro projeto velho
- `.env.local` — só tinha `VERCEL_OIDC_TOKEN`, gerado pela CLI da conta antiga. Não é segredo do app e não serve na conta nova.

> Não há nenhuma variável de ambiente da aplicação. O site é 100% estático — não precisa configurar nada de env na Vercel nova.

---

## Publicando na conta nova

### Caminho A — CLI (mais direto)

```bash
cd caminho/para/selva-website-pacote
npm install
npx vercel login        # entrar com a conta NOVA
npx vercel deploy --prod
```

Na primeira vez a CLI pergunta o escopo (a conta/time) e o nome do projeto — escolha a conta nova
e confirme. Ela cria um `.vercel/` novo já vinculado ali.

### Caminho B — GitHub

```bash
cd caminho/para/selva-website-pacote
git init && git add -A && git commit -m "SELVA Web Sites"
git remote add origin git@github.com:SEU-USUARIO/selva-website.git
git push -u origin main
```

Depois, na Vercel da conta nova: **Add New → Project → importar o repositório.**
Framework detectado automaticamente (Next.js), build `next build`, sem env vars.

### Caminho C — upload do ZIP

A Vercel não importa ZIP direto pelo painel. Se for esse o caminho, descompacte e use A ou B.

---

## Antes de apontar o domínio

Placeholders ainda no `lib/site.ts` (linhas 16–21):

- `url: "https://selva.studio"` → domínio real
- `email: "contato@selva.studio"` → e-mail real
- `phone: "+55 11 0000-0000"` → telefone real
- `Instagram: "https://instagram.com"` → perfil real

## Rodando local

```bash
npm install && npm run dev
```

Gotcha conhecido: o Turbopack (Next 16) às vezes serve CSS velho do cache depois de editar
`app/globals.css`. Remédio: parar o dev server, `rm -rf .next`, subir de novo.
