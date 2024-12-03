"use client";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import SendMessage from "@/components/SendMessage";
import TechStack from "@/components/TechStack";
import ChangeTheme from "@/components/ui/ChangeTheme";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { AiFillFolder } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { BsPerson, BsTools } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export default function Home() {
  return (
    <main
      style={{
        scrollBehavior: "smooth",
      }}
      className="relative bg-black-100 flex justify-center items-center
     flex-col overflow-hidden mx-auto sm:px-1 px-5"
    >
      <div className="max-w-7xl w-full">
        <ChangeTheme />
        {/*//TODO */}
        <FloatingNav
          navItems={[
            { name: "Home", link: "#home", icon: <BiHome /> },
            { name: "About", link: "#about", icon: <BsPerson /> },
            { name: "Tools", link: "#tools", icon: <BsTools /> },
            {
              name: "Projects",
              link: "#projects",
              icon: <AiFillFolder className="text-[20px]" />,
            },
            {
              name: "Message",
              link: "#message",
              icon: <CgMail className="text-[20px]" />,
            },
          ]}
        />
        <Hero />
        <AboutMe />
        <TechStack />
        <Projects />
        <SendMessage />
      </div>
    </main>
  );
}
