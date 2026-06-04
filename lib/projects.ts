export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    metrics: { label: string; value: string }[];
    color: string;
    textColor: string;
    /** GitHub repo URL (or wherever the source canonically lives). */
    link: string;
    /** Live demo / production URL (Vercel, GH Pages, App Store, etc.). */
    liveDemo?: string;
    /** Apple App Store listing URL. */
    appStore?: string;
    /** Private commercial repo — hides the "View Code" link. */
    private?: boolean;
    category: string;
    problem: string;
    solution: string;
    outcomes: string[];
}

// Portfolio projects from Jatin Kumar Singh
// Updated: 2026-06-02

export const projects: Project[] = [
    /* ─────────── TIER A · FULL STACK APPLICATIONS ─────────── */

    {
        id: "001",
        slug: "doctor-appointment-system",
        title: "Doctor Appointment System",
        description: "Telemedicine platform for booking and attending video consultations with verified doctors. Next.js · React · PostgreSQL · Prisma · TailwindCSS · Vonage Video API. Full-stack application with credit-based payment system.",
        longDescription: "A comprehensive telemedicine platform built with Next.js and React. Features include video consultations via Vonage Video API, appointment booking system, doctor verification and availability management, and a credit-based payment system with admin dashboard. The platform handles user authentication, real-time video calls, appointment scheduling, and payment processing. Built with PostgreSQL for data persistence, Prisma for ORM, and TailwindCSS for responsive UI.",
        tech: ["Next.js", "React", "PostgreSQL", "Prisma", "TailwindCSS", "Vonage Video API", "Node.js"],
        metrics: [
            { label: "Features", value: "Video · Booking · Payments" },
            { label: "Components", value: "Admin Dashboard" },
            { label: "Status", value: "Completed" },
        ],
        color: "bg-acid",
        textColor: "text-ink",
        link: "https://github.com/jatin-kumar-singh/Doctor_Appointment",
        liveDemo: "https://doctor-appointment-kappa-three.vercel.app/",
        category: "Full Stack",
        problem: "Patients struggle to find and book appointments with qualified doctors. Traditional systems are scattered across multiple platforms and lack integrated video consultation capabilities.",
        solution: "A unified platform that connects patients with verified doctors, enables real-time video consultations, manages appointment scheduling, and handles payments seamlessly through a credit system.",
        outcomes: [
            "Full-stack telemedicine platform with video integration",
            "Real-time consultation capability via Vonage",
            "Appointment booking and doctor verification system",
            "Credit-based payment system with admin dashboard",
            "Responsive design with TailwindCSS",
        ],
    },

    {
        id: "002",
        slug: "shopsmart",
        title: "ShopSmart",
        description: "Full-stack e-commerce platform with automated CI/CD pipelines and containerized deployment. React · Node.js · Express · Prisma · PostgreSQL · Docker. User authentication, product management, shopping cart, checkout, and admin panel.",
        longDescription: "ShopSmart is a production-ready e-commerce platform demonstrating DevOps best practices. Built with React for the frontend and Node.js/Express for the backend, it features user authentication, product management, shopping cart functionality, checkout process, and a comprehensive admin panel. The entire application is containerized with Docker and includes automated CI/CD pipelines for continuous integration and deployment.",
        tech: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "CI/CD"],
        metrics: [
            { label: "Features", value: "Auth · Shop · Checkout" },
            { label: "DevOps", value: "Docker · CI/CD" },
            { label: "Status", value: "Completed" },
        ],
        color: "bg-hotpink",
        textColor: "text-cream",
        link: "https://github.com/jatin-kumar-singh/shopsmart",
        liveDemo: "https://shopsmart-3fxj.vercel.app/",
        category: "Full Stack",
        problem: "E-commerce businesses need scalable, maintainable platforms with proper deployment pipelines. Manual deployment processes are error-prone and time-consuming.",
        solution: "A complete e-commerce platform with containerized infrastructure, automated CI/CD pipelines, and comprehensive admin controls for managing products, orders, and users.",
        outcomes: [
            "Full e-commerce functionality (products, cart, checkout)",
            "User authentication and authorization system",
            "Admin dashboard for product and order management",
            "Containerized deployment with Docker",
            "Automated CI/CD pipelines for reliable deployments",
        ],
    },

    /* ─────────── TIER B · AI/ML APPLICATIONS ─────────── */

    {
        id: "003",
        slug: "news-credibility-monitor",
        title: "News-Credibility-Monitor",
        description: "News credibility classification application using NLP and machine learning. Python · Streamlit · scikit-learn · NLTK · Pandas. Real-time fake news prediction with text preprocessing and TF-IDF with Logistic Regression.",
        longDescription: "An AI-powered application that analyzes news articles to classify them as real or fake. The system uses natural language processing techniques including TF-IDF vectorization combined with Logistic Regression for classification. Text preprocessing with NLTK ensures data quality, and Streamlit provides an intuitive user interface for real-time predictions. Built as a demonstration of ML pipeline implementation and text classification.",
        tech: ["Python", "Streamlit", "scikit-learn", "NLTK", "Pandas", "TF-IDF", "Logistic Regression"],
        metrics: [
            { label: "ML Model", value: "Logistic Regression" },
            { label: "NLP", value: "TF-IDF Vectorization" },
            { label: "UI", value: "Streamlit" },
        ],
        color: "bg-electric",
        textColor: "text-cream",
        link: "https://github.com/jatin-kumar-singh/News_Credibility",
        liveDemo: "https://news-credibility-monitor.vercel.app/",
        category: "AI/ML",
        problem: "Misinformation spreads rapidly online. Users need tools to quickly assess news credibility before sharing or believing content.",
        solution: "An ML-powered text classifier that analyzes news articles using TF-IDF vectorization and Logistic Regression to predict whether content is real or fake, with comprehensive text preprocessing for accuracy.",
        outcomes: [
            "Real-time fake news detection using ML",
            "TF-IDF + Logistic Regression classification pipeline",
            "NLTK-based text preprocessing for data quality",
            "User-friendly Streamlit interface",
            "Demonstrable text classification accuracy",
        ],
    },

    {
        id: "004",
        slug: "exam-score-prediction",
        title: "Exam Score Prediction",
        description: "Machine learning application predicting student exam scores based on study habits and lifestyle factors. Python · Streamlit · scikit-learn · Pandas · NumPy. Real-time prediction using regression model with multiple input factors.",
        longDescription: "A predictive machine learning application that estimates student exam scores based on various lifestyle and study factors. Using regression models trained on historical data, the system analyzes multiple input variables including study hours, sleep duration, attendance rate, and other behavioral factors to predict likely exam performance. The Streamlit interface allows students and educators to input parameters and receive immediate score predictions.",
        tech: ["Python", "Streamlit", "scikit-learn", "Pandas", "NumPy", "Joblib", "Regression"],
        metrics: [
            { label: "ML Model", value: "Regression" },
            { label: "Input Factors", value: "6+" },
            { label: "UI", value: "Streamlit" },
        ],
        color: "bg-vivid",
        textColor: "text-cream",
        link: "https://github.com/jatin-kumar-singh/Exam_Score_Prediction",
        liveDemo: "https://github.com/jatin-kumar-singh/Exam_Score_Prediction",
        category: "AI/ML",
        problem: "Students and educators lack data-driven insights about how lifestyle factors correlate with exam performance. Predicting scores can help optimize study strategies.",
        solution: "A regression-based ML model that analyzes study habits, sleep, attendance, and other factors to predict exam scores. The Streamlit app provides instant predictions and helps identify which factors matter most.",
        outcomes: [
            "Regression model predicting exam scores with multiple factors",
            "Real-time score prediction through Streamlit interface",
            "Data-driven insights into study factor importance",
            "Model trained on comprehensive lifestyle and academic data",
            "Demonstrable correlation between habits and performance",
        ],
    },

    /* ─────────── TIER C · CERTIFICATION & LEARNING ─────────── */

    {
        id: "005",
        slug: "competitive-programming",
        title: "Competitive Programming & Problem-Solving",
        description: "100+ LeetCode problems solved across multiple problem categories. Focus on algorithms, data structures, and dynamic programming. Profiles: Codeforces · Leetcode · GitHub repositories with documented solutions.",
        longDescription: "An ongoing personal learning journey in competitive programming and algorithmic problem-solving. Solved 100+ problems on LeetCode covering arrays, linked lists, trees, graphs, dynamic programming, and system design. Consistent practice demonstrates deep understanding of data structures and algorithm optimization. Code solutions are documented with time/space complexity analysis and alternative approaches.",
        tech: ["Python", "JavaScript", "Data Structures", "Algorithms", "Dynamic Programming"],
        metrics: [
            { label: "Problems Solved", value: "100+" },
            { label: "LeetCode Rating", value: "1500+" },
            { label: "Focus", value: "Algorithms & DS" },
        ],
        color: "bg-acid",
        textColor: "text-ink",
        link: "https://github.com/jatinkumarsingh",
        category: "Learning",
        problem: "Mastering algorithmic problem-solving requires consistent practice and deep understanding of underlying concepts.",
        solution: "Systematic approach to solving increasingly complex problems, studying multiple solution approaches, and analyzing algorithmic complexity for each problem.",
        outcomes: [
            "100+ LeetCode problems across all difficulty levels",
            "Strong foundation in data structures and algorithms",
            "1500+ rating on LeetCode demonstrating competitive programming ability",
            "Documented solutions with complexity analysis",
            "Consistent improvement in problem-solving speed and efficiency",
        ],
    },

    /* ─────────── TODO: ADDITIONAL PROJECTS ─────────── */
    // NOTE: Additional project slots available. Add more projects from portfolio as they're completed.
    // TODO: Portfolio website / personal projects
    // TODO: Additional ML/AI projects
    // TODO: Additional full-stack projects
];

/**
 * Helper function to get a project by its slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
