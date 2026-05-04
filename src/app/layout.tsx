import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import StoreInitializer from "@/components/StoreInitializer";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "MSCO | مصادر الطب",
  description: "كراسي متحركة كهربائية ويدوية لتسهيل أداء مناسك الحج والعمرة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.className} antialiased bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <StoreInitializer />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
