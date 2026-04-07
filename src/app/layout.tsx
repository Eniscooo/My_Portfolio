import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/transition_prov";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olarinoye Eniola | Full stack Web Developer",
  description:
    "Frontend-leaning Web Developer, Full-Stack Capable. I don't just write code — I build systems that ship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-900 text-dark-50`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
