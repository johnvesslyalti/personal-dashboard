import Navbar from "./Navbar";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Profile() {
    const contacts = [
        { id: 1, name: "Email", href:"mailto:altijohnvessly@gmail.com", icon: <MdEmail/>},
        { id: 2, name: "linkedIn", href:"https://www.linkedin.com/in/johnvesslyalti", icon: <FaLinkedin />},
        { id: 3, name: "GitHub", href:"https://github.com/johnvesslyalti", icon: <FaGithub />},
    ]
    return(
        <section className="min-h-screen flex flex-col p-5">
            <header>
                <Navbar />
            </header>
            <main className="w-full my-auto flex gap-5">
                <div className="flex flex-col gap-5 justify-center items-center p-5 backdrop:blur-lg bg-black/20 border-white/30 border-1 rounded-xl shadow-xl">
                    <div className="w-60 h-60 overflow-hidden">
                        <img 
                        src="/jva.png"
                        alt="jva.png"
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex gap-5 text-xl p-2 justify-center items-center backdrop:blur-lg bg-black/20 border-white/30 border-1 rounded-xl shadow-xl">
                        {contacts.map((contact) => (
                            <a
                            key={contact.id}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{contact.icon}</a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-1 justify-center items-center backdrop:blur-lg bg-black/20 border-white/30 border-1 rounded-xl shadow-xl">
                    <div className="text-xl font-bold">Hi! my name is Johnvessly Alti</div>
                    <div className="text-center">
                        A passionate full stack developer from India, skilled in building modern, responsive web<br />
                        applications using the MERN stack. I enjoy turning ideas into real-world products, focusing<br />
                        on clean code, great UI/UX, and performance. Always learning, always building.<br />
                    </div>
                </div>
            </main>
        </section>
    )
}