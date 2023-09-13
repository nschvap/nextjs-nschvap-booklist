import Header from "@/components/header/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "@/context/book-context-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pruebas Tecnicas | Book List",
  description: "Generado con NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
