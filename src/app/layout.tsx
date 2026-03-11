import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VictorLR | DJ & Productor · Bélmez",
  description:
    "DJ y productor musical de Bélmez. Disponible para eventos, bodas y fiestas privadas.",
  openGraph: {
    title: "VictorLR | DJ & Productor · Bélmez",
    description:
      "DJ y productor musical de Bélmez. Disponible para eventos, bodas y fiestas privadas.",
    images: [{ url: "/images/hero/hero-main.jpeg" }],
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
