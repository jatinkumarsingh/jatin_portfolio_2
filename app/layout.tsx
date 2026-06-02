import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";
import ThemeToggle from "@/components/ui/ThemeToggle";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CommandPalette from "@/components/ui/CommandPalette";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import { themeScript } from "@/lib/theme-script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://jatin-kumar-singh.dev"; // TODO: Replace with actual portfolio domain

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Jatin Kumar Singh — AI Developer",
        template: "%s · Jatin Kumar Singh",
    },
    description:
        "Jatin Kumar Singh — Aspiring Generative AI Developer. Skilled in Python and modern web technologies (React, JavaScript). Building AI-powered applications using machine learning and NLP. 100+ LeetCode problems solved.",
    keywords: ["AI developer", "Generative AI", "Machine Learning", "Next.js", "React", "Python", "NLP", "Jatin Kumar Singh", "AI developer India"],
    authors: [{ name: "Jatin Kumar Singh", url: SITE_URL }],
    creator: "Jatin Kumar Singh",
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        type: "website",
        url: SITE_URL,
        siteName: "Jatin Kumar Singh",
        title: "Jatin Kumar Singh — AI Developer",
        description:
            "Aspiring Generative AI Developer building AI-powered applications using Python, Next.js, React, and machine learning.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jatin Kumar Singh — AI Developer",
        description:
            "Aspiring Generative AI Developer skilled in Python, ML, and modern web technologies.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#F5F1E8" },
        { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: themeScript,
                    }}
                />
            </head>
            <body className="font-mono bg-cream text-ink antialiased selection:bg-acid selection:text-ink md:cursor-none">
                <ThemeProvider>
                    <LoadingScreen />
                    <CustomCursor />
                    <ScrollProgress />
                    <CommandPalette />

                    <main className="pb-24 md:pb-20">{children}</main>

                    {/* Bottom Navigation
                        - Mobile: compact primary set (Home / Work / Stack / Talk) with bigger touch targets
                        - Desktop: full nav incl. Services, CV, theme toggle */}
                    <nav className="fixed bottom-0 left-0 w-full bg-ink border-t-[3px] border-ink z-[100] shadow-[0px_-4px_20px_rgba(0,0,0,0.3)]">
                        <div className="max-w-7xl mx-auto px-3 md:px-6 py-2 md:py-3 flex items-center gap-1 md:gap-2">
                            {/* Primary links — visible on mobile */}
                            <div className="flex items-center gap-1 md:gap-1 flex-1">
                                <NavLink href="/" label="Home" />
                                <NavLink href="/work" label="Work" />
                                <NavLink href="/stack" label="Stack" />
                                <NavLink href="/services" label="Services" desktopOnly />
                            </div>

                            {/* Trailing controls */}
                            <div className="flex items-center gap-1 md:gap-2">
                                <div className="hidden md:block">
                                    <MagneticButton>
                                        <a
                                            href="/22.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-cream/80 hover:text-acid transition-colors px-3 py-2 border-[2px] border-cream/40 hover:border-acid min-h-[40px]"
                                            aria-label="View Resume"
                                        >
                                            Resume ↓
                                        </a>
                                    </MagneticButton>
                                </div>

                                <ThemeToggle />

                                <MagneticButton>
                                    <Link
                                        href="/contact"
                                        className="bg-acid text-ink px-3 md:px-5 py-2 md:py-2.5 font-heading font-bold text-xs md:text-sm uppercase tracking-wider border-[3px] border-ink hover:bg-cream transition-colors min-h-[40px] inline-flex items-center"
                                    >
                                        Let&apos;s Talk
                                    </Link>
                                </MagneticButton>
                            </div>
                        </div>
                    </nav>

                    {/* Keyboard shortcut hint — desktop only */}
                    <div className="fixed bottom-16 right-4 hidden lg:block z-[99]">
                        <div className="font-mono text-xs font-bold text-ink/50 uppercase tracking-wider flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 border-2 border-ink/25 text-ink/60">⌘K</kbd>
                            Quick Nav
                        </div>
                    </div>
                </ThemeProvider>
                <SpeedInsights />
            </body>
        </html>
    );
}

function NavLink({ href, label, desktopOnly = false }: { href: string; label: string; desktopOnly?: boolean }) {
    return (
        <MagneticButton>
            <Link
                href={href}
                className={`font-mono text-xs md:text-sm font-bold uppercase tracking-wider text-cream/80 hover:text-acid transition-colors px-3 md:px-4 py-2 min-h-[40px] inline-flex items-center ${desktopOnly ? "hidden md:inline-flex" : ""}`}
            >
                {label}
            </Link>
        </MagneticButton>
    );
}
