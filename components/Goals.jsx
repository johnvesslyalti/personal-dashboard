'use client'

import { motion } from "framer-motion";

export default function Goals() {
    const goals = [
        {id: 1, text: "Become a proficient full stack developer."},
        {id: 2, text: "Master frontend frameworks like React and Next.js."},
        {id: 3, text: "Contribute to open-source projects."},
        {id: 4, text: "Land a full-time developer job."},
        {id: 5, text: "Start a developer YouTube channel."},
    ]
    return (
        <section id="goals" className="min-h-screen p-5">
            <motion.div 
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 1 * 0.05}}
                    viewport={{ once: false }}
                    ><h2 className="text-xl font-bold text-center mb-8">Goals</h2></motion.div>
            <ul className="max-w-xl mx-auto flex flex-col gap-5">
                {goals.map((goal) => (
                                <motion.div 
                                key={goal.id}
                                initial={{ opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.4, delay: goal.id * 0.05}}
                                viewport={{ once: false }}
                    ><li className=" flex justify-center items-center backdrop:blur-xl bg-black/20 border-1 border-white/30 p-5 rounded-xl">{goal.text}</li></motion.div>
                ))}
            </ul>
        </section>
    );
}