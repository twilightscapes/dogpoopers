import React from "react";
import Seo from "../components/seo";
import Layout from "../components/siteLayout";
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
const Plans = () => {
      return (
<>
 <Layout className="thanks-page">

<Helmet>

  
<body id="body" className="homepage" />
</Helmet>

 <Seo title={`Dog Poopers`} />


<section className="outer section section--gradient" >
      <div className="container" style={{padding: '0 0', minHeight:''}}>
        
      {/* <div className="mobile"><GoBack /></div> */}


    

<div style={{width:'100%', height:'', margin:'0 auto', textAlign:'center',}}>

 {/* <StaticImage src="../../static/assets/dogpoopers-header-single.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'cover', margin:'0 auto'}} /> */}
 <stripe-pricing-table pricing-table-id="prctbl_1PV0sNKHJvXfkmw38f8wPFG5"
publishable-key="pk_live_51O3tWYKHJvXfkmw3F98KZ7I7367B5T8zSl7qIWhmDzP5o4XR4hRlCWdsAdiLDaLZ3Kfal2jTTitRIDC2azwyuwgl00T2NoCR5m">
</stripe-pricing-table>



      {/* <h1 className="" style={{fontSize:'50px',}}>Jeff North Gulfport Route</h1>
      <div className="spacer33"></div>  */}
      {/* <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Back to Homepage
      </Link> */}


</div>






</div>



   


    </section>
    
    
    </Layout>
    </>
  );
};

export default Plans;