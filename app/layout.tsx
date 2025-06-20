import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canalia - Automatiza la rutina",
  description:
      "Transformamos empresas a través de la automatización inteligente de procesos.",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    }
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
