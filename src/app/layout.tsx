import type { Metadata } from "next";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { withBasePath } from "@/lib/site-paths";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jakub Trnka | Kreatívny digitálny tvorca",
  description:
    "Portfólio a CV web Jakuba Trnku zameraný na grafický dizajn, AI vizuály, video obsah, správu WordPressu a obsah pre sociálne siete.",
  openGraph: {
    title: "Jakub Trnka | Kreatívny digitálny tvorca",
    description:
      "Grafický dizajn, AI vizuály, video obsah, správa WordPressu a obsah pre sociálne siete.",
    type: "website"
  },
  icons: {
    icon: withBasePath("/logo-jt-2.png"),
    apple: withBasePath("/logo-jt-2.png")
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" data-theme="dark">
      <body>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
