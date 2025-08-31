import type { Metadata } from "next";
import { IBM_Plex_Mono as FontMono, IBM_Plex_Sans as FontSans, Poppins } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/components/providers/Providers";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
})
const fontMono = FontMono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-pmono",
});

const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-psans",
})

export const metadata: Metadata = { 
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${fontSans.variable} ${fontMono.variable} ${poppins.variable}`}
      suppressHydrationWarning>
      <body
        className={`bg-background antialiased`}
      >
        <Providers>
          {children}
        </Providers>
          
      </body>
    </html>
  );
}
