import "./globals.css";
export const metadata = { title: "Instituto Marin Cunha", description: "Acolhimento e encaminhamento seguro." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
