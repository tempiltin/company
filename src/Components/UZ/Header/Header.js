import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import HIMG from '../../../assets/Software-Development-Company.jpg'
const Header = () => {
    return (
        <>
            <header>
                <div className="container cont_top">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                            <div className="inner text-left">
                                <span className="subtitle">DIGITAL CONSULTING AGENCY</span>
                                <h1 className="title theme-gradient display-one">Programmers UZ</h1>
                                <ul className="list-icon">
                                    <li>
                                        <span className="icon">

                                            <AiOutlineCheck className="feather-check" />

                                        </span> Track your teams progress with mobile app.
                                    </li>
                                    <li>
                                        <span className="icon">

                                            <AiOutlineCheck className="feather-check" />

                                        </span>  Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </li>
                                    <li>
                                        <span className="icon">

                                            <AiOutlineCheck className="feather-check" />

                                        </span>  Your teams progress with mobile app.
                                    </li>
                                </ul>
                                <div className="button-group  mt--40">
                                    <a className="btn-default btn-medium btn-border round btn-icon" href="#!">Contact
                                        Us <i className="icon feather-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-xl-6 order-1 order-lg-2'>
                            <div className="frame-image">
                                <img src={HIMG} alt={HIMG} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header