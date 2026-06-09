"use client";

import { motion } from "framer-motion";
import { GridDots } from "@/components/ui/Decorative";
import { Mail, CalendarDays, Github, ArrowUpRight } from "lucide-react";

export function CtaSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
        >
            <div className="neo-card bg-acid text-ink-fixed p-8 md:p-12 text-center relative overflow-hidden gradient-top-accent">
                <GridDots className="absolute inset-0 w-full h-full text-ink-fixed opacity-5" />
                <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-acid/20 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                    <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink-fixed opacity-60 mb-3">{"/// Open for new work · Same-day reply ///"}</div>
                    <h2 className="font-heading font-bold text-3xl md:text-6xl uppercase tracking-tight mb-4 text-ink-fixed">Have something to build?</h2>
                    <p className="font-mono text-sm md:text-base opacity-90 mb-8 max-w-xl mx-auto leading-relaxed text-ink-fixed">
                        Brief to App Store. Brief to Vercel. On tight timelines. Tell me what
                        you&apos;re building and I&apos;ll come back with a realistic plan within
                        the day — or book a 15-min call and we&apos;ll figure it out together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="/contact"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-acid text-ink-fixed font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all hover-shake"
                        >
                            <Mail size={18} /> Get In Touch
                        </a>
                        <a
                            href="/contact"
                            className="inline-block bg-acid text-ink-fixed font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all hover-shake"
                        >
                            Start a Project →
                        </a>
                        <a
                            href="mailto:jatin.singh2024@nst.rishihood.edu.in"
                            className="inline-flex items-center gap-2 bg-acid text-ink-fixed font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all hover-shake"
                        >
                            <Mail size={18} /> Email Direct
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
