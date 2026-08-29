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
  email: "contato@selva.studio",
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
    slug: "cafe-aurora",
    title: "Café Aurora",
    sector: "Cafeteria · Gastronomia",
    year: "2026",
    summary:
      "Site com cardápio, história da casa e pedidos direto no WhatsApp. Fechado na segunda, no ar na quinta.",
    metric: "3 dias",
    metricLabel: "do briefing ao ar",
    accent: "#a6ce39",
  },
  {
    slug: "sorrir-odonto",
    title: "Sorrir Odonto",
    sector: "Clínica odontológica",
    year: "2026",
    summary:
      "Site premium com agendamento online e cara de clínica grande — para uma equipe de três dentistas.",
    metric: "+3x",
    metricLabel: "agendamentos pelo site",
    accent: "#c4f24a",
  },
  {
    slug: "duarte-sa",
    title: "Duarte & Sá",
    sector: "Advocacia",
    year: "2025",
    summary:
      "Presença digital sóbria e elegante para um escritório que vivia só de indicação. Agora o site indica também.",
    metric: "5.0",
    metricLabel: "avaliação no Google",
    accent: "#7c9c2b",
  },
  {
    slug: "vila-verde",
    title: "Pousada Vila Verde",
    sector: "Hotelaria · Turismo",
    year: "2025",
    summary:
      "Site com galeria imersiva e reserva direta — menos comissão de plataforma, mais hóspede fiel.",
    metric: "+180%",
    metricLabel: "reservas diretas",
    accent: "#a6ce39",
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
      "Fechei na segunda e na quinta meu site já estava no ar. Todo mundo pergunta quanto custou — e ninguém acredita quando eu falo.",
    name: "Marina Lopes",
    role: "Dona · Café Aurora",
  },
  {
    quote:
      "Parece site de empresa grande. Pacientes chegam na clínica dizendo que escolheram a gente pela página.",
    name: "Dra. Paula Andrade",
    role: "Sócia · Sorrir Odonto",
  },
  {
    quote:
      "Eu não entendo nada de internet e não precisei entender. Falaram a minha língua do começo ao fim.",
    name: "Carlos Duarte",
    role: "Sócio · Duarte & Sá Advocacia",
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
