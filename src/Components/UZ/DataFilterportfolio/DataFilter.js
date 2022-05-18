import { useEffect, useState } from "react";
import "./styles.css";

export default function DataFilter() {
  // Array of all car objects
  const carList = [
    {
      name: "BMW M6",
      url:
        "https://mediapool.bmwgroup.com/cache/P9/201411/P90169551/P90169551-the-new-bmw-m6-coup-exterior-12-2014-600px.jpg",
      release_year: 2020
    },
    {
      name: "VW Polo",
      url:
        "https://cdn.euroncap.com/media/30740/volkswagen-polo-359-235.jpg?mode=crop&width=359&height=235",
      release_year: 2018
    },
    {
      name: "Audi S6",
      url:
        "https://www.motortrend.com/uploads/sites/5/2020/03/6-2020-audi-s6.jpg?fit=around%7C875:492.1875",
      release_year: 2020
    },
    {
      name: "BMW M2",
      url:
        "https://imgd.aeplcdn.com/0x0/cw/ec/37092/BMW-M2-Exterior-141054.jpg?wm=0",
      release_year: 2019
    },
    {
      name: "Audi A3",
      url: "https://cdn.motor1.com/images/mgl/BEooZ/s3/2021-audi-s3.jpg",
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
    <div className="App">
      <div className="brand-filter">
        <div>Filter by Brand :</div>
        <select
          id="brand-input"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">All</option>
          <option value="BMW">BMW</option>
          <option value="VW">VW</option>
          <option value="Audi">Audi</option>
        </select>
      </div>
      <div>Filter by Year</div>
      <div id="year-options" onClick={handleYearChange}>
        <div
          className={selectedYear === 2018 ? "active-option" : "filter-option"}
          id="2018"
        >
          2018
        </div>
        <div
          className={selectedYear === 2019 ? "active-option" : "filter-option"}
          id="2019"
        >
          2019
        </div>
        <div
          className={selectedYear === 2020 ? "active-option" : "filter-option"}
          id="2020"
        >
          2020
        </div>
      </div>

      <div id="car-list">
        {filteredList.map((item, index) => (
          <div className="car-item" key={index}>
            <div className="car-name">{`Name: ${item.name}`}</div>
            <div className="car-year">{`Year: ${item.release_year}`}</div>
            <img className="car-image" src={item.url} alt="car-img" />
          </div>
        ))}
      </div>
    </div>
  );
}