/* ============================================================
   SELVA — Single source of truth for copy & data
   Posicionamento: sites com cara de premium para pequenos e
   médios negócios — bonitos, rápidos de entregar e acessíveis.
   Tom: direto, caloroso, sem tecniquês. A selva é atitude,
   não jargão.
   ============================================================ */

export const site = {
  name: "SELVA",
  legal: "SELVA Web Sites",
  tagline: "We build digital habitats that hunt tomorrow.",
  taglinePt: "Sites lindos, rápidos e do seu jeito.",
  description:
    "A SELVA cria sites com cara de premium para pequenos e médios negócios — layout do seu jeito, entrega expressa e preço que não assusta.",
  url: "https://selva.studio",
  email: "atendimento@selvaweb.com.br",
  phone: "+55 11 0000-0000",
  location: "Itajaí — Santa Catarina · Atendimento em todo o Brasil",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
  ],
} as const;

export const nav = [
  { label: "Início", href: "/" },
  { label: "Estúdio", href: "/about" },
  { label: "Serviços", href: "/services" },
  { label: "Sites", href: "/work" },
  { label: "Processo", href: "/process" },
  { label: "Contato", href: "/contact" },
] as const;

/* ---- HOME: Problema (as dores de quem contrata site hoje) ---- */
export const problems = [
  {
    n: "01",
    title: "Orçamento de susto",
    body: "Agência tradicional cobra o preço de um carro popular e parcela em dor de cabeça. Site bonito não precisa custar isso.",
  },
  {
    n: "02",
    title: "Meses de espera",
    body: "Reunião, ata, sprint, silêncio. Enquanto o site não sai, seu negócio continua invisível na internet.",
  },
  {
    n: "03",
    title: "Cara de template",
    body: "Modelinho pronto, igual ao do concorrente, não posiciona ninguém. Seu negócio merece um rosto próprio.",
  },
  {
    n: "04",
    title: "Tecniquês",
    body: "Se você precisa de tradutor para conversar com a agência, tem algo errado. A gente fala a sua língua.",
  },
] as const;

/* ---- HOME: Solução / As 4 promessas ---- */
export const pillars = [
  {
    n: "01",
    title: "Premium",
    pt: "Cara de caro",
    body: "Layout com padrão de marca grande — tipografia, cores e acabamento que passam confiança no primeiro olhar.",
  },
  {
    n: "02",
    title: "Express",
    pt: "Rápido de verdade",
    body: "Primeira versão no ar em até 3 dias. Você vê pronto, aponta ajustes e a gente refina — sem meses de espera.",
  },
  {
    n: "03",
    title: "Yours",
    pt: "Do seu jeito",
    body: "Você participa do processo do início ao fim. Revisões até o site ficar com a sua cara — não com a nossa.",
  },
  {
    n: "04",
    title: "Fair",
    pt: "Preço justo",
    body: "Valor fechado e combinado antes de começar. Sem surpresa no boleto: premium não precisa ser inacessível.",
  },
] as const;

/* ---- Serviços ---- */
export const services = [
  {
    n: "01",
    title: "Express Site",
    pt: "Site express 3 dias",
    body: "Seu site completo, bonito e no ar em até 3 dias. Para quem precisa existir online ontem.",
    deliverables: ["Layout premium", "Mobile perfeito", "WhatsApp integrado", "Publicação inclusa"],
  },
  {
    n: "02",
    title: "Institutional",
    pt: "Sites institucionais",
    body: "O cartão de visitas definitivo do seu negócio: quem você é, o que faz e por que confiar em você.",
    deliverables: ["Design sob medida", "Textos revisados", "Mapa e contato", "SEO básico"],
  },
  {
    n: "03",
    title: "Landing Pages",
    pt: "Landing pages",
    body: "Página única com um objetivo só: transformar visita em contato. Promoção, lançamento ou captação.",
    deliverables: ["Texto que convence", "Botão de WhatsApp", "Pronta para anúncios", "Medição simples"],
  },
  {
    n: "04",
    title: "Redesign",
    pt: "Redesign de site",
    body: "Seu site atual está velho, lento ou feio? A gente aproveita o que funciona e troca a roupa inteira.",
    deliverables: ["Diagnóstico do atual", "Novo layout", "Migração de conteúdo", "Sem sair do ar"],
  },
  {
    n: "05",
    title: "Online Store",
    pt: "Loja & catálogo",
    body: "Catálogo elegante ou loja completa para vender online sem depender só de marketplace e rede social.",
    deliverables: ["Vitrine de produtos", "Pagamentos online", "Pedido pelo WhatsApp", "Treinamento incluso"],
  },
  {
    n: "06",
    title: "Business Hub",
    pt: "Hub SELVA",
    body: "Depois do site no ar, viramos seu braço digital: assessoria, ajustes, conteúdo e evolução contínua.",
    deliverables: ["Assessoria mensal", "Ajustes e novidades", "Relatórios sem jargão", "Prioridade no suporte"],
  },
] as const;

/* ---- Processo ---- */
export const processSteps = [
  {
    n: "01",
    title: "Briefing",
    pt: "Conversa",
    body: "Papo rápido — WhatsApp ou chamada — para entender seu negócio, seu gosto e suas referências.",
  },
  {
    n: "02",
    title: "Direction",
    pt: "Direção",
    body: "Definimos juntos o clima do site: cores, estilo e referências. Você aprova antes de a gente construir.",
  },
  {
    n: "03",
    title: "Layout",
    pt: "Layout",
    body: "A gente desenha e monta o site de verdade — nada de esboço em PDF que nunca vira página.",
  },
  {
    n: "04",
    title: "Review",
    pt: "Seus ajustes",
    body: "Você aponta, a gente refina. Revisões incluídas até o site ficar com a sua cara.",
  },
  {
    n: "05",
    title: "Launch",
    pt: "No ar",
    body: "Domínio, hospedagem e publicação por nossa conta. Você só compartilha o link.",
  },
  {
    n: "06",
    title: "Care",
    pt: "Acompanhamento",
    body: "Suporte de verdade depois da entrega — e o Hub SELVA, se você quiser evoluir sempre.",
  },
] as const;

