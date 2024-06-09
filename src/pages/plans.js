import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import useSiteMetadata from "../hooks/SiteMetadata"
import Seo from "../components/seo"
import Layout from "../components/siteLayout"
// import GoBack from "../components/goBack"
// import Footer from "../components/footer"
import { GatsbyImage } from "gatsby-plugin-image"
import Social from "../components/social"
import ReactPlayer from 'react-player/lazy'
import { AiOutlineAudioMuted } from 'react-icons/ai';
// import Faqs from "../components/equipment-list"
// import SignUp from "../components/newssign"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const PricePage = () => {
  const { language, featureOptions, proOptions  } = useSiteMetadata();
  const { showSocial } = featureOptions
  const { showProfile } = proOptions
  const { dicProfileAudioText, dicProfileAudioActionText} = language;


  const data = useStaticQuery(graphql`
    query AboutQuery {



            site {
              siteMetadata {
                title
                titleDefault
                siteUrl
                description
                image
                twitterUsername
                companyname
              }
            }


      markdownRemark(frontmatter: { template: { eq: "index-page" } }) {
        html
        excerpt(pruneLength: 140)
        frontmatter {
          title
          description
          profTitle
          profileName
          tagline
          addressText
          addressText2
          cta{
            ctaText
            ctaLink
            showCTA
          }
          coverletter{
            coverText
            coverLink
            showCover
          }
          youtube {
            youtuber
            youtuber2
            youtubeshoworiginal
            youtubersuggestion1
            youtubersuggestion2
            youtubersuggestion3
            youtubestart
            youtubeend
            youtubemute
            youtubeloop
            youtubecontrols
            customcontrols
            clicktoplay
            youtubeautostart
            liarliar
            contentinvideo
            audiostart
            audioend
            audiotitle
          }
        featuredImage {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          secondaryImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark


  const SecondaryImage = frontmatter.secondaryImage
  ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
  : ""

  const AudioStart = frontmatter.youtube.audiostart
  const AudioEnd = frontmatter.youtube.audioend
  const AudioTitle = frontmatter.youtube.audiotitle
  const coverText = frontmatter.coverletter.coverText

//   const YouTube = frontmatter.youtube.youtuber
//   const YouTube2 = frontmatter.youtube.youtuber2

  function Iframer3() {
    if (!frontmatter.youtube.youtuber2) {
      return null; 
    }
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtube.youtuber2
    return (
      
  <div style={{marginTop:'0', position:'relative', zIndex:'1',
  display:'flex', justifyContent:'center', maxHeight:'80px !important', height:'150px', border:'0px solid yellow', width:'100%'
  }}>
  
  
  <ReactPlayer
          allow="web-share"
          style={{ position: 'absolute', top:'0', margin: '0 auto 0 auto', zIndex: '1', aspectRatio:'16/9', }}
          url={iframeUrl3}
          width="200px"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'var(--theme-ui-colors-borderRadius)'}}>
          
        <div className="" style={{position:'', top:'', zIndex:'0', textAlign:'center', animation:'', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
    
  
          <div className="popped" style={{display:'flex', width:'80%', minWidth:'200px', margin:'0 auto', fontWeight:'bold', padding:'.2rem .4rem', fontSize:'2rem', background:'rgba(0,0,0,0.30)', borderRadius:'var(--theme-ui-colors-borderRadius)', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
            
            <div style={{fontSize:'.8rem', fontWeight:'', width:'100%', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
          {dicProfileAudioText}<br />
  
  
  
            <div style={{fontSize:'1rem', fontWeight:'bold', marginTop:'5px' }}>{ AudioTitle }</div>
      
            <div style={{display:'flex', justifyContent:'center', marginTop:'5px'}}>
            <div><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000),', color:'var(--theme-ui-colors-siteColor)'}} /></div> &nbsp; <div>{dicProfileAudioActionText} </div>
            
            </div>
            </div>
  
          </div>
         
          </div>
          </button>}
   
            light="/assets/transparent.png"
          />
     </div>
  
    )
  }



 

  return (
    <Layout className="page">
      <Helmet>
        <body id="body" className="utilitypage" />
      </Helmet>
      <Seo title={frontmatter.title} description={excerpt} />


        <div className="spacer mobile" style={{ height: "", border: "0px solid yellow" }}></div>








      <div className="container panel" style={{ maxWidth: "100dvw", margin: "0 auto", padding: "0", overFlowX:'hidden' }}>




{/* show profile */}
{showProfile ? (
  <section className="nameblock panel" id="profileInfo" style={{ display:'grid', height:'100%',textAlign:'left', justifyContent:'center', verticalAlign:'center', margin:'0 auto 0 auto', padding:'0 0 60px 0', background:'var(--theme-ui-colors-background)', color:'var(--theme-ui-colors-text)', width:'100dvw', borderRadius:'var(--theme-ui-colors-borderRadius)', }}>
  <article style={{ margin:'0 0 0 0'}}>


<div id="profiletop" className="flexbutt" style={{display:'', gap:'10px', justifyContent:'center', alignItems:"center", margin:'0 0',
  padding:'0 2% 0 2%', position:'relative', color: ''}}>




  <div className="nameblock flexcheek" style={{position:'', top:'0', marginTop: '', padding: '1rem 2rem 0 2rem', maxHeight: '', fontSize: 'clamp(1rem, 1.4vw, 3.2rem)',  borderRadius: 'var(--theme-ui-colors-borderRadius)' }}>


  <div className=" mob print" style={{ position:'sticky', top:'0', fontSize: 'clamp(1rem, 1.5vw, 3.2rem)' }}>
      <h1 className="title1" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>{frontmatter.profTitle}</h1>
      <h2 className="tagline1" style={{ fontSize: 'clamp(1.2rem, 1.8vw, 3.2rem)' }}>
        {frontmatter.tagline}
      </h2>
      <div style={{ fontSize: 'clamp(1.2rem, 1.8vw, 3.2rem)' }} className="description" dangerouslySetInnerHTML={{ __html: html }} />
    </div>


  
  </div>




      <div className="flexcheek mob2 print" style={{position:'', top:'0', minWidth:'500px', overflow:'', marginBottom:'', paddingTop:'1vh', borderRadius:'var(--theme-ui-colors-borderRadius)',
      }}>
{SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Profile Image"}
              className="avatar-frame"
              style={{ maxWidth:'280px', margin:'0 auto', height:'', maxHeight:'280px', position:'relative', top:'', objectFit:'contain', backgroundSize:'contain', marginBottom:'0', border:'0'}}
            />
          ) : (
            ""
          )}
<div className="nameblock font" style={{margin:'0 auto 0 auto', padding:'0 0 0 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'', verticalAlign:'center',
  color:'#fff', 
  fontSize:'clamp(1rem, 1.4vw, 3.2rem)',
  background:'rgba(0,0,0,0.50)',
  backdropFilter:'blur(8px)',
  border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'var(--theme-ui-colors-borderRadius)',
  textShadow:'0 2px 0px #000',
  maxWidth:'70%',
}}>
  <br />
  {frontmatter.profileName ? (
    <span style={{margin:'2vh auto', fontSize:'160%'}}>{frontmatter.profileName}</span>
  ) : (
    ""
  )}

  {/* <span style={{margin:'10px auto', fontSize:'160%'}}>{companyname}</span> */}
    {/* <span style={{margin:'10px auto', fontSize:'160%'}}>Become a Pirate!</span> */}
  
  {frontmatter.addressText ? (
    frontmatter.addressText
  ) : (
    ""
  )}
  <br /><br />
  {frontmatter.addressText2 ? (
    frontmatter.addressText2
  ) : (
    ""
  )}
  <br />

  {frontmatter.cta.showCTA ? (
  <Link to={frontmatter.cta.ctaLink} state={{modal: true}} className="button print" style={{ display: 'flex', justifyContent: 'center', padding:'1vh .5vw', maxWidth:'250px', margin:'30px auto' }}>{frontmatter.cta.ctaText}</Link>





  ) : (
    ""
  )}
{/* <AnchorLink to='/install' className="button actionJackson print" style={{ display: 'flex', justifyContent: 'center', padding:'1vh .5vw', maxWidth:'250px', color:'#fff' }}>Install Now</AnchorLink> */}



  {frontmatter.coverletter.showCover ? (
    <Link to={frontmatter.coverletter.coverLink} state={{modal: true}} className="button print" style={{ display: 'flex', justifyContent: 'center', padding:'1vh 1vw', maxWidth:'250px', margin:'30px auto' }}>{coverText}</Link>
  ) : (
    ""
  )}
  

  {showSocial ? (
    <Social />
  ) : (
    ""
  )}

{frontmatter.youtube.youtuber2 ? (
    <Iframer3 />
  ) : (
    ""
  )}
  


</div>


</div>
</div> 
</article>
</section>
) : (
    ""
  )}
{/* End profile */}



{/* <GatsbyImage
image={FrontImage}
alt={frontmatter.title + " - Featured image"}
className="featuredimage"
placeholder="blurred"
loading="eager"
style={{height:'auto', width:'100dvw', maxHeight:'100dvh', position:'relative', zIndex:'1', top:'0', left:'0', right:'0', border:'0px solid #888 !important', objectFit:'contain', margin:'0'}}
/> */}



<StaticImage src="../../static/assets/dogpoopers-nosey-deluxe-header.webp" alt="Default Image" style={{height:'auto', width:'100dvw', maxHeight:'100dvh', position:'relative', zIndex:'1', top:'0', left:'0', right:'0', border:'0px solid #888 !important', objectFit:'contain', margin:'0', zIndex:'0'}} />


<section id="SecondaryInfo" order="6" className="nameblock" style={{margin:'0 auto 10vh auto', padding:'1% 4%',alignContent:'center', display:'flex', textAlign:'left', justifyContent:'center', verticalAlign:'center', }}>


      <div className="container" style={{padding: '0 3%', color:''}}>

{/* <div id="costs" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'0 0 2rem 0', width:'100%'}}>
              
              

              <p style={{fontSize:'150%', textAlign:'center', margin:'2rem 0 0 0'}}><u>LOW</u> Monthly Costs</p>
              
              <div style={{display:'flex', padding:'1rem 10%', margin:'0 2% 0 2%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'1000px', gap:'20px', background:'rgba(0,0,0,0.30)', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000'}}>
              
                <span style={{fontSize:'3rem', color:'white', transform:'rotate()', lineHeight:'100%'}}>Web Apps </span>
              
                <span style={{width:'70%', fontSize:'40px', color:'var(--primary-color)', lineHeight:'100%'}}>
                WITH NO<br /> HIDDEN COSTS
                </span>
              </div>

              <p style={{fontSize:'150%', textAlign:'center', margin:'0 0 0 0'}}>uses metered Cloud Based Services</p>

              </div> */}








<h2 id="costs" className="letter" style={{fontSize:'240%', textAlign:'center'}}>Choose Your Plan:</h2>
<p style={{fontSize:'150%', textAlign:'center'}}>
  <u>NO</u> contracts required - Cancel any time
</p> 



<p style={{fontSize:'150%', textAlign:'center'}}>
  <strong>Pooper Packages</strong><br /> 1-2 Dogs, Up to 1/4 Acre Yard 
</p> 



{/* First row */}
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


<br />
<p style={{fontSize:'150%', textAlign:'center'}}>
<strong>Big Dawg Packages</strong><br /> 3 or More Dogs, Up to 1/2 Acre Yard 
</p> 




{/* Second row */}
<div className="flexbutt hover" style={{display:'flex', padding:'0', gap:'20px', color:'#fff'}}>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700', fontSize:'130%', textAlign:'center'}}>Big Dawg<br /> One-Time Service</h3>
<div style={{}}>A Dog Pooper technician walks and cleans your yard <strong className="highlight">once</strong>. 
  <br />
{/* Pay only when your site uses a LOT of data.<br />  */}
 <br />
 <div style={{textDecoration:'underline', textAlign:'center'}}>
  <a className="button" style={{color:'#fff', fontWeight:'700'}} href="https://www.paypal.com/ncp/payment/JHGCN3N8MCSLW" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'#fff', fontWeight:'700'}}> Order Now</strong></a>
  
  <br /> <strong style={{color:'yellow'}}>(Deluxe Included)</strong>
  <br />
  </div>
 </div>
<p style={{textDecoration:'', textAlign:'center', margin:'1rem 0'}}><strong className="highlight" >$59.99</strong> One Time</p>
</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700', fontSize:'130%', textAlign:'center'}}>Big Dawg<br /> Weekly</h3>

<div style={{}}>A Dog Pooper technician walks and cleans your yard <strong className="highlight">once per week</strong>. 
  <br />
<br />

 <div style={{textDecoration:'underline', textAlign:'center',}}>
  <a className="button" href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-5EW181580G703440GMZRGOIY" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'#fff'}}> Order Now</strong></a>
  <br />
  <a className="" href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0WL067911L187045DMZRHGLQ" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'yellow'}}> Get Deluxe (only $4.99 more)</strong></a>
  </div>

  <p style={{textDecoration:'', textAlign:'center', margin:'1rem 0'}}><strong className="highlight" >$45.99</strong> per week</p>
  
 </div>

</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700', fontSize:'130%', textAlign:'center'}}>Big Dawg<br /> Twice Weekly</h3>
<div style={{}}>A Dog Pooper technician walks and cleans your yard <strong className="highlight">twice per week</strong>. 
  <br />
<br />

 <div style={{textDecoration:'underline', textAlign:'center'}}>
  <a className="button" href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-5RS97660Y8905020SMZRGPTQ" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'#fff', fontWeight:'700', fontSize:'', textAlign:'center'}}> Order Now</strong></a>
  <br />
  <a className="" href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3P364366V7658802XMZRHFNQ" target="_blank" rel="noreferrer" > <strong className="highlight" style={{color:'yellow'}}> Get Deluxe (only $4.99 more)</strong></a>
  </div>

  <p style={{textDecoration:'', textAlign:'center', margin:'1rem 0'}}><strong className="highlight" >$59.99</strong> per week</p>

 </div>
</div>



</div>











{/* <div className="flexbutt hover" style={{display:'flex', marginTop:'20px', padding:'', gap:'20px', color:'#fff'}}>


<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Social Sharing</h3>
<p>Why pay for plugins just to allow for your users to share your content? Social sharing is built-in, along with other great features. <br /><br />All INCLUDED for <strong className="highlight">FREE</strong>.</p>
</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>AdFree YouTube</h3>
<p>We use AdFree YouTube to remove ads. This means you have complete control of your videos without any ads.
  
  <br /><br />AdFree YouTube <strong className="highlight">FREE!</strong></p>
</div>


<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Comments</h3>
<p>We use CommentBox.io and with their generous 100 comments a month.
  
  <br /><br /><strong className="highlight" style={{color:''}}>FREE!</strong> Comments without ads</p>
</div>


</div> */}



      </div>
</section>



{/* <section id="" order="" className="nameblock" style={{margin:'0 auto 10vh auto', padding:'1% 4%',alignContent:'center', display:'flex', textAlign:'left', justifyContent:'center', verticalAlign:'center', }}>


      <div className="container" style={{padding: '0 3%', color:''}}>

<div style={{position:'', top:'', zIndex:''}}>
<p className="font" style={{fontSize:'300%', textAlign:'center', color:'yellow'}}>Our Deluxe plans offer </p>
<p>Our Stain Remover &amp; Odor Suppressant Treatment is an environmentally-friendly solution used to freshen your lawn and yard.
</p>

 <p>It is an animal safe, 100% organic spray, formulated to remove stains and eliminate ammonia and odors emitted from pet urine and feces. Left untreated, these odors can result in health problems for animals and humans alike.</p>
</div>



</div>
</section> */}




<section id="" order="7" className="nameblock" style={{margin:'0 auto 20vh auto', padding:'2% 4%',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  background: 'rgba(35, 117, 62, 0.6)', padding:'0 1rem ', backdropFilter: 'blur(4px)',
  backdropFilter:'blur(8px)',
  // border:'1px solid #333',
  borderRadius:'10px',
  textShadow:'0 2px 7px #000',
  maxWidth:'75%' }}>



  <div className="nameblock" style={{position:'sticky', top:'0', marginTop: '', width:'100%', padding: '1rem', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1rem, 3.5vw, 3.2rem)', textAlign:'center', textShadow: '0 2px 5px #000', color: '#fff', background: 'rgba(0,0,0,0.60)', backdropFilter: 'blur(4px)', borderRadius: '10px', color:'yellow' }}>
    <h2>Our Deluxe plans offer</h2>
  </div>

  <div className="nameblock" style={{position:'sticky', top:'0', marginTop: '', width:'100%', padding: '2rem', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1rem, 2vw, 3.2rem)', textAlign:'left', textShadow: '0 2px 3px #000', background: 'rgba(0,0,0,0.60)', backdropFilter: 'blur(12px)', borderRadius: '10px' }}>


  <p>Our Stain Remover &amp; Odor Suppressant Treatment is an environmentally-friendly solution used to freshen your lawn and yard.
</p>

 <p>It is an animal safe, 100% organic spray, formulated to remove stains and eliminate ammonia and odors emitted from pet urine and feces. Left untreated, these odors can result in health problems for animals and humans alike.</p>
  </div>



</section>





{/* <section id="features" className="nameblock" style={{margin:'0 auto 10vh auto', padding:'1% 2%',alignContent:'center', display:'flex', textAlign:'left', justifyContent:'center', verticalAlign:'center', }}>


  



<div className="flexbutt featurelisting" style={{display:'flex', padding:'2vh', alignItems:'baseline', position:'relative', gap:'30px', color:'', width:'95vw'}}>



  <div className="flexcheek" style={{position:'', top:'0'}} >
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px', textAlign:'left'}}>
        
      <h2
  className="title1 txtshadow-header"
  style={{
   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 0px #222', filter:'drop-shadow(0px 0px 10px var(--theme-ui-colors-siteColor))', border:'1px solid var(--theme-ui-colors-siteColor)', color:'var(--theme-ui-colors-siteColorText)' }}>Pirate includes:</span></h2>
          
        <ul className="featurelist" style={{listStyleType:'none'}}>
        <li>User-installable PWA (Progressive Web Apps) which means your site can be installed on any device without the need for expensive and complex App Stores.</li>
        <li>Hosting on Global Edge Network (the cloud)</li>
        <li>Automated backups with intant rollbacks to any version.</li>
        <li>FREE - 100GB/Mo Bandwidth</li>
<li>FREE - 100 Site Form Submits per Mo</li>
<li>FREE Secured Socket Layer (SSL) Cert (https://)</li>
<li>Customizable with your own domain name</li>
<li>Responsive Design, built with React and Gatsby</li>
<li>Dark / Light Mode (also full support for all web accessibility guidelines)</li>



</ul>
      </div>
    </div>
  </div>






  <div className="flexcheek" style={{position:'', top:'0'}} >
    <div className="frontcontent content-lr">
    
      <div className="content-inside" style={{padding:'8px'}}>
        

        <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 10px var(--theme-ui-colors-siteColor))', border:'1px solid var(--theme-ui-colors-siteColor)', color:'var(--theme-ui-colors-siteColorText)' }}>Pirate Features:</span></h2>


        <ul className="featurelist" style={{listStyleType:'none'}}>
        
 <li>Custom Homepage with Resume and Skills sections</li>
<li>Edit website settings, Change colors, logos, etc all from within the CMS.</li>

<li>100% SEO Optimized - Google LOVES Pirate. </li>

<li>Contact Form - an integrated contact form on all pages of the your site, that sends everything right to your email inbox.</li>



<li>Social Media Icons - link to all your sites and allow users to easily share your content</li>

<li>OpenGraph structured data - all of site is structured to be shared with high quality image links on social sites</li>

<li>Twitter Cards meta - Your pages will look great when shared on Twitter</li>

<li>XML Sitemaps - Your entire site is automatically indexed and links provided to search engines.</li>


<li>Your Stuff is SAFE - All stored in native image formats and markdown files that are downloadable at any time</li>




</ul>
      </div>
    </div>
  </div>



  <div className="flexcheek hover">
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px'}}>

        <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="fire" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 10px var(--theme-ui-colors-siteColor))', border:'1px solid var(--theme-ui-colors-siteColor)', color:'var(--theme-ui-colors-siteColorText)' }}>Pro Features:</span></h2>

        <ul className="featurelist" style={{listStyleType:'none'}}>






<li>Customize all content of included Homepage, About and Contact page. Add / Modify / Delete blog posts.</li>

<li>Edit website settings, Add Google Analytics change colors, settings, logos, etc all from within the CMS.</li>

<li>Hide/Show Comments, Social Sharing, or User-interactivity (youtube video changer) on a post-by-post basis</li>


<li>Control YouTube videos with starting/stopping times, loop, mute, etc..</li>

<li>Custom Ad-Free YouTube Player</li>

<li>Full Privacy Compliance Support (GDPR and CCPA). </li>

<li>PWA Exclusive Content (make some of your content only available to your site's user base - great to boost engagement!)</li>

<li>Drop Timers - Easily create your own Drops. Make posts appear when your NFT drops. Just add the drop date and time</li>


<li>E-Newsletter Form - Build your email newsletter by allowing peole to easily sign up</li>


</ul>
      </div>
    </div>
  </div>

  



  
</div>
</section> */}










{/* <section id="SecondaryInfo2" order="7" className="nameblock" style={{margin:'2vh auto 10vh auto', padding:'2% 4%',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
   color:'var(--theme-ui-colors-text)',
  // border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  // background:'#222',
  // backdropFilter:'blur(8px)',
  // border:'1px solid #333',
  borderRadius:'10px',
  // textShadow:'0 2px 7px #000',
  maxWidth:'95%' }}><Faqs /></section> */}



 


{/* <section id="SecondaryInfo5" order="7" className="nameblock" style={{margin:'0 auto 0 auto', padding:'1vh 2vh',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  background:'rgba(0,0,0,0.50)',
  backdropFilter:'blur(8px)',
  // border:'1px solid #333',
  borderRadius:'10px',
  textShadow:'0 2px 7px #000',
  maxWidth:'95%' }}>



  <div className="nameblock" style={{position:'', top:'0', marginTop: '', width:'100%', padding: '1rem 2rem 0 2rem', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1rem, 3.5vw, 3.2rem)', textAlign:'center', textShadow: '0 2px 3px #000', color: '#fff', background: 'rgba(0,0,0,0.10)', backdropFilter: 'blur(12px)', borderRadius: '10px', justifyContent:'center', alignItems:'center' }}>
    <h2>Technology Stack</h2>
  </div>

  <div className="nameblock" style={{position:'', top:'0', marginTop: '', width:'100%', padding: '2rem', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1rem, 2vw, 3.2rem)', textAlign:'left', textShadow: '0 2px 3px #000', background: 'var(--theme-ui-colors-cardBg)', backgroundColor:'rgba(0,0,0,0.10)', backdropFilter: 'blur(12px)', borderRadius: '10px', color:'#fff' }}>


    <p>Pirate is built on industry leading technologies, and is designed from the ground up, using the best, most secure and modern development technology available today.</p>

    <p style={{textAlign:'center'}}>Free yourself from the social media bonds and become your own Captain.</p>
  </div>


<div className="flexbutt" style={{gap:'2vw'}}>
<div className="flexcheek" style={{display:'flex', gap:'2vw', flexDirection:'row', justifyContent:'space-around', fontSize: 'clamp(1rem, 1vw, 2.2rem)', textAlign:'center', width:'100%', alignItems:'center'}}> 

<StaticImage src="../../static/assets/partner3.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/partner1.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/partner4.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />



</div>
<div className="flexcheek" style={{display:'flex', gap:'2vw', flexDirection:'row', justifyContent:'space-around', fontSize: 'clamp(1rem, 1vw, 2.2rem)', textAlign:'center', width:'100%', alignItems:'center'}}> 

<StaticImage src="../../static/assets/partner2.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/partner5.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/partner8.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />



</div>
</div>
</section> */}

        {/* <GoBack /> */}
        
      </div>

      {/* <br />
      <br />
      <Footer /> */}
    </Layout>
  )
}

export default PricePage