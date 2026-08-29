import type { Metadata, Viewport } from "next";
import { Inter, Hanken_Grotesk, Fragment_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const displayFont = Inter({
  subsets: ["latin"],
  variable: "--font-display-var",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body-var",
  display: "swap",
});

const fragment = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-mono-var",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Sites premium prontos em 3 dias`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "web design premium",
    "desenvolvimento de sites",
    "Next.js",
    "performance",
    "UX UI design",
    "site em 3 dias",
    "sites para pequenas empresas",
    "landing pages",
  ],
  authors: [{ name: site.legal }],
  creator: site.legal,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.legal,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legal,
  description: site.description,
  url: site.url,
  email: site.email,
  slogan: site.tagline,
  areaServed: "Global",
  knowsAbout: [
    "Web Design",
    "Web Development",
    "UX/UI Design",
    "Digital Architecture",
    "Performance Optimization",
    "Conversion Rate Optimization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${displayFont.variable} ${hanken.variable} ${fragment.variable} antialiased`}
    >
      <body className="grain min-h-screen bg-canopy text-mist">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
