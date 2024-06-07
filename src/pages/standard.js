// import React, { useState } from "react";
import React from "react";
import useSiteMetadata from "../hooks/SiteMetadata"
import { StaticImage } from "gatsby-plugin-image"
// import {Link} from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"
// import Intro from "../../static/assets/textual.svg"
// import Intro2 from "../../static/assets/install-intro.svg"
// import Intro3 from "../../static/assets/intro-github.svg"
// import ContactForm from "../components/newssign"
// import useNetlifyIdentity from '../components/useNetlifyIdentity';


function Install() {
  const { featureOptions  } = useSiteMetadata();

  const { showNav } = featureOptions


  return (

<Layout>
<Helmet>

  
        <body id="body" className="install " />
      </Helmet>

      {/* {showNav ? (
        <div id="top" className="spacer" style={{ height: "0", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )} */}

<div id="top" className="spacer" style={{ height: "", border: "0px solid yellow" }}></div>

<div className="scroll-container">


{/* <div style={{display:'grid', justifyContent:'start', alignItems:'start', position:'relative', left:'', top:'', cursor:''}}> */}
  
{/* <Intro style={{height:'100vh', width:'100vw', position:'fixed', zIndex:'-1', top:'', objectFit:'cover',}} /> */}

{/* <section style={{height:''}}>
<Intro2 style={{height:'100vh', width:'100vw', position:'relative', zIndex:'1', top:'', objectFit:'cover',}} />
  </section> */}
  {/* </div> */}


<StaticImage src="../../static/assets/dogpoopers-grid-header.webp" alt="Default Image" style={{height:'auto', width:'100dvw', maxHeight:'100dvh', position:'relative', zIndex:'1', top:'0', left:'0', right:'0', border:'0px solid #888 !important', objectFit:'contain', margin:'0'}} />



<section id="SecondaryInfo" order="6" className="nameblock" style={{margin:'0 auto 10vh auto', padding:'1% 4%',alignContent:'center', display:'flex', textAlign:'left', justifyContent:'center', verticalAlign:'center', }}>


      <div className="container" style={{padding: '0 3%', color:''}}>


      <h2 id="costs" className="letter" style={{fontSize:'240%', textAlign:'center'}}>Choose Your Plan:</h2>
<p style={{fontSize:'150%', textAlign:'center'}}>
  Cancel anytime - <u>NO</u> contracts required.
</p> 
<br />
<p style={{fontSize:'150%', textAlign:'center'}}>
<strong>Pooper Packages</strong>:<br />1 or 2 Dogs, Up to 1/4 Acre Yard 
</p> 

<div className="flexbutt hover" style={{display:'flex', padding:'0', gap:'20px', color:'#fff'}}>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700', fontSize:'130%', textAlign:'center'}}>One-Time Service</h3>
<div style={{}}>A Dog Pooper technician walks and cleans your yard <strong className="highlight">once</strong>. 
  <br />
{/* Pay only when your site uses a LOT of data.<br />  */}
 <br />
 <div style={{textDecoration:'underline', textAlign:'center'}}>
  <a className="button" style={{color:'#fff', fontWeight:'700'}} href="https://www.paypal.com/ncp/payment/3WQU5K29X664L" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'#fff', fontWeight:'700'}}> Order Now</strong></a>
  
  <br /> <strong style={{color:'yellow'}}>(Deluxe Included)</strong>
  <br />
  </div>
 </div>
<p style={{textDecoration:'', textAlign:'center', margin:'1rem 0'}}><strong className="highlight" >$49.99</strong> One Time</p>
</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColorText)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700', fontSize:'130%', textAlign:'center'}}>Weekly</h3>

<div style={{}}>A Dog Pooper technician walks and cleans your yard <strong className="highlight">once per week</strong>. 
  <br />
<br />

 <div style={{textDecoration:'underline', textAlign:'center',}}>
  <a className="button" href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2XM00365T0303471RMZRGI4A" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'#fff'}}> Order Now</strong></a>
  <br />
  <a className="" href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8BS82929AS9038505MZRGKKQ" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'yellow'}}> Get Deluxe (only $4.99 more)</strong></a>
  </div>

  <p style={{textDecoration:'', textAlign:'center', margin:'1rem 0'}}><strong className="highlight" >$29.99</strong> per week</p>
  
 </div>

</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700', fontSize:'130%', textAlign:'center'}}>Twice Weekly</h3>
<div style={{}}>A Dog Pooper technician walks and cleans your yard <strong className="highlight">twice per week</strong>. 
  <br />
<br />

 <div style={{textDecoration:'underline', textAlign:'center'}}>
  <a className="button" href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-03203141SA2517416MZRGL2Y" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'#fff', fontWeight:'700', fontSize:'', textAlign:'center'}}> Order Now</strong></a>
  <br />
  <a className="" href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-39208942DN521971UMZRGNLY" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'yellow'}}> Get Deluxe (only $4.99 more)</strong></a>
  </div>

  <p style={{textDecoration:'', textAlign:'center', margin:'1rem 0'}}><strong className="highlight" >$49.99</strong> per week</p>

 </div>
</div>



</div>

{/* <ul className="bulletlist">
  <li>You will need a valid email address to create your GitHub</li>
  <li>Everything is completely FREE and only take 3-4 minutes</li>
</ul>
<br />

Simply follow the prompts and ignore the scary jargon
<br />
<br />
<strong>Don't worry - we handle all the hard stuff for you!</strong>
<br /> */}
{/* <a style={{display:'grid', placeContent:'center', margin:'0 auto 0 auto'}} class="button" href="https://app.netlify.com/start/deploy?repository=https://github.com/piratesocial/piratesocial&amp;stack=cms&amp;SITE_LOGO=https://https://piratesocial.org/assets/logo.svg" target="_blank" rel="nofollow">
Setup Account
</a> */}

{/* <div style={{display:'', alignItems:'center'}}>



<Link className="button fire" state={{modal: true}} to="/install2" rel="nofollow">
Become a PIRATE!
</Link>

<br />
<br />
<br />
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="99GULJ7R9T68W" />
  <input type="hidden" name="currency_code" value="USD" />
  <button className="" type="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" >Donate To Developer</button>
</form>
</div> */}


{/* <Link className="button" state={{modal: true}} to="/install2" rel="nofollow">
You will need a valid email
</Link> */}
<br />

<p style={{textAlign:'center'}}><Link className="" to="/plans" > <strong className="highlight">Explore All Plans</strong></Link></p>
{/* <ContactForm /> */}

{/* <Link style={{display:'grid', placeContent:'center', margin:'0 auto 0 auto'}} state={{modal: true}} className="button" to="/contact">Tell us about yourself</Link> */}
</div>
</section>










</div>

{/* <div className="scroll-container1" style={{display:'flex', justifyContent:'start', maxWidth:'', height:'calc(100vh - 70px)', margin:'0 auto 0 auto', position:'relative', left:'0', right:'0', top:'0'}}>
<iframe title="Pirate Frame" id="youtube2" className="blog-video1" width="100%" height="400" src="https://app.netlify.com/start/deploy?repository=https://github.com/completeweb-site/base&amp;stack=cms&amp;SITE_LOGO=https://completeweb.site/assets/logo.svg" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'calc(100vh - 70px)', minHeight:'', border:'0px solid yellow', borderRadius:'0', padding:'0 0 0 0' }} />
</div> */}





</Layout>




  );
}

export default Install;


