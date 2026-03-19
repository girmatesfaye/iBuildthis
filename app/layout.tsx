import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header>This is header</header>
        {children}
        <footer>this is footer</footer>
      </body>
    </html>
  );
}
