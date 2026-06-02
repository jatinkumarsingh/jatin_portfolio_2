"use client";

import { motion } from "framer-motion";
import { CircuitPattern, GridDots } from "@/components/ui/Decorative";
import { BookOpen, Flame } from "lucide-react";

/* Animations */
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* Proficiency tag — categorical, not quantitative */
type Depth = "daily" | "frequent" | "proficient";
type Tool = { name: string; depth: Depth; detail: string };
type Category = { name: string; color: string; textColor: string; tools: Tool[] };

const depthLabel: Record<Depth, string> = {
    daily: "Daily driver",
    frequent: "Frequent",
    proficient: "Proficient",
};

export const categories: Category[] = [
    {
        name: "Frontend",
        color: "bg-acid",
        textColor: "text-ink",
        tools: [
            { name: "Next.js", depth: "daily", detail: "Full-stack React framework with App Router and server components." },
            { name: "React", depth: "daily", detail: "Modern component architecture with hooks and state management." },
            { name: "TypeScript", depth: "daily", detail: "Type-safe JavaScript for robust and maintainable code." },
            { name: "Tailwind CSS", depth: "daily", detail: "Utility-first CSS framework for responsive design." },
            { name: "Framer Motion", depth: "frequent", detail: "Smooth animations and interactive UI components." },
        ],
    },
    {
        name: "AI/ML & Data",
        color: "bg-hotpink",
        textColor: "text-cream",
        tools: [
            { name: "Python", depth: "daily", detail: "Primary language for ML, NLP, and AI applications." },
            { name: "Machine Learning", depth: "frequent", detail: "scikit-learn, regression, classification, model training." },
            { name: "LangChain", depth: "frequent", detail: "LLM framework for building AI-powered applications." },
            { name: "GenAI", depth: "frequent", detail: "Working with LLMs and generative AI models." },
            { name: "NLP", depth: "daily", detail: "Natural language processing with NLTK, TF-IDF, text classification." },
            { name: "LangGraph", depth: "proficient", detail: "Graph-based AI workflows and agent systems." },
        ],
    },
    {
        name: "Backend & Database",
        color: "bg-electric",
        textColor: "text-cream",
        tools: [
            { name: "Node.js", depth: "frequent", detail: "JavaScript runtime for backend development." },
            { name: "Express", depth: "frequent", detail: "Lightweight web framework for API development." },
            { name: "PostgreSQL", depth: "frequent", detail: "Relational database for data persistence." },
            { name: "MongoDB", depth: "proficient", detail: "NoSQL database for flexible schemas." },
            { name: "MySQL", depth: "proficient", detail: "Relational database management." },
            { name: "Prisma", depth: "frequent", detail: "Modern ORM for database operations." },
        ],
    },
    {
        name: "DevOps & Cloud",
        color: "bg-vivid",
        textColor: "text-cream",
        tools: [
            { name: "Docker", depth: "frequent", detail: "Containerization for consistent deployment." },
            { name: "GitHub Actions", depth: "frequent", detail: "CI/CD automation for testing and deployment." },
            { name: "AWS", depth: "proficient", detail: "Cloud services and infrastructure." },
            { name: "Git & GitHub", depth: "daily", detail: "Version control and collaboration." },
            { name: "Turborepo", depth: "proficient", detail: "Monorepo management and optimization." },
        ],
    },
    {
        name: "Testing & QA",
        color: "bg-acid",
        textColor: "text-ink",
        tools: [
            { name: "Cypress", depth: "frequent", detail: "End-to-end testing framework." },
            { name: "Playwright", depth: "frequent", detail: "Cross-browser automated testing." },
            { name: "Postman", depth: "frequent", detail: "API testing and documentation." },
            { name: "API Testing", depth: "frequent", detail: "RESTful API validation and testing." },
        ],
    },
];

export const learning = [
    { name: "Advanced LLM Architecture", reason: "Deeper understanding of transformer models and fine-tuning." },
    { name: "Kubernetes", reason: "Container orchestration for scalable applications." },
    { name: "Solidity", reason: "Smart contracts and blockchain development." },
    { name: "GraphQL", reason: "Alternative API query language for flexible data fetching." },
];

