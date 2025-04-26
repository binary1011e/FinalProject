// src/app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Debt Worries & Inflation",
  description: "An empirical test of the Fiscal Theory of the Price Level",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-gray-50">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
