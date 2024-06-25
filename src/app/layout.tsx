import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const notosans = Noto_Sans_JP({
    display: "swap",
    weight: "variable",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: "%s | nenrin",
        default: "nenrin.me",
    },
    description: "ねんりん",
    openGraph: {
        type: "website",
        locale: "ja_JP",
        siteName: "nenrin",
        title: {
            template: "%s | nenrin",
            default: "nenrin.me",
        },
    },
    twitter: {
        site: "@nenrin",
        title: {
            template: "%s | nenrin",
            default: "nenrin.me",
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={notosans.className}>
                <NavBar />
                <main className="
                    w-full
                    max-w-3xl
                    mx-auto
                    p-2
                    min-h-screen
                ">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
