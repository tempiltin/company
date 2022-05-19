import React from 'react'
import img from '../../../assets/payme_03.png'
const PartinerCom = () => {
    const data = [
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
        {
            img: img,
            aos: "asd"
        },
      
    ]
    return (
        <section className='parentCompany'>
            <div className="container">
                <h6>Our Awesome Customer Relation Build a
                    Long Term Relationship.</h6>
                <div className="row mt-5 ">
                 {
                     data.map(({img},index) => (
                        <div className="col-6 col-sm-3 col-md-2 col-lg-2" key={index}>
                        <div className="briend">
                         <img src={img} alt="" />
                        </div>
                      </div>
                     ))
                 }
                </div>
            </div>
        </section>
    )
}

export default PartinerCom