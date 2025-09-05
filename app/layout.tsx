// app/layout.tsx
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Instituto Marin Cunha",
  description: "Acolhimento e encaminhamento seguro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0ZVRKSZW6J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0ZVRKSZW6J');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
