import React, { useEffect, useState } from "react";
import Layout from "../components/siteLayout";
import { Helmet } from "react-helmet";

function MyMapPage() {
  const [map, setMap] = useState(null);
  const [measureTool, setMeasureTool] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [inverted, setInverted] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Dynamically load MeasureTool script
    const measureToolScript = document.createElement('script');
    measureToolScript.src = '/dist/gmaps-measuretool.umd.js'; // Adjust path if needed
    measureToolScript.async = true;

    measureToolScript.onload = () => {
      // MeasureTool script loaded, now load Google Maps API
      loadGoogleMapsScript();
    };

    document.body.appendChild(measureToolScript);

    return () => {
      // Clean up script tag to avoid memory leaks
      document.body.removeChild(measureToolScript);
    };
  }, []);

  // Function to load Google Maps API
  function loadGoogleMapsScript() {
    if (!window.google) {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-iKnH_TwzkJytZvQiFNxdp_WQMlsJ4VQ&libraries=geometry`;
      googleMapsScript.async = true;
      googleMapsScript.onload = initMap;
      document.body.appendChild(googleMapsScript);
    } else {
      // Google Maps API already loaded
      initMap();
    }
  }

  useEffect(() => {
    // Initialize map and tools when they are available
    if (map && measureTool && geocoder) {
      // Load address from query parameter
      if (address) {
        geocodeAddress(address);
      }

      // Update query string on map move
      map.addListener('idle', () => {
        updateQueryString();
      });

      // Update query string on zoom change
      map.addListener('zoom_changed', () => {
        updateQueryString();
      });

      measureTool.addListener('measure_start', () => {
        console.log('started');
      });

      measureTool.addListener('measure_end', (e) => {
        console.log('ended', e.result);
      });

      measureTool.addListener('measure_change', (e) => {
        console.log('changed', e.result);
      });
    }
  }, [map, measureTool, geocoder, address]);

  function initMap() {
    const center = { lat: 30.38, lng: -89.03 };
    
    // Define map style
    const mapStyle = [
      {
        "featureType": "poi",
        "stylers": [{ "visibility": "off" }]
      },
      {
        "featureType": "transit",
        "stylers": [{ "visibility": "off" }]
      },
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [{ "visibility": "off" }]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{ "visibility": "on" }]
      }
    ];

    const googleMap = new window.google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 12,
      mapTypeId: window.google.maps.MapTypeId.HYBRID,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      scaleControl: false,
      zoomControl: false,
      tilt: 0,
      styles: mapStyle // Apply custom map style here
    });

    // Check if MeasureTool is available before creating instance
    if (window.MeasureTool && window.google.maps.geometry.spherical) {
      const googleMeasureTool = new window.MeasureTool(googleMap, {
        contextMenu: false,
        unit: 'imperial' // Ensure 'unit' is set as a lowercase string
      });

      const googleGeocoder = new window.google.maps.Geocoder();

      setMap(googleMap);
      setMeasureTool(googleMeasureTool);
      setGeocoder(googleGeocoder);

      // Your map initialization code here

      // Example of adding a marker
      new window.google.maps.Marker({
        position: center,
        map: googleMap,
        title: 'Hello World!'
      });
    } else {
      console.error('MeasureTool or Google Maps API not fully initialized');
    }
  }

  function geocodeAddress(address) {
    // Ensure geocoder is available before using it
    if (!geocoder) {
      console.error('Geocoder not initialized');
      return;
    }

    geocoder.geocode({ 'address': address }, (results, status) => {
      if (status === 'OK') {
        if (results[0].geometry.viewport) {
          map.fitBounds(results[0].geometry.viewport);
        } else {
          map.setCenter(results[0].geometry.location);
          map.setZoom(20);  // Adjust the zoom level as needed
        }
        updateQueryString();
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  // Function to update query string with current map state
  function updateQueryString() {
    if (map) {
      const center = map.getCenter();
      const zoom = map.getZoom();

      const queryParams = new URLSearchParams();
      queryParams.set('lat', center.lat());
      queryParams.set('lng', center.lng());
      queryParams.set('zoom', zoom);
      queryParams.set('address', address);

      // Replace current URL with updated query string
      window.history.replaceState(null, null, '?' + queryParams.toString());
    }
  }

  function handleLoadAddress() {
    const addressInput = document.getElementById('address');
    setAddress(addressInput.value);
    geocodeAddress(addressInput.value);
  }

  function handleInvert() {
    if (measureTool) {
      setInverted(!inverted);
      measureTool.setOption('invertColor', !inverted);
    }
  }

  function handleMeasureStart() {
    if (measureTool) {
      measureTool.start();
    }
  }

  function handleMeasureEnd() {
    if (measureTool) {
      measureTool.end();
    }
  }

  return (
    <Layout>
      <Helmet>
        <body id="body" className="homepage install" />
      </Helmet>

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

      <div className="logo">
        <img src="https://dogpoopers.com/assets/dogpooper-logo-text.svg" alt="Logo" />
      </div>

      <div id="map" style={{ height: "100vh" }}></div>

      <div id="controls" style={{ position: "absolute", top: "60px", right: "5px", display: "flex", flexDirection: "column", overflow: "visible" }}>
        <div id="search" style={{ display: "flex", marginRight: "20px" }}>
          <input type="text" id="address" className="" placeholder="Street and City" style={{ padding: "4px", margin: "3px 0" }} />
          <button id="load-address" style={{ padding: "2px 4px", margin: "3px 5px", background:'#fff', color:'#000', maxWidth:'80px', }} onClick={handleLoadAddress}>Load Address</button>
        </div>
        <button id="start-with-points" style={{ display: "none" }}>Start With Initial Points</button>
        <button id="start" className="button actionJackson" onClick={handleMeasureStart}>Size My Yard</button>
        <button id="invert" className="button" onClick={handleInvert}>Invert Colors</button>
        <button id="end" className="button" onClick={handleMeasureEnd}>Clear Points</button>
      </div>

      <script src="/dist/gmaps-measuretool.umd.js"></script>
    </Layout>
  );
}

export default MyMapPage;
