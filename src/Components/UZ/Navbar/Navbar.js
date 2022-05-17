import React, { useState, useEffect } from "react";
import LOGO from '../../../assets/programmer.png'
import { AiOutlineBars } from 'react-icons/ai'
export default function Navbar() {
    const [navSize, setnavSize] = useState("80px");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#060606") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("80px");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div>
            <nav style={{ backgroundColor: navColor, height: navSize, transition: "all 1s" }}>
                <div className="container">
                    <div className="row justify-content-between align-center">
                        <div className="col-auto">
                            <li>
                                <a href="#!"><img src={LOGO} alt={LOGO} /></a>
                            </li>
                        </div>
                        <div className="col-auto">
                            <ul>
                                <li><a href="#!">Home</a></li>
                                <li><a href="#!">About</a></li>
                                <li><a href="#!">Elements</a></li>
                                <li><a href="#!">Blog</a></li>
                                <li><a href="#!">Portfolio</a></li>
                                <li><a href="#!">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <a href="#!">
                                <AiOutlineBars />
                            </a>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}
