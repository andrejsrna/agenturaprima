import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ModalProvider } from "./context/ModalContext";
import InquiryModal from "./components/InquiryModal";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentúra Prima - Komplexné eventové služby na mieru",
  description: "Od kultúrnych podujatí cez firemné eventy až po zážitky pre deti – všetko kvalitne, profesionálne a s úsmevom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        <ModalProvider>
          <Header />
          {children}
          <InquiryModal />
        </ModalProvider>
      </body>
    </html>
  );
}
