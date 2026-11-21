import type { Metadata } from "next";
import { Anton, Lato, Montserrat } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Apollo College of Physiotherapy | A unit of AHERF, Est. 1999",
  description:
    "Apollo College of Physiotherapy, part of the Apollo Hospitals Educational and Research Foundation since 1999: departments, faculty, campus and student guidelines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${montserrat.variable} ${anton.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