/* ---- Sites entregues (cases) ---- */
export const cases = [
  {
    slug: "plasfan",
    title: "Plasfan",
    sector: "Indústria · Distribuição",
    year: "2026",
    summary:
      "Site institucional para indústria e distribuição de soluções em plástico, com catálogo de produtos e área de parceiros.",
    image: "/portfolio/plasfan.jpeg",
    url: "https://plasfansc.com.br/",
    tag: "Site institucional",
  },
  {
    slug: "qdelicia",
    title: "Q'Delícia",
    sector: "Alimentos · Sorvetes",
    year: "2026",
    summary:
      "Presença digital premium para a linha de picolés e sobremesas, com vitrine de produtos e contato direto pelo WhatsApp.",
    image: "/portfolio/qdelicia.jpeg",
    url: "https://www.qdeliciasorvetes.com.br/",
    tag: "Site institucional",
  },
  {
    slug: "tronno",
    title: "Tronno",
    sector: "Tecnologia Naval",
    year: "2026",
    summary:
      "Site institucional sóbrio e imersivo para tecnologia naval, com áreas de serviços, clientes, treinamentos e navegação multilíngue.",
    image: "/portfolio/tronno.jpeg",
    url: "https://tronno.com.br/",
    tag: "Site institucional",
  },
  {
    slug: "benke",
    title: "Benke",
    sector: "Branding · Publicidade",
    year: "2026",
    summary:
      "Site de agência de branding com estética forte e editorial, portfólio em destaque e captação de novos clientes.",
    image: "/portfolio/benke.jpeg",
    url: "https://www.benkeagencia.com.br/",
    tag: "Site institucional",
  },
  {
    slug: "filho-do-criador",
    title: "Filho do Criador",
    sector: "E-commerce · Adega",
    year: "2026",
    summary:
      "Loja virtual de vinhos e espumantes com catálogo completo, filtros de navegação e checkout para todo o Brasil.",
    image: "/portfolio/filho.jpeg",
    url: "https://www.filhodocriador.com.br/",
    tag: "Loja virtual",
  },
  {
    slug: "melhor-preco",
    title: "Melhor Preço",
    sector: "E-commerce · Construção",
    year: "2026",
    summary:
      "Loja virtual de materiais de construção com catálogo por categorias e experiência responsiva no desktop e no mobile.",
    image: "/portfolio/mp.jpeg",
    url: "https://www.mpmelhorpreco.com.br/",
    tag: "Loja virtual",
  },
] as const;

/* ---- Números ---- */
export const stats = [
  { value: "3 dias", label: "Entrega expressa", note: "Primeira versão no ar" },
  { value: "40+", label: "Sites entregues", note: "Pequenos e médios negócios" },
  { value: "100%", label: "Do seu jeito", note: "Revisões até aprovar" },
  { value: "5.0", label: "Avaliação média", note: "Clientes no Google" },
] as const;

/* ---- Depoimentos ---- */
export const testimonials = [
  {
    quote:
      "O site ficou muito mais organizado e fácil de apresentar para nossos clientes. Hoje conseguimos mostrar melhor nossos produtos e a empresa de forma profissional.",
    name: "PLASFAN",
    role: "",
  },
  {
    quote:
      "A ideia era ter um site que mostrasse nossos produtos de um jeito mais bonito e atual. O resultado ficou bem próximo do que imaginávamos.",
    name: "Q'DELÍCIA SORVETES",
    role: "",
  },
  {
    quote:
      "Precisávamos de um site que facilitasse a apresentação dos produtos e deixasse a experiência de compra mais clara. Ficou simples, funcional e com a nossa identidade.",
    name: "FILHO DO CRIADOR",
    role: "",
  },
] as const;

/* ---- About: valores ---- */
export const values = [
  {
    title: "Beleza que posiciona",
    body: "Layout premium não é luxo — é a primeira impressão que fecha negócio.",
  },
  {
    title: "Agilidade",
    body: "Entrega expressa sem sacrificar acabamento. Rápido e bem-feito, junto.",
  },
  {
    title: "Parceria",
    body: "A gente fala a sua língua e constrói com você — não para você.",
  },
  {
    title: "Acesso",
    body: "Design de alto padrão ao alcance do pequeno e médio negócio.",
  },
] as const;

export const faqs = [
  {
    q: "Meu site fica pronto em 3 dias mesmo?",
    a: "O Site Express, sim: primeira versão completa no ar em até 3 dias úteis depois do briefing e do envio do material. Projetos maiores (institucional, loja) têm prazo combinado antes — em dias, não meses.",
  },
  {
    q: "Quanto custa?",
    a: "Menos do que você imagina para o padrão que entregamos. O valor é fechado antes de começar, sem surpresa no fim. Chama no WhatsApp que a gente passa os valores na hora.",
  },
  {
    q: "Preciso entender de tecnologia?",
    a: "Zero. A gente cuida de domínio, hospedagem, publicação e manutenção — e explica tudo em português claro, sem tecniquês.",
  },
  {
    q: "E depois que o site está no ar?",
    a: "Suporte de verdade, sem sumir depois da entrega. E se quiser evoluir sempre, o Hub SELVA cuida de ajustes, conteúdo e melhorias contínuas por assinatura.",
  },
] as const;
