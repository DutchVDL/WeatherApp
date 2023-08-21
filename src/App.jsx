/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { Descriptions } from "./Descriptions";
import hotPic from "./WeatherPictures/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg";
import coldPic from "./WeatherPictures/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
import { getFormattedData } from "./weatherService";
function App() {
  const [weather, setWeather] = useState();

  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("Paris");
  const [bg, setBg] = useState(coldPic);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFormattedData(city, units);
      setWeather(data);

      const threshold = units == "metric" ? 20 : 70;
      (data.temp <= threshold && units == "metric") ||
      (data.temp <= threshold && units == "imperial")
        ? setBg(coldPic)
        : setBg(hotPic);
    };

    fetchData();
  }, [units, city]);

  const handleCity = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  const handleUnits = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText;

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "F" : "C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                id=""
                onKeyDown={handleCity}
              />
              <button onClick={(e) => handleUnits(e)}>F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>
                  {weather.name} , {weather.country}
                </h3>
                <img src={weather.iconURL} alt="" />
                <h3>{weather.description}</h3>
              </div>

              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} ${
                  units == "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>
            {/* bottom description */}
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
