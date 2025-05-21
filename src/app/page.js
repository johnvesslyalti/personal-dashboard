import Academic from "@/components/Academic";
import Goals from "@/components/Goals";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Page() {
  return(
    <section>
      <header>
        <Profile />
        <Academic />
        <Projects />
        <Skills />
        <Goals />
      </header>
    </section>
  )
}