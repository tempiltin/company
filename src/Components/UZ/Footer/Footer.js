import React from 'react'
import {FiFacebook,FiInstagram ,FiLinkedin} from 'react-icons/fi'
import {RiTelegramLine} from 'react-icons/ri'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="rn-footer-widget">
                            <h4 className="title">
                                Services
                            </h4>
                            <div className="inner">
                                <ul className="footer-link">
                                    <li className='readmore-btn'><a className='more' href="#about">About</a></li>
                                    <li className='readmore-btn'><a className='more' href="#portfolio">Portfolio</a></li>
                                    <li className='readmore-btn'><a className='more' href="/contact">Contact</a></li>
                                    <li className='readmore-btn'><a className='more' href="#service">Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="rn-footer-widget">
                            <h4 className="title">
                            Solutions
                            </h4>
                            <div className="inner">
                                <ul className="footer-link">
                                    <li className='readmore-btn'><a className='more' href="#about">Brand</a></li>
                                    <li className='readmore-btn'><a className='more' href="#portfolio">Call to action</a></li>
                                    <li className='readmore-btn'><a className='more' href="/contact">counter</a></li>
                                    <li className='readmore-btn'><a className='more' href="#service">Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="rn-footer-widget">
                            <h4 className="title">
                                company
                            </h4>
                            <div className="inner">
                                <ul className="footer-link">
                                    <li className='readmore-btn'><a className='more' href="#about">Pricing</a></li>
                                    <li className='readmore-btn'><a className='more' href="#portfolio">Tab styles</a></li>
                                    <li className='readmore-btn'><a className='more' href="/contact">Testimonials</a></li>
                                    <li className='readmore-btn'><a className='more' href="#service">Service</a></li>
                                    <li className='readmore-btn'><a className='more' href="#service">timeline</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-auto col-md-6 col-sm-6 col-12">
                        <div className="rn-footer-widget">
                            <h4 className="title">
                            Stay With Us.
                            </h4>
                            <div className="inner">
                                <ul className="footer-link">
                                    <li className='readmore-btn'>2000+ Our clients are subscribe Around the World</li>
                                    <div className="urll">
                                    <a href="#!"> <FiFacebook /></a>
                                    <a href="#!"> <FiInstagram /></a>
                                    <a href="#!"> <FiLinkedin /></a>
                                    <a href="#!"> <RiTelegramLine /></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                          <div className="row justify-content-between">
                              <div className="col-auto">
                                  <div className="urll">

                                  <a href="#!" className='more'>Privacy Polisy</a>
                                  <a href="#!" className='more'>Contact US</a>
                                  </div>
                                  
                              </div>
                              <div className="col-auto">
                                  <a href="#!" className='more'>© Programmers UZ 2022</a>
                              </div>
                          </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer