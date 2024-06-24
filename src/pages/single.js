import React from "react";
import Seo from "../components/seo";
import Layout from "../components/siteLayout";
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"
import { Helmet } from "react-helmet"

const Driver = () => {
      return (
<>
 <Layout className="thanks-page">

<Helmet>

  
<body id="body" className="homepage install" />
</Helmet>

 <Seo title={`Thanks for being a Pirate!`} />


<section className="outer section section--gradient" >
      <div className="container" style={{padding: '30px 0', minHeight:'100dvh'}}>
        
      {/* <div className="mobile"><GoBack /></div> */}


    

<div style={{width:'90%', height:'100px', margin:'0 auto', textAlign:'center',}}>

{/* <p>
<strong>Hytron Manufacturing, Inc.</strong><br />
15582 Chemical Lane<br />
Huntington Beach, CA 92649<br />
</p> */}

<stripe-pricing-table pricing-table-id="prctbl_1PV8UQKHJvXfkmw3k3n8EWqb"
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

export default Driver;