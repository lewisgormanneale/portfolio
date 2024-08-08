import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, jetbrains_mono, unbounded } from "@/lib/fonts";
import { cn } from "@/lib/utils";

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
    <html
      lang="en"
      className={cn(
        inter.variable,
        jetbrains_mono.variable,
        unbounded.variable
      )}
      suppressHydrationWarning
    >
      <body className="h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex pt-20">
            <main className="w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
