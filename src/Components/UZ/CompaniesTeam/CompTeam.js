import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import svg from '../../../assets/team-dark-01.jpg'

// import required modules



const CompTeam = () => {
    const data = [
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
        {
         img:svg,
         name: 'Temurbek Shukurov',
         url: 'https://www.programmer.uz',
         workname: 'Web Developer'
        },
    ]
    return (
        <main>
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="section-title">
                            <h4 className="subtitle">
                                <span className="theme-gradient">Our Experts.</span>
                            </h4>
                            <h2 className="title  ">Companies Team</h2>
                            <p className="description  b1">There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration.</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-lg-10">
                        <Swiper loop={true} slidesPerView={1} spaceBetween={10}  breakpoints={{ "@0.00": { slidesPerView: 1, spaceBetween: 10, }, "@0.75": { slidesPerView: 2, spaceBetween: 20, }, "@1.00": { slidesPerView: 3, spaceBetween: 40, }, "@1.50": { slidesPerView: 4, spaceBetween: 50, }, }}  className="mySwiper" >
                           {
                               data.map(({img,name,url,workname},index) => (
                                <SwiperSlide key={index}>
                                <div className="card" >
                                    <div className="imgDiv" >
                                        <img src={img} alt={img} />
                                    </div>
                                    <div className="cardTitle" >
                                        <h5>{name}</h5>
                                        <h6>{workname}</h6>
                                        <a href={url}>About</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                               ))
                           }
                           
                         
                        </Swiper>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default CompTeam