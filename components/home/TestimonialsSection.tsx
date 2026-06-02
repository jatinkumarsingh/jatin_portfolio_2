import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { stagger, fadeUp } from "./animations";

// TODO: Add testimonials from colleagues, professors, or project collaborators
// For now, this section is hidden and should be populated with real testimonials
// when working on projects with others or receiving feedback from mentors

const testimonials: any[] = [];
// Example placeholder for future testimonials:
/*
const testimonials = [
    {
        quote: "Jatin is a skilled developer with strong problem-solving abilities. His work on the telemedicine platform was clean and efficient.",
        author: "Professor/Colleague Name",
        role: "Role / Company",
        accent: "bg-acid",
    },
];
*/

export function TestimonialsSection() {
    // TODO: Show testimonials section when testimonials are available
    if (testimonials.length === 0) {
        return null; // Hide section if no testimonials
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
        >
            <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/60 mb-2">What People Say</div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-ink mb-8">Testimonials</h2>

            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid md:grid-cols-2 gap-5"
            >
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        className={`${testimonial.accent} neo-card p-6 md:p-8 flex flex-col justify-between`}
                    >
                        <div>
                            <Quote size={24} className="mb-4 opacity-60" />
                            <p className="font-mono text-sm md:text-base leading-relaxed mb-6">{testimonial.quote}</p>
                        </div>
                        <div>
                            <p className="font-heading font-bold text-sm uppercase">{testimonial.author}</p>
                            <p className="font-mono text-xs opacity-70">{testimonial.role}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
