"use client"
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Progects/Projects";
import Team from "@/components/Team/Team";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const titles: NodeListOf<HTMLElement> | null = document.querySelectorAll("h2");
        window.addEventListener("scroll", (e) => {
            titles.forEach((element) => {
                if(window.scrollY + window.innerHeight >= element.offsetTop) {
                    element.classList.add("animate__backInLeft");
                } else {
                    element.classList.remove("animate__backInLeft");
                }
                
            });
        });
    }, []);

    return (
        <>
            <About />
            <Team />
            <Projects />
            <Contact />
        </>
    );
}
