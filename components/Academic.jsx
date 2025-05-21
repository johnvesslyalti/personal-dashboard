'use client';

import { motion } from "framer-motion";

export default function Academic() {
    const academics = [
        {id: 1, course: "Bachelor of Science in Computer Science", universityName: "Andhra University", graduation: 2024},
        {id: 2, course: "XII", universityName: "State Board of Andhra Pradesh", graduation: 2021},
        {id: 3, course: "X", universityName: "State Board of Andhra Pradesh", graduation: 2019}
    ]
    return(
        <section id="academic" className="min-h-screen flex flex-col p-5">
            <div className="text-xl text-center font-bold">Academic</div>
            <div className="flex gap-5 my-auto flex-col justify-center items-center">
                {academics.map((academic) => (
                    <motion.div 
                    key={academic.id}
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: academic.id * 0.05}}
                    viewport={{ once: false }}
                    >
                    <div className="flex flex-col w-100 justify-center items-center backdrop:blur-lg bg-black/30 border-1 border-white/20 p-5 shadow-xl rounded-xl">
                        <div className="text-lg font-bold">{academic.course}</div>
                        <div>{academic.universityName}</div>
                        <div>Graduation: {academic.graduation}</div>
                    </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}