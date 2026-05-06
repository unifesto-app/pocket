import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const agrandir = localFont({
  src: "./assets/fonts/Agrandir/Agrandir-Regular.otf",
  variable: "--font-agrandir",
  weight: "400",
  display: "swap",
});

const sweetApricot = localFont({
  src: "./assets/fonts/SweetApricot/SweetApricot.ttf",
  variable: "--font-sweet-apricot",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pocket by Unifesto — Campus Rewards & Referrals",
  description: "Earn Uni Coins by attending events, refer friends for rewards, and redeem for campus perks. All your event earnings and transactions in one place.",
  keywords: [
    "campus rewards",
    "uni coins",
    "student rewards",
    "referral program",
    "event rewards",
    "campus currency",
    "digital rewards",
    "Unifesto",
    "Pocket",
    "student benefits"
  ],
  authors: [{ name: "Unifesto" }],
  openGraph: {
    title: "Pocket by Unifesto",
    description: "Campus rewards for earning, saving, and spending. Earn Uni Coins and refer friends for rewards.",
    type: "website",
    url: "https://pocket.unifesto.app",
    siteName: "Pocket by Unifesto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocket by Unifesto",
    description: "Campus rewards for earning, saving, and spending Uni Coins.",
    site: "@unifestoapp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${agrandir.variable} ${sweetApricot.variable}`}>
      <body className="font-agrandir antialiased">
        {children}
      </body>
    </html>
  );
}
