import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import StoreInitializer from "@/components/StoreInitializer";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "MSCO | مصادر الطب",
  description: "كراسي متحركة كهربائية ويدوية لتسهيل أداء مناسك الحج والعمرة",
  icons: {
    icon: "https://mscostore.com/wp-content/uploads/2025/01/cropped-Medical-Sources-Company-LOGO-0%D9%A1-6.png",
    apple: "https://mscostore.com/wp-content/uploads/2025/01/cropped-Medical-Sources-Company-LOGO-0%D9%A1-6.png",
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
        <link 
          rel="icon" 
          href="https://mscostore.com/wp-content/uploads/2025/01/cropped-Medical-Sources-Company-LOGO-0%D9%A1-6.png" 
          type="image/png"
        />
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
