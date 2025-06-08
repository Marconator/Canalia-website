import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canalia - Automatiza la rutina",
  description:
      "Transformamos empresas a través de la automatización inteligente de procesos.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="es">
      <body className="antialiased">{children}</body>
      </html>
  );
}
