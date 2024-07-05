import React, { useEffect } from "react";
import Layout from "../components/siteLayout";
import { Helmet } from "react-helmet";
import * as turf from "@turf/turf";

function MyMapPage() {
  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-iKnH_TwzkJytZvQiFNxdp_WQMlsJ4VQ&libraries=geometry&callback=initMap`;
    googleMapsScript.async = true;
    window.initMap = initMap; // Ensure initMap is in global scope

    document.body.appendChild(googleMapsScript);

    return () => {
      // Clean up to avoid memory leaks
      document.body.removeChild(googleMapsScript);
      delete window.initMap;
    }
  }, []);

  function initMap() {
    const center = { lat: 30.38, lng: -89.03 };
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 12,
      mapTypeId: window.google.maps.MapTypeId.HYBRID,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      scaleControl: false,
      zoomControl: false,
      tilt: 0
    });

    // Your map initialization code here

    // Example of adding a marker
    new window.google.maps.Marker({
      position: center,
      map: map,
      title: 'Hello World!'
    });
  }

  return (
    <Layout>
      <Helmet>
        <body id="body" className="homepage intro" />
        <style>{`
          body { overflow: hidden !important; }
          #map {
            height: 100vh; 
            width: 100%;
            z-index: 0;
          }
          header, footer { display: none !important; }
          .logo {
            position: absolute;
            top: 0;
            display: flex;
            width: 100%;
            height: 100vh;
            place-content: center;
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
          <script src="../dist/gmaps-measuretool.umd.js"></script>
      </Helmet>

      <div className="logo">
        <img src="https://dogpoopers.com/assets/dogpooper-logo-text.svg" alt="Logo" />
      </div>

      <div id="map" style={{ height: "100vh" }}></div>
    </Layout>
  );
}

export default MyMapPage;
