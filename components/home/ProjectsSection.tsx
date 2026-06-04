"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { CircuitPattern } from "@/components/ui/Decorative";
import { ArrowUpRight, Smartphone, Activity, Repeat, Sparkles } from "lucide-react";

export function ProjectsSection() {

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-end justify-between mb-6"
            >
                <div>
                    <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-ink">Latest Projects</h2>
                </div>
                <a href="/work" className="font-mono text-sm font-bold uppercase tracking-wider text-ink hover:text-electric transition-colors flex items-center gap-1 group">
                    View All 5 <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </motion.div>

            <BentoGrid className="md:auto-rows-[18rem] gap-5">
                {/* Doctor Appointment System — full-stack telemedicine */}
                <BentoGridItem
                    index={0}
                    className="md:col-span-2 md:row-span-2"
                    title="Doctor Appointment System"
                    description="Telemedicine platform with video consultations, booking, and payments. Next.js · Vonage · PostgreSQL"
                    bgColor="bg-acid"
                    textColor="text-ink"
                    icon={<Smartphone size={36} className="text-ink" />}
                    href="/work/doctor-appointment-system"
                    header={
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-[7rem] md:text-[12rem] font-heading font-bold tracking-tighter text-ink/10 leading-none select-none">TELEMEDICINE</span>
                        </div>
                    }
                />

                {/* ShopSmart — e-commerce with DevOps */}
                <BentoGridItem
                    index={1}
                    className="md:col-span-1 md:row-span-2"
                    title="ShopSmart"
                    description="Full-stack e-commerce with Docker · CI/CD · Admin Dashboard"
                    bgColor="bg-ink"
                    textColor="text-cream"
                    icon={<Activity size={36} className="text-cream" />}
                    href="/work/shopsmart"
                    header={
                        <div className="h-full flex flex-col justify-center space-y-3 font-mono text-sm font-bold pl-3 border-l-[3px] border-cream/40 ml-4 mt-4">
                            <p className="text-cream/85">&gt; Docker container.</p>
                            <p className="text-cream/85">&gt; CI/CD pipeline.</p>
                            <p className="text-cream/85">&gt; Prod deploy.</p>
                            <p className="text-cream/85">&gt; Status: Ready.</p>
                            <p className="text-cream animate-blink">_</p>
                        </div>
                    }
                />

                {/* News Credibility Monitor — ML/NLP */}
                <BentoGridItem
                    index={2}
                    className="md:col-span-1"
                    title="News-Credibility-Monitor"
                    description="ML-powered fake news detection · TF-IDF · Logistic Regression · Streamlit"
                    bgColor="bg-acid"
                    textColor="text-ink"
                    icon={<Repeat size={28} className="text-ink" />}
                    href="/work/news-credibility-monitor"
                    header={
                        <div className="absolute inset-0 pointer-events-none">
                            <CircuitPattern className="w-full h-full text-ink/15" />
                        </div>
                    }
                />

                {/* Exam Score Prediction — AI/ML */}
                <BentoGridItem
                    index={3}
                    className="md:col-span-1"
                    title="Exam Score Prediction"
                    description="ML regression model · scikit-learn · Streamlit interface"
                    bgColor="bg-ink"
                    textColor="text-cream"
                    icon={<Sparkles size={28} className="text-cream" />}
                    href="/work/exam-score-prediction"
                />
            </BentoGrid>
        </section>
    );
}
