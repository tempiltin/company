import React from 'react'

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
                </div>
            </div>
        </footer>
    )
}

export default Footer