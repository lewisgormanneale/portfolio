import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { font_sans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Lewis Gorman-Neale",
  description: "My developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-unbounded antialiased",
          font_sans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex">
            <main className="w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
