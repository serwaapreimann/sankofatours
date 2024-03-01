import React, { useRef} from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./maps.scss";
import { worldData } from "../../data/countries.geo";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import One from "../../icons/number-1 (2).png";
import Two from "../../icons/two (1).png";
import Three from "../../icons/number-3 (3).png";
import { useNavigate } from "react-router-dom";
import {Reveal} from '../Reveal/Reveal';

export default function Maps({handleClick , setCountryName}) {
  const center = [34.070697863000134, 9.454592111000068];
  
  const navigate = useNavigate();
  
  const mapRef = useRef(null);

  return (
    <>
      <div id="map" />
          <div className="map--header" ref={mapRef}>
            <Reveal>
                <div className="map--header-1">
                  <img src={One} alt="One" />
                  <p>SELECT</p>
                </div>
            </Reveal>
            <Reveal>
              <div className="map--header-2">
                <img src={Two} alt="One" />
                <p>EXPLORE</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="map--header-3">
                <img src={Three} alt="" />
                <p>TRAVEL</p>
              </div>
            </Reveal>
          </div>
      <div className="map--title" />
      <div className="map--container">
        <MapContainer
          center={center}
          zoom={4.4}
          style={{ width: "100vw", height: "70vh" }}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/e13d1325-1009-4b1b-9ebc-6ed8703a429c/{z}/{x}/{y}.png?key=e28hLIi2Yq6kowbbqq01"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />

          {worldData.features.map((country) => {
            const coordinates = country.geometry.coordinates[0].map((item) => [
              item[1],
              item[0],
            ]);

            return (
              <>
                <Polygon
                  key={country.properties.name}
                  pathOptions={{
                    fillColor: "orange",
                    //   fillOpacity: 1,
                    borderColor: "#000000",
                    //   weight: 2,
                    //   opacity: 1,
                    // dashArray: 3,
                    color: "white",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    click: () => {
                      handleClick(country.properties.name)
                      setCountryName(country.properties.name)
                      setTimeout(() =>{
                          navigate(`/country/${country.properties.name}`)
                      },5001 )
                    }, // Handle click event
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        fillColor: "orange",
                        dashArray: "3",
                        color: "white",
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        //   fillOpacity: 0.2,
                        weight: 2,
                        dashArray: "3",
                        color: "white",
                        fillColor: "orange",
                      });
                      document.title = `Sankofa Tours | Explore ${country.properties.name}`;
                    },
                  }}
                />
              </>
            );
          })}
        </MapContainer>
      </div>
    </>
  );
}
