import React, { useState, useEffect } from 'react';
import Seo from '../components/seo';
import Layout from '../components/siteLayout';
import Map from '../components/Map';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router'; // Import useLocation hook

const IndexPage = () => {
  const location = useLocation(); // Use useLocation hook to get location
  const [mapData, setMapData] = useState(null);

  const handleMapUpdate = (data) => {
    setMapData(data);
  };



  return (
    <Layout>
      <Helmet>
        <body id="body" className="homepage install noscroll" style={{ overflow: 'hidden', paddingTop:'80px' }} />
      </Helmet>
      <Seo title="DogPoopers YardStick" />
      <section className="outer section">
        <div className="container" style={{ padding: '0', minHeight: '100dvh', position:'relative' }}>
          <Map location={location} onMapUpdate={handleMapUpdate} />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
