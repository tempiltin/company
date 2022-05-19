import { useEffect, useState } from "react";
import IMG from '../../../assets/portfolio-01.jpg'

export default function DataFilter() {
  // Array of all car objects
  const carList = [
    {
      name: "BMW M6",
      url:IMG,
        
      release_year: 2018
    },
    {
      name: "BMW M6",
      url:IMG,
        
      release_year: 2019
    },
    {
      name: "VW Polo",
      url:IMG,
      release_year: 2020
    },
    {
      name: "Audi S6",
      url:IMG,
      release_year: 2021
    },
    {
      name: "BMW M2",
      url:IMG,
      release_year: 2022
    },
    {
      name: "Audi A3",
      url:IMG,
      release_year: 2019
    }
  ];
  // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(carList);
  // Selected Brand name filter
  const [selectedBrand, setSelectedBrand] = useState("");
  // Selected Year filter
  const [selectedYear, setSelectedYear] = useState();

  const filterByBrand = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedBrand) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
      (car) => car.name.split(" ").indexOf(selectedBrand) !== -1
    );
    return filteredCars;
  };
  const filterByYear = (filteredData) => {
    // Avoid filter for null value
    if (!selectedYear) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
      (car) => car.release_year === selectedYear
    );
    return filteredCars;
  };

  // Update seletedBrand state
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  // Toggle seletedYear state
  const handleYearChange = (event) => {
    const inputYear = Number(event.target.id);

    if (inputYear === selectedYear) {
      setSelectedYear("");
    } else {
      setSelectedYear(inputYear);
    }
  };

  useEffect(() => {
    var filteredData = filterByBrand(carList);
    filteredData = filterByYear(filteredData);
    setFilteredList(filteredData);
  }, [selectedBrand, selectedYear]);

  return (
    <section className="App ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h4 className="subtitle">
                <span className="theme-gradient">Portfolio Default</span>
              </h4>
              <h2 className="title  ">Why People Choose Us!</h2>
              <p className="description  b1">There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-auto" id="year-options" onClick={handleYearChange}>
        <div  className={selectedYear === 2018 ? "active-option" : "filter-option"} id="2018"> All</div>
        <div className={selectedYear === 2019 ? "active-option" : "filter-option"} id="2019" > Telegram Bot </div>
         <div  className={selectedYear === 2020 ? "active-option" : "filter-option"} id="2020"> CRM </div>
         <div  className={selectedYear === 2021 ? "active-option" : "filter-option"} id="2021"> content </div>
         <div  className={selectedYear === 2022 ? "active-option" : "filter-option"} id="2022"> Website </div>
      </div>
        </div>
      </div>


     <div className="container">
      

       <div className="row"  >
        {filteredList.map((item, index) => (
         <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
            <div className="car-item" key={index}>
            <img className="car-image" src={item.url} alt="car-img" />
            <h5 key={index} >
            <a href="#!" className="car-name">{`Name: ${item.name}`}</a>
            </h5>
            <div className="car-year">{`Year: ${item.release_year}`}</div>
          </div>
         </div>
        ))}
   
       </div>
     </div>
    </section>
  );
}