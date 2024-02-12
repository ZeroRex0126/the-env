import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "The Envelope",
  description: "Software Development Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
