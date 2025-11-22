import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MiniAppProvider } from "@/components/context/miniapp-provider";
import { Footer } from "@/components/footer";
import { ConnectWalletButton } from "@/components/ui/ConnectWalletButton";
import { description, title } from "@/lib/metadata";

const inter = localFont({
  src: "./InterVariable.ttf",
});

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <MiniAppProvider>
          <div className="font-sans min-h-screen flex flex-col place-content-between gap-2">
            <header className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
              <h1 className="text-xl font-semibold">Doodle Mint</h1>
              <ConnectWalletButton />
            </header>
            {children}
            <Footer />
          </div>
        </MiniAppProvider>
      </body>
    </html>
  );
}
