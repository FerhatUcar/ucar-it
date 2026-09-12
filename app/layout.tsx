import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/navigation/navbar";

import "../styles/globals.css";
import "../styles/site.css";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ucar IT",
  description: "Software solutions",
  applicationName: "ucar-it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="ucar-it"
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
