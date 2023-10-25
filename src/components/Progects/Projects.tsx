"use client";

import { Container } from "@/common/Container";
import { useEffect } from "react";

function Projects() {
    useEffect(() => {
        const sticky: HTMLElement | null = document.querySelector(".scroll-wrapper");

        window.addEventListener("scroll", (e) => {
            transform(sticky);
        });

        function transform(section: HTMLElement | null) {
            if (section) {
                const offsetTop = section.parentElement?.offsetTop || 0;
                const scrollSection: HTMLElement | null = section.querySelector(".scroll-section");

                let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
                percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;
                if (scrollSection)
                    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
            }
        }
    }, []);
    
    return (
        <section id="projects" className="projects">
            <div className="projects__scroll-wrapper scroll-wrapper">
                <div className="projects__scroll-section scroll-section">
                    <div className="projects__content">
                        <Container>
                            <h2 className="projects__title animate__animated">Projects section Page №1</h2>
                            <p className="projects__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                                repellendus id perspiciatis excepturi necessitatibus dicta deserunt
                                similique, quidem, laudantium eos culpa, maiores explicabo eius.
                                Tempora explicabo aliquam natus vero doloremque beatae repudiandae
                                quod ea corporis est libero, deleniti maiores nihil, sequi adipisci
                                culpa asperiores animi voluptatibus corrupti iste nobis dignissimos.
                            </p>
                            <p className="projects__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                                repellendus id perspiciatis excepturi necessitatibus dicta deserunt
                                similique, quidem, laudantium eos culpa, maiores explicabo eius.
                                Tempora explicabo aliquam natus vero doloremque beatae repudiandae
                                quod ea corporis est libero, deleniti maiores nihil, sequi adipisci
                                culpa asperiores animi voluptatibus corrupti iste nobis dignissimos.
                            </p>
                        </Container>
                    </div>
                    <div className="projects__content">
                        <Container>
                            <h2 className="projects__title animate__animated">Projects section Page №2</h2>
                            <p className="projects__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                                repellendus id perspiciatis excepturi necessitatibus dicta deserunt
                                similique, quidem, laudantium eos culpa, maiores explicabo eius.
                                Tempora explicabo aliquam natus vero doloremque beatae repudiandae
                                quod ea corporis est libero, deleniti maiores nihil, sequi adipisci
                                culpa asperiores animi voluptatibus corrupti iste nobis dignissimos.
                            </p>
                            <p className="projects__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                                repellendus id perspiciatis excepturi necessitatibus dicta deserunt
                                similique, quidem, laudantium eos culpa, maiores explicabo eius.
                                Tempora explicabo aliquam natus vero doloremque beatae repudiandae
                                quod ea corporis est libero, deleniti maiores nihil, sequi adipisci
                                culpa asperiores animi voluptatibus corrupti iste nobis dignissimos.
                            </p>
                        </Container>
                    </div>
                    <div className="projects__content">
                        <Container>
                            <h2 className="projects__title animate__animated">Projects section Page №3</h2>
                            <p className="projects__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                                repellendus id perspiciatis excepturi necessitatibus dicta deserunt
                                similique, quidem, laudantium eos culpa, maiores explicabo eius.
                                Tempora explicabo aliquam natus vero doloremque beatae repudiandae
                                quod ea corporis est libero, deleniti maiores nihil, sequi adipisci
                                culpa asperiores animi voluptatibus corrupti iste nobis dignissimos.
                            </p>
                            <p className="projects__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                                repellendus id perspiciatis excepturi necessitatibus dicta deserunt
                                similique, quidem, laudantium eos culpa, maiores explicabo eius.
                                Tempora explicabo aliquam natus vero doloremque beatae repudiandae
                                quod ea corporis est libero, deleniti maiores nihil, sequi adipisci
                                culpa asperiores animi voluptatibus corrupti iste nobis dignissimos.
                            </p>
                        </Container>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
