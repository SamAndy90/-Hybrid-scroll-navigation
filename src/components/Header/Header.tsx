import { Container } from "@/common/Container";
import Link from "next/link";

import "./header.scss"

function Header() {
    return (
        <header className="header">
            <Container>
                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link className="header__link" href="#about">ABOUT</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="#team">TEAM</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="#projects">PROJECTS</Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__link" href="#contact">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
