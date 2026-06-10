import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import StoreInitializer from "@/components/StoreInitializer";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "MSCO | مصادر الطب",
  description: "كراسي متحركة كهربائية ويدوية بأعلى جودة لتسهيل حياتك اليومية",
  icons: {
    icon: [
      { url: "/msco-logo.png", type: "image/png" },
    ],
    apple: "/msco-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/msco-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/msco-logo.png" />
      </head>
      <body className={`${cairo.className} antialiased bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <StoreInitializer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
