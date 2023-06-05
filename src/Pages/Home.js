import React, { useEffect, useState } from "react";
import "../Css/home.css";
import axios from "axios";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";

// apicall = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api keys = 6a2959b1731a3fb5fc06ca509c7c5a7d
const Home = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Dharan");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_KEY = "ecab1f506b5a4904965124642230206";
      const url = ` http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}&aqi=yes
`;

      try {
        const response = await axios.get(url);
        setCity(response.data);
      } catch (error) {
        console.log(error);
        setCity(null);
      }
    };
    fetchWeatherData();
  }, [search]);

  return (
    <div className="home">
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>

        <div className="inputData">
          <TextField
            type="search"
            value={search}
            label="City Name"
            variant="outlined"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            InputLabelProps={{
              style: {
                color: "green",
                border: "none", // Modify the text color here
              },
            }}
          />
        </div>
        {!city ? (
          <p>City not Found!</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="loction">
                <FontAwesomeIcon
                  icon={faStreetView}
                  beatFade
                  style={{ color: "#eb0000", fontSize: "60px" }}
                />
                {search},{city.location.country}
              </h2>

              <h1 className="temp"> {city.current.temp_c}ºC</h1>
              <h3 className="wind">
                Wind: {city.current.wind_kph}Kph || Humidity:{" "}
                {city.current.humidity}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
