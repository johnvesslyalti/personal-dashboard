export default function Navbar() {
    return(
        <nav className="flex justify-between items-center px-5">
            <div className="text-xl font-bold">Dashboard</div>
            <ul className="flex gap-5 text-sm font-bold">
                <li><a href="#academic" className="hover:border-b-2 hover:border-white">Academic</a></li>
                <li><a href="#skills" className="hover:border-b-2 hover:border-white">Skills</a></li>
                <li><a href="#projects" className="hover:border-b-2 hover:border-white">Projects</a></li>
                <li><a href="#goals" className="hover:border-b-2 hover:border-white">Goals</a></li>
            </ul>
        </nav>
    )
}