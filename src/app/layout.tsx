import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NightLancer - Your Gateway to Freelance Success",
  description: "NightLancer is a dynamic platform for freelancers, offering opportunities to connect with clients, grow your career, and take control of your work-life balance. Discover gigs, showcase your skills, and achieve success on your own terms with our easy-to-use platform designed to support independent professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
