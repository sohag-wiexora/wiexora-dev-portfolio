import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.statement}`, template: `%s | ${site.name}` },
  description: site.description,
  icons: { icon: "/brand/wiexora-mark.svg" },
  openGraph: {
    title: `${site.name} | ${site.statement}`,
    description: site.description,
    type: "website",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630, alt: "WIEXORA gold crystal on a black background" }],
  },
  twitter: { card: "summary_large_image", images: ["/og/default.jpg"] },
};

export const viewport: Viewport = { themeColor: "#030303", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
