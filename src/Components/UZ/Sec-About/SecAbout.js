import React from 'react'
import imp from '../../../assets/split-01.jpg'
const SecAbout = () => {
    return (
        <>
            <section className="SectionAbout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 pp">
                            <div className="thumbnail  image-left-content">
                                <img src={imp} alt={imp} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row justify-content-center">
                                <div className="col-lg-11">
                                    <div className="split-inner">
                                        <h4 className="title">What is DOOB?</h4>
                                        <p>Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even.</p>
                                        <ul className="split-list">
                                            <li>- Doug DeMarco, Design Prototyping Manager</li>
                                            <li>- 108 million paying subscribers</li>
                                            <li>- Over 1.7 billion hours of music played monthly</li>
                                            <li>- 4,000+ employees working across 16 offices</li>
                                        </ul>
                                        <div className="view-more-button">
                                           <a href="#!" className="btn-default">Contact With Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SecAbout