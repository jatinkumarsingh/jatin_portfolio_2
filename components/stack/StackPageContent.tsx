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
