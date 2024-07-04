import React, { useEffect } from "react";
import Layout from "../components/siteLayout";
import { Helmet } from "react-helmet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-draw";
import "leaflet-control-geocoder";
import * as turf from "@turf/turf";

function Cooter() {
  useEffect(() => {
    // Function to initialize Leaflet map and related functionality
    const initializeMap = () => {
      const map = L.map("map").setView([30.38, -89.03], 10);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFzZXJsYXduIiwiYSI6ImNseTc2czRlbzAxaXMyanB4a3JqNGg0c2QifQ.XllLo86E6MxKyH8ycZJKHQ",
        {
          maxZoom: 22,
          tileSize: 512,
          zoomOffset: -1,
        }
      ).addTo(map);

      const drawnItems = new L.FeatureGroup();
      map.addLayer(drawnItems);

      const drawControl = new L.Control.Draw({
        draw: {
          polyline: true,
          polygon: false,
          rectangle: false,
          circle: false,
          marker: false,
          circlemarker: false,
        },
        edit: {
          featureGroup: drawnItems,
        },
      });
      map.addControl(drawControl);

      map.on(L.Draw.Event.CREATED, function (event) {
        const layer = event.layer;
        drawnItems.addLayer(layer);
        updateQueryString();
        calculateArea();
      });

      map.on(L.Draw.Event.EDITED, function () {
        updateQueryString();
        calculateArea();
      });

      map.on(L.Draw.Event.DELETED, function () {
        updateQueryString();
        calculateArea();
      });

      map.on("moveend", function () {
        updateQueryString();
      });

      loadFromQueryString();
    };

    // Function to update query string in the URL
    const updateQueryString = () => {
      // Your implementation here
    };

    // Function to calculate total area of drawn shapes
    const calculateArea = () => {
      // Your implementation here
    };

    // Function to load map state from query string
    const loadFromQueryString = () => {
      // Your implementation here
    };

    // Function to geocode address from input
    const geocodeAddress = () => {
      // Your implementation here
    };

    // Check if window is defined before initializing map
    if (typeof window !== "undefined") {
      initializeMap();
      window.geocodeAddress = geocodeAddress; // Expose geocodeAddress globally
    }
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <Layout>
      <Helmet>
        <body id="body" className="homepage intro" />
        <style>{`
          body { overflow: hidden !important; }
          #map {
            height: calc(100vh - 80px); /* Adjust as per your layout */
            width: 100%;
            z-index: 1;
          }
          header, footer { display: none !important; }
          #area {
            position: absolute;
            top: 160px; /* Adjust position as per your layout */
            right: 15px; /* Adjust position as per your layout */
            background: white;
            padding: 5px;
            z-index: 10;
          }
          #search {
            position: absolute;
            top: 120px; /* Adjust position as per your layout */
            right: 15px; /* Adjust position as per your layout */
            background: white;
            padding: 5px;
            z-index: 10;
          }
          .logo {
            position: absolute;
            top: 0;
            display: flex;
            width: 100%;
            height: 100vh;
            place-content: center;
            border: 0px solid red;
            margin: 0 auto;
          }
          .logo img {
            max-width: 20vw;
            opacity: 0.4;
            position: absolute;
            bottom: 20px; /* Adjust position as per your layout */
            right: 0; /* Adjust position as per your layout */
            z-index: 1;
          }
        `}</style>
      </Helmet>

      <div className="logo">
        <img
          src="https://dogpoopers.com/assets/dogpooper-logo-text.svg"
          alt="Logo"
        />
      </div>

      <div id="map" style={{height:'100vh'}}></div>
      <div id="area">Total Area: 0 sq ft</div>
      <div id="search">
        <input
          type="text"
          id="addressInput"
          placeholder="Enter an address"
        />
        <button onClick={() => typeof window !== "undefined" && window.geocodeAddress()}>Search</button>
      </div>
    </Layout>
  );
}

export default Cooter;
