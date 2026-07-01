import type { Metadata } from "next";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { withBasePath } from "@/lib/site-paths";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jakub Trnka | Kreatívny digitálny tvorca",
  description:
    "Portfólio Jakuba Trnku zamerané na grafiku, AI vizuály, digitálny obsah a online prezentácie pre značky s charakterom.",
  openGraph: {
    title: "Jakub Trnka | Kreatívny digitálny tvorca",
    description:
      "Grafika, AI vizuály a digitálny obsah pre značky, projekty a online prezentácie.",
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
