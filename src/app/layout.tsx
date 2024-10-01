import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nidejia",
  description: "Nidejia Clone",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PoppinsFont.className} antialiased`}>{children}</body>
    </html>
  );
}
