import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Setup the Inter font
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

// Metadata for the site
export const metadata: Metadata = {
  title: "ZSky Solutions - Innovative Business Solutions",
  description: "ZSky Solutions provides cutting-edge technology services, including web development, software solutions, and cloud consulting, to help your business thrive in the digital age.",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Keyframes for animations are now in globals.css or can be here */}
      </head>
      <body className={`${inter.className} bg-gray-50 antialiased text-gray-800`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
