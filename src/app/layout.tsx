import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import Navigation from "./components/navigation";
import { cn } from "@/lib/utils";
import { CommandMenu } from "./components/commandmenu";
import FadeInContainer from "./components/framer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s", default: "Tatu Cosmin" },
  description:
    "Expert web developer specializing in custom websites, responsive design, and web applications. Delivering high-quality, SEO-optimized, and user-friendly websites tailored to your business needs. Get in touch for a free consultation.",
  keywords:
    "web developer, cosmincodes, custom websites, web applications, responsive design, SEO web development, user-friendly websites, frontend development, backend development, full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${outfit.className} h-screen w-full`)}>
        <CommandMenu />
        <div className="mx-auto flex max-w-screen-sm flex-col px-6 py-12">
          <Navigation />
          <FadeInContainer>{children}</FadeInContainer>
        </div>
      </body>
    </html>
  );
}
