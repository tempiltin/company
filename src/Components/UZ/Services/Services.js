import React from 'react'
import {RiPulseLine} from 'react-icons/ri'
const Services = () => {
    return (
        <>
            <section className='Services' id='Services'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h4 className="subtitle">
                                    <span className='theme-gradient'>
                                        What we can do for you
                                    </span>
                                </h4>
                                <h2>Services provide for you.</h2>
                                <p>There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="cicon">
                            <RiPulseLine className='Puls'/>
                            </div>
                            <div className="content">
                                <h4>Awarded Design</h4>
                                <p>There are many variations variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="cicon">
                            <RiPulseLine className='Puls'/>
                            </div>
                            <div className="content">
                                <h4>Design & Creative</h4>
                                <p>Passages there are many variations variations of of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="cicon">
                            <RiPulseLine className='Puls'/>
                            </div>
                            <div className="content">
                                <h4>App Development</h4>
                                <p>Variations There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services