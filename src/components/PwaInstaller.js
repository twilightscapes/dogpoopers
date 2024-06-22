import React, { useState, useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { MdOutlineIosShare } from "react-icons/md";
import useSiteMetadata from "../hooks/SiteMetadata";

const PWAInstaller = () => {
  const [isInstalled, setisInstalled] = useState(true);

  const { companyname } = useSiteMetadata();
  const { iconimage } = useSiteMetadata();

  useEffect(() => {
    const storedisInstalled = localStorage.getItem("isInstalled");
    setisInstalled(storedisInstalled === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("isInstalled", isInstalled);
  }, [isInstalled]);

  const handleButtonClick = () => {
    setisInstalled(!isInstalled);
  };

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: companyname,
          text: 'Install our web app for quick access!',
          url: window.location.href,
        });
        console.log('Successfully shared');
      } catch (error) {
        console.error('Error sharing', error);
      }
    } else {
      console.log('Web Share API not supported in this browser');
    }
  };

  return (
    <>
      <div
        id="pwabanner"
        onClick={handleShareClick}
        style={{
          position: 'fixed',
          bottom: '0',
          display: isInstalled ? "none" : "flex",
          alignItems: 'center',
          fontSize: 'clamp(.9rem,2vw,1rem)',
          background: 'var(--theme-ui-colors-siteColor)',
          color: 'var(--theme-ui-colors-siteColorText)',
          marginBottom: '0px',
          padding: '0px 40px 15px 0',
          width: '100vw',
          zIndex: '10'
        }}
      >
        {iconimage ? (
          <img
            className="cornerlogo1"
            style={{
              position: 'relative',
              top: '4px',
              left: '',
              border: '0px solid white',
              padding: '0',
              maxHeight: '60px'
            }}
            src={iconimage}
            alt={companyname}
            width="111"
            height="60"
          />
        ) : (
          <div
            style={{
              fontWeight: '',
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
              height: '',
              fontSize: 'clamp(.9rem,2vw,1rem)',
              color: 'var(--theme-ui-colors-headerColorText)',
              maxWidth: '50vw'
            }}
          >
            {companyname}
          </div>
        )}
        <div
          className="font"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            textAlign: 'center',
            justifyContent: 'center',
            padding: '4px 0 0 40px',
            margin: '8px auto 0 auto',
            border: '0px solid blue',
            width: '',
            maxWidth: '',
            fontSize: 'clamp(.8rem,1.5vw,1.5rem)',
            fontWeight: 'bold',
            position: 'relative'
          }}
        >
          <span
            style={{
              position: 'absolute',
              display: 'block',
              top: '4px',
              left: '-10px',
            }}
          >
            <MdOutlineIosShare
              style={{
                fontSize: '40px',
                filter: 'drop-shadow(1px 0 4px var(--theme-ui-colors-siteColor))'
              }}
            />
          </span>
          <div
            style={{
              display: 'block',
              textShadow: '0 1px 1px #000',
              fontSize: 'clamp(1rem,2.5vw,1.5rem)',
            }}
          >
            Customer Billing Portal
          </div>
          <div style={{ display: 'block', textShadow: '0 1px 1px #000' }}>
            Click share &amp; "Add To Home Screen"
          </div>
        </div>
      </div>
    </>
  );
};

export default PWAInstaller;