export function StatusBar() {
    const total = categories.reduce((acc, c) => acc + c.tools.length, 0);
    return (
        <div className="w-full bg-ink border-b-[3px] border-ink py-2 px-4 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                <span className="font-mono text-xs font-bold text-cream/70 uppercase tracking-widest">system://arsenal</span>
            </div>
            <span className="font-mono text-xs font-bold text-cream/60 tracking-widest uppercase">
                {total} TOOLS · {categories.length} CATEGORIES
            </span>
        </div>
    );
}

export function HeaderSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-16 mb-8 md:mb-12">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/60 mb-3">Tech Stack</div>
                <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-heading font-bold text-ink leading-[0.85] tracking-tighter uppercase mb-6">
                    The<br />Arsenal
                </h1>
                <p className="font-mono text-sm md:text-base text-ink/85 max-w-xl leading-relaxed">
                    The tools and technologies I use to build AI-powered applications and modern web solutions.
                    Organized by category and proficiency level.
                </p>
            </motion.div>
        </section>
    );
}

export function CategoriesSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {categories.map((category) => (
                    <motion.div
                        key={category.name}
                        variants={fadeUp}
                        className={`neo-card ${category.color} ${category.textColor} p-6 flex flex-col justify-between relative overflow-hidden`}
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
                            <GridDots className="w-full h-full" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-heading font-bold text-2xl uppercase tracking-tight mb-6 border-b-[3px] border-current pb-2">
                                {category.name}
                            </h2>
                            <div className="space-y-4">
                                {category.tools.map((tool) => (
                                    <div
                                        key={tool.name}
                                        className="border-b border-current/15 last:border-0 pb-3 last:pb-0"
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-heading font-bold text-base uppercase tracking-tight">{tool.name}</span>
                                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border border-current rounded-full">
                                                {depthLabel[tool.depth]}
                                            </span>
                                        </div>
                                        <p className="font-mono text-xs opacity-80 leading-relaxed">{tool.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export function CurrentlyLearningSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="neo-card bg-ink text-cream p-6 md:p-12 relative overflow-hidden"
            >
                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-5">
                    <CircuitPattern className="w-full h-full" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <BookOpen className="text-acid" size={24} />
                        <h2 className="font-heading font-bold text-2xl uppercase tracking-tight text-cream">
                            Currently Learning & Exploring
                        </h2>
                    </div>
                    <p className="font-mono text-sm text-cream/70 max-w-2xl mb-8 leading-relaxed">
                        Technology never stands still, and neither do I. Here are the concepts and tools I am actively studying or experimenting with right now.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {learning.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                className="flex gap-4 items-start p-4 border-[3px] border-cream/10 bg-cream/5 hover:border-acid/30 transition-colors"
                            >
                                <div className="font-heading font-bold text-xl text-acid w-8 flex-shrink-0">
                                    {(idx + 1).toString().padStart(2, "0")}
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-cream">
                                        {item.name}
                                    </h3>
                                    <p className="font-mono text-xs text-cream/60 mt-1 leading-relaxed">
                                        {item.reason}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export function CTASection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 md:px-8"
        >
            <div className="neo-card bg-acid text-ink p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
                    <GridDots className="w-full h-full" />
                </div>
                <div className="relative z-10">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight mb-4 text-ink">
                        Need a custom stack for your project?
                    </h2>
                    <p className="font-mono text-sm md:text-base text-ink/80 mb-8 max-w-xl mx-auto leading-relaxed">
                        I can help architect and build your application from scratch, picking the optimal combination of tools for speed, scalability, and developer experience.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/contact"
                            className="inline-block bg-ink text-cream font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all hover-shake"
                        >
                            Let&apos;s Collaborate
                        </a>
                        <a
                            href="/work"
                            className="inline-block bg-cream text-ink font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink hover:bg-ink hover:text-cream transition-colors"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
