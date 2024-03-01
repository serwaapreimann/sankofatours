import React, { useEffect, useState } from "react";
import "./poi.scss";
import Axios from "axios";
import "../Modal/modal.scss";
import "../Header/header.scss";

const { REACT_APP_API_URL } = process.env;

export default function POI({ countryName, handleCart, activeWish, handleWishCount }) {
  useEffect(() => {
    document.title = `${countryName} | Explore, Experience, Embrace.`;
  });

  const [weather, setWeather] = useState(() => {
    const cachedWeather = localStorage.getItem("weather");
    return cachedWeather ? JSON.parse(cachedWeather) : {};
  });

  const [details, setDetails] = useState([]);

  const countryHeading = (
    <div className="poi--headings">
      <div className="poi--heading-1">
        <h1>Language </h1>
        <p>
          {console.log(details)}
          {details.map((attraction) => {
            if (attraction.id === countryName) {
              return attraction.language;
            }
            return null;
          })}
        </p>
      </div>
      <div className="poi--heading-2">
        <h1>Country </h1>
        <p>{countryName}</p>
      </div>
      <div className="poi--heading-3">
        <h1>Current Weather </h1>
        <p>{`${weather.temp_c}°C`}</p>
      </div>
    </div>
  );

  useEffect(() => {
    const fetchWeather = async (countryName) => {
      try {
        const urlAPI = "http://api.weatherapi.com/v1/current.json";
        const apiKey = "9a0e4d93fed64a1ca5074443241602";
        const url = `${urlAPI}?key=${apiKey}&q=${countryName}&format=json`;

        const response = await Axios.get(url);
        const weatherData = response.data.current;
        console.log(weatherData);
        setWeather(weatherData);
        localStorage.setItem("weather", JSON.stringify(weatherData));
        localStorage.setItem("countryName", JSON.stringify(countryName));
      } catch (error) {
        console.error("Oops! Error getting data", error.message);
      }
    };

    console.log(countryName);

    fetchWeather(countryName);
  }, [countryName]);

  useEffect(() => {
    const handleDetails = async () => {
      try {
        const urlAPI = "http://localhost:5050/country";
        const response = await Axios.get(urlAPI);
        const detailsData = response.data.siteAttractions;
        setDetails(detailsData);
      } catch (error) {
        console.error("Oops! Error getting data", error.message);
      }
    };
    handleDetails();
  }, []);

  const handleNightClick = async () => {
    try {
      const urlAPI = "http://localhost:5050/nightlife";
      const response = await Axios.get(urlAPI);
      const nightlifeData = response.data.nightLife;
      setDetails(nightlifeData);
    } catch (error) {
      console.error("Oops! Error getting data", error.message);
    }
  };

  const handleDetails = async () => {
    try {
      const urlAPI = "http://localhost:5050/country";
      const response = await Axios.get(urlAPI);
      const detailsData = response.data.siteAttractions;
      setDetails(detailsData);
    } catch (error) {
      console.error("Oops! Error getting data", error.message);
    }
  };

  //useCallback

  return (
    <>
      {countryHeading}
      <div className="toggleButton">
        <button onClick={handleDetails}>Sights</button>
        <button>Restaurants</button>
        <button>Entertainment</button>
        <button onClick={handleNightClick}>Nightlife</button>
      </div>
      <section className="site--cards">
        {details.map((attractions) => {
          if (attractions.id === countryName) {
            return attractions.data.map((attraction) => (
              <figure className="image-block">
                <h1>{attraction.title}</h1>
                <img src={`${REACT_APP_API_URL}/${attraction.image}`} alt="" />
                <figcaption>
                  <h3>Description</h3>
                  <p>{attraction.description}</p>
                  <h3>Price</h3>
                  <h2>${attraction.price}</h2>
                  <div className="action--icons">
                    <button
                      className="button"
                      onClick={() =>
                        handleCart(
                          attraction.title,
                          attraction.description,
                          parseFloat(attraction.price)
                        )
                      }
                    >
                      Add to SUITCASE
                    </button>
                    <img
                      src={
                        activeWish.includes(attraction.title)
                          ? "/images/wishlist (1).gif"
                          : "/images/heart.png"
                      }
                      alt={activeWish.includes(attraction.title) ? "Added to wishlist" : "Like"}
                      onClick={()=>handleWishCount(attraction.title)}
                    />
                  </div>
                </figcaption>
              </figure>
            ));
          }
          return null;
        })}
      </section>
    </>
  );
}
