import "./globals.css";

export const metadata = {
  title: "Porfolio de Fanny Saez",
  description: "Développeuse Full Stack passionnée"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
