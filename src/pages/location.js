// import React, { useState } from "react";
import React from "react";
import useSiteMetadata from "../hooks/SiteMetadata"
import { StaticImage } from "gatsby-plugin-image"
// import {Link} from "gatsby"
// import styled from "styled-components"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"
// import Intro from "../../static/assets/textual.svg"
// import Intro2 from "../../static/assets/install-intro.svg"
// import Intro3 from "../../static/assets/intro-github.svg"
// import ContactForm from "../components/newssign"
// import useNetlifyIdentity from '../components/useNetlifyIdentity';
import {MapControl} from 'google-react-maps'
// import MeasureTool from 'measuretool-googlemaps-v3/lib/MeasureTool'

import MeasureTool from 'measuretool-googlemaps-v3'

function Portal() {
  const { language, showNav } = useSiteMetadata();
  const { dicName, dicEmail, dicMessage, dicSubmit, dicPhone } = language;

  function createMeasureTool() {

    this.measureTool = new MeasureTool(this.props.map, {
      showSegmentLength: false,
      tooltip: false,
      contextMenu: false
    })
    this.measureTool._helper.formatLength = function(value) {
      return this._formatLengthMetric(value) + " / " + this._formatLengthImperial(value * 3.28084)
    }
  }

  return (


<Layout>
<Helmet>

  
        <body id="body" className="install" />
      </Helmet>

      {showNav ? (
        <div id="top" className="spacer" style={{ height: "0px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}




<div id="map" ></div>

{/* <div style={{display:'grid', justifyContent:'start', alignItems:'start', position:'relative', left:'', top:'', cursor:''}}> */}
  
{/* <Intro style={{height:'100vh', width:'100vw', position:'fixed', zIndex:'-1', top:'', objectFit:'cover',}} /> */}

{/* <section style={{height:''}}>
<Intro2 style={{height:'100vh', width:'100vw', position:'relative', zIndex:'1', top:'', objectFit:'cover',}} />
  </section> */}

  {/* </div> */}

  {/* <StaticImage src="../../static/assets/pooperportal.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'cover', margin:'0 auto'}} /> */}


{/* style={{ height:'', maxHeight:'', margin:'0 auto', padding:'0 0 0 0', position:'relative',
 alignContent:'center', display:'grid', placeContent:'center', verticalAlign:'center',
  color:'#fff',
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  textShadow:'0 2px 7px #000',
  textAlign:'center'}} */}


{/* <div style={{width:'90%', margin:'0 auto', textAlign:'center',}}>
<p><strong>Hytron Manufacturing, Inc.</strong><br />
15582 Chemical Lane<br />
Huntington Beach, CA 92649<br />
Phone: <a className="call-button btn" href="tel:7149036701">(714) 903-6701</a><br />
Fax: (714) 903-4381</p>
</div> */}



<section className="wrapper flexbutt" style={{ padding: "2vh 5% 0 5%", width:'100%',maxWidth: "100vw", margin: "0 auto", display: "flex", flexDirection: "", justifyContent: "center", alignItems:'start', gap:'2vw', }}>


          


<div id="tour" className="virtualtour" style={{display:'flex', flexDirection:'column', gap:'1vw'}}>

<iframe title="location map" className="virtualtour" width="800" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d218709.02813130492!2d-89.066156!3d30.443965!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1719269906271!5m2!1sen!2sus" allowFullScreen="" loading="lazy" origin="https://testing.hytronmanufacturing.com" style={{maxWidth:'100%', margin:'0 auto', border:'10px solid #333', borderRadius:'12px'}}></iframe>


<div className="flexbutt" style={{width:'100%', maxWidth:'', display:'', placeContent:'center', margin:'0 auto', gap:'1vw', position:'', zIndex:'' }}>
  
  <div className="flexcheek" style={{width:''}}>
    <div className="plus">1</div>
    <label for="question1" className="question">
      Locate your property on the map above
    <br /><br />
    Click the button in left corner to "view larger map".
    <br /><br />
     This will open Google Maps in a new window.</label>
  </div>


  <div className="flexcheek" style={{width:''}}>
    <div className="plus">2</div>
    <label for="question1" className="question">
      Click the map square in the lower left and select "Layers" 
      <br /><br />

      Click "More" and then click "Measure"
      <br /><br />
      Outline your property to show square footage.
      <br /><br />
    
    </label>
  </div>
  
  </div>
</div>











{/* <strong>Don't worry - we handle all the hard stuff for you!</strong> */}

{/* <div className="panel2" style={{paddingTop:'6vh', width:'100%',textAlign:'',}}>
<h3 style={{ fontSize:'clamp(1rem, 1.8vw, 3.2rem)', color:''}}>Welcome to the Pooper Portal</h3>
<ul className="bullet panel" >
<li>💩 Easily manage your Pooper services</li>
<li>💩 Pause or change your service plans</li>
<li>💩 Communicate with your technician</li>
<li>💩 Update your billing information</li>
<li>💩 View/download service invoices</li>
</ul>

<div style={{textAlign:'center'}}>
<a className="button" href="https://billing.stripe.com/p/login/8wMeYg9DRgMH97W144" rel="noreferrer">
Login To Customer Portal
</a>
</div>

</div> */}

<div className="" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                 background: 'rgba(0,0,0,0.20)',
                 padding:'0 1rem',
                 width:'100%',
                 maxWidth:'380px',
                 textAlign:'center'
              }}>
<form
              className={`contact-form flexcheek1 panel`}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thanks"
              encType="multipart/form-data"
            >
              <input type="hidden" name="form-name" value="contact" />
<p style={{textAlign:'center', fontWeight:'bold', padding:'0', margin:'0', lineHeight:'1', color:'', fontSize:'clamp(1rem, 1.8vw, 3.2rem)'}}>Need help or want a quote?</p>

                <p style={{textAlign:'center', fontWeight:'bold', padding:'0', margin:'0', lineHeight:'1'}}>
                  <label htmlFor="name" aria-label="Your Name">
                    <input type="text" id="name" name="name" placeholder={dicName} required />
                  </label>
                </p>


              <p style={{textAlign:'center', fontWeight:'bold', padding:'0', margin:'0', lineHeight:'1'}}>
                <label htmlFor="email" aria-label="Your Email">
                  <input id="email" type="email" name="email" placeholder={dicEmail} required />
                </label>
              </p>


                <p style={{textAlign:'center', fontWeight:'bold', padding:'0', margin:'0', lineHeight:'1'}}>
                  <label htmlFor="phone" aria-label="Your Phone">
                    <input type="tel" id="phone" name="phone" placeholder={dicPhone} />
                  </label>
                </p>


              <p style={{textAlign:'center', fontWeight:'bold', padding:'0', margin:'0', lineHeight:'1'}}>
                <label htmlFor="message" aria-label="Your Message">
                  <textarea id="message" name="message" placeholder={dicMessage} required style={{height:'100px', padding:''}}></textarea>
                </label>
              </p>


            
              <p className="text-align-right1" style={{ margin: "0 auto", color: "#fff" }}>
                <button
                  className="button specialfont1"
                  type="submit"
                  style={{ width: '90%' }}
                >
                  {dicSubmit}
                </button>
              </p>
</form>
</div>

{/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="KFH49DVS9AFQS" />
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribe_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Subscribe" />
</form> */}


{/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="99GULJ7R9T68W" />
  <input type="hidden" name="currency_code" value="USD" />
  <button className="button" type="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" >Get Pirate Plus</button>
</form> */}


{/* <Link className="button" state={{modal: true}} to="/install3" rel="nofollow">
Continue with Free
</Link>
<br /> */}


{/* <br />Setup Account and Create YOUR Website<br />



<ul className="bulletlist">
  <li>You will need a valid email address to create your GitHub</li>
  <li>Everything is completely FREE and only take 3-4 minutes</li>
</ul>
<br />

<br />
Simply locate your location on the map above then click the button in the upper left corner to "view larger map".

This will open Google Maps in a new window.

<strong>Don't worry - we handle all the hard stuff for you!</strong>
<br />
<a style={{display:'grid', placeContent:'center', margin:'0 auto 0 auto'}} class="button" href="https://app.netlify.com/start/deploy?repository=https://github.com/piratesocial/piratesocial&amp;stack=cms&amp;SITE_LOGO=https://https://piratesocial.org/assets/logo.svg" target="_blank" rel="nofollow">
Setup Account
</a> */}




{/* <ContactForm /> */}

{/* <a className="button" href="https://app.netlify.com/start/deploy?repository=https://github.com/piratesocial/pirate&amp;stack=cms&amp;SITE_LOGO=https://https://piratesocial.org/assets/logo.svg" target="_blank" rel="noreferrer">
Setup GitHub &amp; Build Your Web App
</a> */}

{/* <Link style={{display:'grid', placeContent:'center', margin:'0 auto 0 auto'}} state={{modal: true}} className="button" to="/contact">Tell us about yourself</Link> */}




</section>















{/* <div className="scroll-container1" style={{display:'flex', justifyContent:'start', maxWidth:'', height:'calc(100vh - 70px)', margin:'0 auto 0 auto', position:'relative', left:'0', right:'0', top:'0', border:'10px solid green'}}>
<iframe title="Pirate Frame" id="youtube2" className="blog-video1" width="100%" height="400" src="https://billing.stripe.com/p/login/8wMeYg9DRgMH97W144" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'calc(100vh - 70px)', minHeight:'', border:'0px solid yellow', borderRadius:'0', padding:'0 0 0 0' }} />
</div> */}






</Layout>




  );
}

export default Portal;