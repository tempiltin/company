import React, { useState, useEffect } from "react";
import LOGO from '../../../assets/programmer.png'
import { AiOutlineBars } from 'react-icons/ai'
export default function Navbar() {
    const [navSize, setnavSize] = useState("80px");
    const [navColor, setnavColor] = useState("#152f39");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#152f39") : setnavColor("#060606");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("80px");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    const [state, setState] = useState(false);

    const Navclick = (e) => {
      e.preventDefault();
      if (state) {
        setState(false);
      } else {
        setState(true);
      }
    };
  
    const NavButton = (e) => {
      e.preventDefault();
      if (state) {
        setState(false);
      } else {
        setState(true);
      }
    };

    return (
        <>
            <nav style={{ backgroundColor: navColor, height: navSize, transition: "all 1s" }}>
                <div className="container">
                    <div className="row justify-content-between align-center">
                        <div className="col-auto">
                            <li>
                                <a href="#!"><img src={LOGO} alt={LOGO} /></a>
                            </li>
                        </div>
                        <div className="d-none d-lg-flex  col-lg-auto d-md-none">
                            <ul>
                                <li><a href="#!">Home</a></li>
                                <li><a href="#!">About</a></li>
                                <li><a href="#!">Elements</a></li>
                                <li><a href="#!">Blog</a></li>
                                <li><a href="#!">Portfolio</a></li>
                                <li><a href="#!">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-auto d-md-flex d-lg-none">
                            <li className="bars-logo">
                                <a href="#!">
                                    <AiOutlineBars onClick={Navclick} className="Bars-icon" />
                                </a>
                            </li>
                        </div>
                    </div>

                </div>
            </nav>
            
            <div onClick={NavButton} className={state ? "navbarRight d-flex d-xl-none" : "navbarRightFalse"} >
                <div className="opasty-width"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto">
                            <div className="NavButton ">
                                <AiOutlineBars
                                    onClick={NavButton}
                                    className=" Bars-icon"
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-11 scrol-Y">
                            <ul className=" Close-ul">
                                <li><a href="#!">Home</a></li>
                                <li><a href="#!">About</a></li>
                                <li><a href="#!">Elements</a></li>
                                <li><a href="#!">Blog</a></li>
                                <li><a href="#!">Portfolio</a></li>
                                <li><a href="#!">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-11 ">
                            <div className="footer_">
                                <a className="text-reset fw-bold footer-cp" href="https://www.programmers.uz/">Programmers UZ</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
