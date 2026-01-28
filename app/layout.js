import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Portfolio de Fanny Saez",
  description: "Développeuse Full Stack passionnée",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning className={`${jetbrainsMono.variable}`} style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}