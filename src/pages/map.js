import React, { useEffect, useState } from "react";
import Layout from "../components/siteLayout";
import { Helmet } from "react-helmet";
import * as turf from "@turf/turf";

const Cooter = () => {
  const [leafletReady, setLeafletReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      require("leaflet/dist/leaflet.css");
      require("leaflet-draw/dist/leaflet.draw.css");
      require("leaflet-control-geocoder/dist/Control.Geocoder.css");
      require("leaflet-draw");
      require("leaflet-control-geocoder");

      setLeafletReady(true);

      // Ensure the map container is available
      setTimeout(() => {
        const mapContainer = document.getElementById("map");
        if (!mapContainer) {
          console.error("Map container not found");
          return;
        }

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

        const updateQueryString = () => {
          const bounds = drawnItems.toGeoJSON();
          const encodedBounds = encodeURIComponent(JSON.stringify(bounds));
          const center = map.getCenter();
          const zoomLevel = map.getZoom();
          const newUrl =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?bounds=" +
            encodedBounds +
            "&zoom=" +
            zoomLevel +
            "&lat=" +
            center.lat.toFixed(5) +
            "&lng=" +
            center.lng.toFixed(5) +
            "&address=" +
            encodeURIComponent(document.getElementById("addressInput").value);
          window.history.replaceState({ path: newUrl }, "", newUrl);
        };

        const calculateArea = () => {
          let totalArea = 0;
          drawnItems.eachLayer(function (layer) {
            const geojson = layer.toGeoJSON();
            let area = 0;
            if (geojson.geometry.type === "Polygon") {
              area = turf.area(geojson);
            } else if (geojson.geometry.type === "LineString") {
              const polygon = turf.lineToPolygon(geojson);
              area = turf.area(polygon);
            }
            totalArea += area;
          });
          const totalAreaSqFt = totalArea * 10.7639;
          document.getElementById("area").innerText =
            "Total Area: " + totalAreaSqFt.toFixed(2) + " sq ft";
        };

        const loadFromQueryString = () => {
          const params = new URLSearchParams(window.location.search);
          const boundsParam = params.get("bounds");
          const zoomParam = params.get("zoom");
          const latParam = params.get("lat");
          const lngParam = params.get("lng");
          const addressParam = params.get("address");

          if (boundsParam) {
            const bounds = JSON.parse(decodeURIComponent(boundsParam));
            L.geoJSON(bounds).eachLayer(function (layer) {
              drawnItems.addLayer(layer);
            });
            calculateArea();
          }
          if (zoomParam && latParam && lngParam) {
            const latlng = L.latLng(parseFloat(latParam), parseFloat(lngParam));
            map.setView(latlng, parseInt(zoomParam, 10));
          }
          if (addressParam) {
            document.getElementById("addressInput").value = decodeURIComponent(
              addressParam
            );
          }
        };

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

        const geocodeAddress = () => {
          const address = document.getElementById("addressInput").value;
          if (address.trim() !== "") {
            const geocoder = L.Control.Geocoder.nominatim();
            geocoder.geocode(address, function (results) {
              if (results.length > 0) {
                const latlng = results[0].center;
                map.setView(latlng, 15);
                updateQueryString();
              } else {
                alert("Address not found");
              }
            });
          } else {
            alert("Please enter an address");
          }
        };

        window.geocodeAddress = geocodeAddress;
      }, 0); // You can increase this delay if needed
    }
  }, []);

  if (!leafletReady) {
    return null;
  }

  return (
    <Layout>
      <Helmet>
        <body id="body" className="homepage intro" />
        <style>{`
          body{overflow:hidden !important;}
          #map {
            height: calc(100vh - 80px); /* Ensuring the map takes full viewport height minus header/footer */
            width: 100%;
            z-index: 0;
          }
          header, footer{display:none !important;}
          #area {
            position: absolute;
            top: 160px;
            right: 15px;
            background: white;
            padding: 5px;
            z-index: 10;
          }
          #search {
            position: absolute;
            top: 120px;
            right: 15px;
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
            bottom: 20px;
            right: 0;
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

      <div id="map"></div>
      <div id="area">Total Area: 0 sq ft</div>
      <div id="search">
        <input
          type="text"
          id="addressInput"
          placeholder="Enter an address"
        />
        <button onClick={() => window.geocodeAddress()}>Search</button>
      </div>
    </Layout>
  );
};

export default Cooter;
