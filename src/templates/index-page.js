import React from "react"
import { useState, useRef, useEffect } from "react";
import { graphql, Link } from "gatsby"
import Layout from "../components/siteLayout";
import { Helmet } from "react-helmet";
import HomePosts from "../components/HomePosts";
import Seo from "../components/seo";
// import { getSrc } from "gatsby-plugin-image";
import useSiteMetadata from "../hooks/SiteMetadata";
import { GatsbyImage, getSrc } from "gatsby-plugin-image"

import Social from "../components/social"
// import PropTypes from "prop-types";

import YouTubePlayer from "../components/VideoPlayer";
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
// import { MdVolumeUp } from "react-icons/md"
// import { MdPlayArrow } from "react-icons/md"
// import { MdPause } from "react-icons/md"
// import { MdVolumeOff } from "react-icons/md"
// import { ImCross } from "react-icons/im"
// import { FaRegPlusSquare } from 'react-icons/fa';
// import { IoShareOutline } from 'react-icons/io5';
import { AiOutlineAudioMuted } from 'react-icons/ai';
import { StaticImage } from "gatsby-plugin-image"
import Faqs from "../components/services"








const HomePage = ({ data, location }) => {

  const SeoWrapper = ({ location }) => {
    const queryParams = new URLSearchParams(location.search);
    const videoUrlParam = queryParams.get('video');
    const seoTitleParam = queryParams.get('seoTitle') || frontmatter.description ? frontmatter.description : excerpt;
    const customImageParam = queryParams.get('customImage'); 
  
    // Function to extract video ID from YouTube URL
    const extractVideoId = (url) => {
      if (!url) {
        return null;
      }
      /* eslint-disable no-useless-escape */
      const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regExp);
      const videoId = match ? match[1] : null;
      return videoId;
      /* eslint-disable no-useless-escape */
    };
  
    // Extract video ID
    const videoId = extractVideoId(videoUrlParam);
  
  
  
    return (


<Seo
  title={seoTitleParam || frontmatter.title}
  description={frontmatter.description || excerpt}
  image={customImageParam || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : (frontmatter.featuredImage ? getSrc(frontmatter.featuredImage) : `${siteUrl}/assets/default-og-image.webp`))}
/>


    );
  };

  const { language, proOptions, featureOptions, siteUrl  } = useSiteMetadata();

  const { showFeature } = proOptions
  const { showDefault, showVideoPlayer, showNav, showProfile, showHomePosts } = featureOptions

  const { dicPlayVideo, dicProfileAudioText, dicProfileAudioActionText} = language;


  
  const { markdownRemark } = data;
  const { frontmatter, html, excerpt } = markdownRemark;

  const FrontImage = frontmatter.featuredImage
  ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
  : ""

  const SecondaryImage = frontmatter.secondaryImage
  ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
  : ""

  const UnderlayImage = frontmatter.underlayImage
  ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
  : null;
  


      const { showSocial } = useSiteMetadata()
      // const SkillsText = frontmatter.skillsText
      const coverText = frontmatter.coverletter.coverText

      const YouTube = frontmatter.youtube.youtuber



      function isRunningStandalone() {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(display-mode: standalone)').matches;
        }
        return false;
    }



    

  // Check if localStorage is available
  const isLocalStorageAvailable = typeof window !== "undefined" && window.localStorage;

  // Set the initial state directly from localStorage if available, otherwise set to true
  const storedValue = isLocalStorageAvailable ? localStorage.getItem("isSliderVisible") : null;
  const initialSliderVisible = storedValue ? JSON.parse(storedValue) : showDefault;

  const [isSliderVisible, setIsSliderVisible] = useState(initialSliderVisible);

  useEffect(() => {
    if (isLocalStorageAvailable) {
      // Update isSliderVisible when it changes in localStorage
      const handleStorageChange = () => {
        const storedValue = localStorage.getItem("isSliderVisible");
        try {
          setIsSliderVisible(JSON.parse(storedValue) ?? true);
        } catch (error) {
          setIsSliderVisible(true);
        }
      };

      // Add event listener for storage change
      window.addEventListener("storage", handleStorageChange);

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, [isLocalStorageAvailable]);






  const ContentinVideo = frontmatter.contentinvideo
  // const LiarLiar = frontmatter.liarliar
  
    /* eslint-disable-next-line no-unused-vars */
      // const CtaLink = frontmatter.cta.ctaLink

      // const title = frontmatter.title
      // const tagline = frontmatter.tagline
      // const description = frontmatter.description
  
      // const { iconimage } = useSiteMetadata()
      

   /* eslint-disable no-useless-escape */
const extractVideoId = (url) => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/[^\/\n\s]+\/(?:\S+\/)?|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};
/* eslint-enable no-useless-escape */
  


const playerRef = useRef(null);
    /* eslint-disable-next-line no-unused-vars */
// const [playingIndex, setPlayingIndex] = useState(null);

  // const handleVideoPlay = (index) => {
  //   setPlayingIndex(index);
  // };

  // const handleVideoPause = () => {
  //   setPlayingIndex(null);
  // };
  

  
  
  const Svg = frontmatter.svgImage;
  
  function AddSvg() {
    if (!Svg) {
      return null; // or you can return a default SVG or placeholder
    }
  
    const svgUrl = Svg.publicURL;
  
    return (
      <object
        className="animator"
        id=""
        data={svgUrl}
        type="image/svg+xml"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          overflow: '',
          border: '0px solid red',
          zIndex: '',
          aspectRatio: '16/9',
          width: '100dvw',
          background: 'transparent',
          objectFit: 'cover'
        }}
        alt="animated content"
        title="animated content"
      ></object>
    );
  }
  
  
  
  
  
  

  
    if (!YouTube) {
  
    }
    else{
      
      <Iframer />
    }
  
    function Iframer() {
      if (!YouTube) {
        return null; 
      }
    
      return (
        <div className="wrap-element effects" style={{ aspectRatio: '16/9', minHeight: '300px', width: '100dvw', maxHeight: '100dvh', maxWidth:'100dvw', overFlow:'hidden' }}>
          {YouTube ? (
    
  

  <ReactPlayer
                
                ref={playerRef}
                url={frontmatter.youtube.youtuber}
                  allow="web-share"
                  style={{ position: 'absolute', top:'0', margin: '0 auto 0 auto', zIndex: '1', aspectRatio:'16/9', }}
                  width="100dvw"
                  height="100%"
                  className='inline'
                  playsinline

            
                  // light={frontmatter.underlayImage || `https://i.ytimg.com/vi/${extractVideoId(frontmatter.youtube.youtuber)}/hqdefault.jpg`}
            

                  light={
                    frontmatter.underlayImage ? (
                      <GatsbyImage
                        image={frontmatter.underlayImage}
                        alt="Page Feature Image beegee"
                        className=""
                        placeholder="blurred" loading="eager"
                        style={{ position: 'absolute', top: '0', height: 'auto', width: '100dvw', maxHeight: '100dvh', objectFit: 'cover', overflow: 'hidden', border: '0', outline:'0' }}
                      />
                    ) : (
                      <img src={`https://i.ytimg.com/vi/${extractVideoId(frontmatter.youtube.youtuber)}/hqdefault.jpg`} width="100dvw" height="auto" alt="Video Preview" />
                    )
                  }
                  



                  
                  config={{
                    file: {
                      attributes: {
                        crossOrigin: "anonymous",
                      },
                    },
                    youtube: {
                      playerVars: { showinfo: 0, autoplay: 1, controls: 1, mute: 0, loop: 1 },
                    },
                  }}
                  playIcon={
                    <div style={{display:'flex', flexDirection:'column', placeContent:'', justifyContent:'', position:'absolute', zindex:'3', top:'', fontWeight:'bold', padding:'3% 0 0 0', width:'100%', maxWidth:'25vw', height:'300px', border:'0px solid', borderRadius:'var(--theme-ui-colors-borderRadius)', margin:'0 auto 0 auto', opacity:'.99', textShadow:'2px 2px 2px black', color:'#fff' }}>
                      <div className="spotlight font">
                        <div className="posticons" style={{ flexDirection: 'column', margin: '0 auto' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '2vw', color: 'fff', }}>
                            <ImPlay className="posticon" style={{ margin: '0 auto', width: '60%', height: '30px', fontSize: '' }} />
                          </div>
                          {dicPlayVideo}
                        </div>
                      </div>
                    </div>}
                    // onPlay={() => handleVideoPlay()}
                    // onPause={handleVideoPause}
                />
  
    ) : (
      ""
    
  )}
    
  
    
    
    <div className="" style={{maxHeight:'100dvh', width:'100dvw', height:'auto', overflow:'visible',position:'absolute', top:'0', zIndex:'',}}>
{UnderlayImage ? (
            <GatsbyImage
            image={UnderlayImage}
            alt={frontmatter.title + " - image"}
            className="print"
            placeholder="blurred" loading="eager"
              style={{height:'auto', width:'100dvw', maxHeight:'100dvh',  objectFit:'cover', overflow:'visible', border:'0px solid red !important'}}
          />
          ) : (
            ""
          )}
</div>
    
  
    
    {/*  SPECIAL CONTENT */}
    
    {ContentinVideo ? (
      <div id="contentvideo"
            className="blog-post-content effects" style={{ fontSize:'1.1rem', textAlign:'left', padding:'', margin:'0 auto', color:'inherit !important', border:'0px solid transparent', position:'absolute', bottom:'0', left:'0', top:'0', right:'0', zindex:'-1', maxHeight:'100vh', borderBottom:'0px solid', }}
            dangerouslySetInnerHTML={{ __html: html }}
          >
            
          </div>
     ) : (
      ""
    )}
    
    
            
    {Svg ? (
      <AddSvg />
         ) : (
           ""
           )}
            </div>
      )
    }
  
    
    // const YouTubeStart = frontmatter.youtube.youtubestart ? frontmatter.youtube.youtubestart : null;
    // const YouTubeEnd = frontmatter.youtube.youtubeend
    const YouTubeMute = frontmatter.youtube.youtubemute
    const YouTubeControls = frontmatter.youtube.youtubecontrols
    const YouTubeAutostart = frontmatter.youtube.youtubeautostart
    // const CustomControls = frontmatter.youtube.customcontrols
    // const Suggestion1 = frontmatter.youtube.youtubersuggestion1


    // let iframeFiltered;
    // if (Suggestion1) {
    //   iframeFiltered = [
    //     frontmatter.youtube.youtuber,
    //     frontmatter.youtube.youtubersuggestion1,
    //     frontmatter.youtube.youtubersuggestion2,
    //     frontmatter.youtube.youtubersuggestion3,
    //   ];
    // } else {
    //   iframeFiltered = frontmatter.youtube.youtuber;
    // }


const YoutubeLoop = frontmatter.youtube.youtubeloop
const ClickToPlay = frontmatter.youtube.clicktoplay
const AudioStart = frontmatter.youtube.audiostart
const AudioEnd = frontmatter.youtube.audioend
const AudioTitle = frontmatter.youtube.audiotitle
  

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
  
    // const Playing  = useState(true);
      /* eslint-disable-next-line no-unused-vars */
    const [state, setState] = useState({
    playing: YouTubeAutostart,
    controls: YouTubeControls,
    light: ClickToPlay,
    muted: YouTubeMute,
    loop: YoutubeLoop,
  });


  // const controlsRef = useRef(null);








  







  return (
    <Layout>
      <Helmet>
        <body id="body" className="homepage" />
      </Helmet>

      {/* <Seo
        title={frontmatter.title}
        description={frontmatter.description ? frontmatter.description : excerpt}
        image={frontmatter.featuredImage ? getSrc(frontmatter.featuredImage) : null}
      /> */}


<SeoWrapper location={location} />

<div className="post-container" style={{maxWidth:'100vw', overFlowY:'hidden', paddingTop: showNav ? '60px' : '',}}>

{showVideoPlayer ? (
<section id="VideoPlayer" name="VideoPlayer" className="print scroll-area" style={{  width:'100vw', height:'', margin:'0 auto 0 auto', position:'relative',alignContent:'center', maxWidth:'100vw', display:'flex', textAlign:'left', justifyContent:'start', verticalAlign:'center', backgroundColor:'var(--theme-ui-colors-headerColor)'}}>
<YouTubePlayer location={location} />
</section>
     ) : (
       ""
   )} 

{/* show feature */}


  <>
  {showFeature ? (   
<section id="feature" name="feature" className="print scroll-area" style={{  
  // backgroundColor:'var(--theme-ui-colors-headerColor)'
  height:'100%'
}}>
  <article style={{}}>

  <div className="" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'#999', position:'relative'}}  >


  {YouTube ? (
            <Iframer style={{height:'auto', width:'100dvw', maxHeight:'100dvh', position:'relative', zIndex:'1', top:'', left:'', right:'', border:'0px solid #888 !important', objectFit:'contain', margin:'0'}} />
       
          ) : (
            <>
            {UnderlayImage ? (
              <GatsbyImage
                image={UnderlayImage}
                alt={frontmatter.title + " - image"}
                className="mcboaty1"
                style={{height:'auto', width:'100%', maxHeight:'100dvh', overflow:'hidden', margin:'0 auto', position:'relative', left:'0', right:'0', bottom:'', top:'0', zIndex:'',
               objectFit:'cover', border:'0px solid red !important', background:'transparent',}}
              />
              
            ) : (
              
<>
{FrontImage ? (
<GatsbyImage
image={FrontImage}
alt={frontmatter.title + " - Featured image"}
className="featuredimage"
placeholder="blurred"
loading="eager"
style={{height:'auto', width:'100dvw', maxHeight:'100dvh', position:'relative', zIndex:'1', top:'0', left:'0', right:'0', border:'0px solid #888 !important', objectFit:'contain', margin:'0'}}
/>
        ) : (
""
        )}
</>

            )}
</>
          )}



{/* 
            <StaticImage src="../../static/assets/default-og-image.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain', margin:'0 auto'}} /> */}







      </div>
      
  </article>
</section>
) : (
  ""
)}
  </>

{/* end show feature */}


<section id="" order="" className="nameblock2" style={{margin:'0vh auto 0 auto', padding:'0 ',alignContent:'center', display:'flex', textAlign:'left', justifyContent:'center', verticalAlign:'center',
   color:'var(--theme-ui-colors-text)',
  // border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  // background:'#222',
  // backdropFilter:'blur(8px)',
  // border:'1px solid #333',
  // borderRadius:'10px',
  // textShadow:'0 2px 7px #000',
  maxWidth:'100vw' }}>
          {/* <h2 id="costs" className="letter" style={{fontSize:'140%', textAlign:'center'}}>Get Started</h2> */}

          
{/* <p style={{fontSize:'100%', textAlign:'center'}}>
  <u>NO</u> contracts required - Cancel any time
</p>  */}
    <Faqs />
  </section>



{/* show profile */}
  <>
{showProfile ? (
  <section className="scroll-area panel" id="profile" name="profile" style={{ display:'', height:'', minHeight:'', position:'relative', overflow:'hidden', margin:'0 auto 0 auto', padding:'3vh 0 60px 0', background:'var(--theme-ui-colors-background)', color:'var(--theme-ui-colors-text)', width:'100vw', borderRadius:'var(--theme-ui-colors-borderRadius)', }}>
  <article style={{ margin:'0 0 0 0'}}>


<div id="profiletop" className="flexbutt" style={{display:'', gap:'10px', justifyContent:'center', alignItems:"center", margin:'0 0',
  padding:'0 2% 0 2%', position:'relative', color: ''}}>




  <div className="nameblock flexcheek" style={{position:'', top:'0', marginTop: '', padding: '1rem 2rem 0 2rem', maxHeight: '', fontSize: 'clamp(1rem, 1.4vw, 3.2rem)',  borderRadius: 'var(--theme-ui-colors-borderRadius)' }}>


  <div className=" mob print" style={{ position:'sticky', top:'0', fontSize: 'clamp(1rem, 1.5vw, 3.2rem)', textAlign:'center' }}>
      <h1 className="title1" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', textWrap:'balance' }}>{frontmatter.tagline}</h1>

      <h2 className="tagline1" style={{ fontSize: 'clamp(1.6rem, 1.5vw, 1.8rem)', textWrap:'balance' }}>
        {frontmatter.profTitle}
      </h2>
      
      <div style={{ fontSize: 'clamp(1.2rem, 2vw, 2.8rem)', textAlign:'left' }} className="description" dangerouslySetInnerHTML={{ __html: html }} />
    </div>


  
  </div>




      <div className="flexcheek mob2 print" style={{position:'', top:'0', minWidth:'500px', overflow:'', marginBottom:'', paddingTop:'2vh', borderRadius:'var(--theme-ui-colors-borderRadius)',
      }}>
{/* {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Profile Image"}
              className="avatar-frame"
              style={{ maxWidth:'280px', margin:'0 auto', height:'', maxHeight:'280px', position:'relative', top:'', objectFit:'contain', backgroundSize:'contain', marginBottom:'0', border:'0'}}
            />
          ) : (
            ""
          )} */}


<ul className="tags">
<div className="" style={{position:'', top:'', marginTop: '', width:'100%', padding: '1vh 2vh', margin:'0 0', maxHeight: '', fontSize: 'clamp(1.1/3rem, 1.5vw, 2.2rem)', textAlign:'center', textShadow: '0 2px 3px #000', color:'#fff' }}>
    <h4 style={{textAlign:'center'}}>Serving All Of South Mississippi:</h4>
  </div>
<li className="tag">Pass Christian</li>
  <li className="tag">Biloxi</li>
  <li className="tag">Long Beach</li>
  <li className="tag">Gulfport</li>
  <li className="tag">Ocean Springs</li>
  <li className="tag">Bay St. Louis</li>
  <li className="tag">D'Iberville</li>
  <li className="tag">Orange Grove</li>
  <li className="tag">Saucier</li>
  <li className="tag">Gautier</li>
</ul>
{/* <div className="nameblock font" style={{margin:'0 auto 0 auto', padding:'0 0 0 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  paddingTop:'', 
  fontSize:'clamp(1rem, 1.4vw, 3.2rem)',
  background:'rgba(0,0,0,0.50)',
  backdropFilter:'blur(8px)',
  border:'0px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'var(--theme-ui-colors-borderRadius)',
  textShadow:'0 2px 0px #000',
  maxWidth:'70%'
}}>
  <br />
{frontmatter.profileName ? (
    <span style={{margin:'2vh auto', fontSize:'clamp(2rem, 3vw, 2.8rem)'}}>{frontmatter.profileName}</span>
  ) : (
    ""
  )}

  
  
  {frontmatter.addressText ? (
    frontmatter.addressText
  ) : (
    ""
  )}
  <br /><br />
  <div style={{fontSize:'clamp(1.2rem, 2vw, 2.8rem)'}}>
  {frontmatter.addressText2 ? (
    
    frontmatter.addressText2
  
  ) : (
    ""
  )}
  </div>
  <br />

  {frontmatter.cta.showCTA ? (
  <Link to={frontmatter.cta.ctaLink} state={{modal: true}} className="button print" style={{ display: 'flex', justifyContent: 'center', padding:'1vh .5vw', maxWidth:'250px', margin:'30px auto' }}>{frontmatter.cta.ctaText}</Link>
  ) : (
    ""
  )}




  {frontmatter.coverletter.showCover ? (
    <Link to={frontmatter.coverletter.coverLink} state={{modal: true}} className=" print" style={{color:'', fontSize:'', margin:'15px auto 10px auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'1vh 2rem'}}>{coverText}</Link>
  ) : (
    ""
  )}
  <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
  <Link state={{modal: true}} to="/get-started2" className="button print" style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'1.8vh 1.2vw', maxWidth:'250px', fontSize:'clamp(1.2rem, 2vw, 2.8rem)' }}>1 or 2 dogs</Link>
-OR-
    <Link state={{modal: true}} to="big-dawgs" className="button print" style={{ display: 'flex', justifyContent: 'center', padding:'1.8vh 1.2vw', maxWidth:'250px',fontSize:'130%' }}>3 or more</Link>
</div>

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
  


</div> */}


</div>
</div> 
</article>
</section>
  ) : (
    ""
)}
</>

{/* end show profile */}





<section id="SecondaryInfo4" order="" className="nameblock" style={{margin:'0 auto 0 auto', padding:'0 4% 10vh 0',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
  color:'var(--theme-ui-colors-text)',
  border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  background:'var(--theme-ui-colors-cardBg)',
  backdropFilter:'blur(8px)',
  // border:'1px solid #333',
  borderRadius:'10px',
  // textShadow:'0 2px 0px #000',
  maxWidth:'95%' ,
  // border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px'
  }}>



  <div className="nameblock flexcheek" style={{position:'', top:'', marginTop: '', width:'100%', padding: '1vh 2vh', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1.3rem, 3.5vw, 3.2rem)', textAlign:'center', textShadow: '0 2px 3px #000', background:'rgba(0,0,0,0.50)', backdropFilter:'blur(12px)', borderRadius: '10px', color:'#fff' }}>
    <h2>How It Works</h2>
  </div>




<div className="flexbutt" style={{gap:'10vw'}}>
<div className="flexcheek" style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Place Order:</h2> <p>Using the Dog Poopers website, simply select the service plan you desire. Weekly plans are paid a month in advance.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Weekly Service:</h2> <p>We do pick ups on Mondays and Thursdays. Your service will begin on one of those days and will continue as you wish.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Extras:</h2> <p>If you've chosen our Deluxe packages, our Dog Poopers will sanitize and deoderize wherever your dog poops.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Rest Assured:</h2> <p>Dog Poopers will monitor your dog's feces and let you know if there was blood or worms present when they picked up.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Enjoy your yard again:</h2> <p>It's about time for you to start enjoying your back yard again!</p>
</div>

<div className="flexcheek" style={{display:'flex', gap:'2vw', flexDirection:'column', justifyContent:'space-between', fontSize: 'clamp(1rem, 1vw, 2.2rem)', textAlign:'center', padding:'1rem 0'}}> 

<StaticImage src="../../static/assets/plans.png" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
You're in control - start and stop your service as you need.
<StaticImage src="../../static/assets/dog-poop1.jpg" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
Dog Poopers will scan your yard for hidden "bundles of joy", removing all the waste and leaving both you and your pet happy!
<StaticImage src="../../static/assets/happy-yard.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
Happy pets that will thank you for keeping their yard clean! You get to have company over again and not be embarrassed. 
{/* <StaticImage src="../../static/assets/action2.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
You control your timeline (and everything else), not some billionaire appeasing stockholders or their bottomline.  */}
</div>
</div>


</section>


<section id="" order="" className="nameblock" style={{margin:'0 auto 0 auto', padding:'0 4% 10vh 0',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
  color:'var(--theme-ui-colors-text)',
  border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',

  // border:'1px solid #333',
  borderRadius:'10px',
  // textShadow:'0 2px 0px #000',
  maxWidth:'95%' ,
  // border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px'
  }}>
<h2 id="costs" className="letter" style={{fontSize:'clamp(1.4rem,2.9vw,3rem)', textAlign:'center'}}>Frequently Asked Questions</h2>

          

<div className="faqblock" style={{width:'80%', maxWidth:'800px', display:'grid', placeContent:'center', margin:'0 auto' }}>
<div>
  <input type="checkbox" id="question1" name="q"  className="questions" />
  <div className="plus">+</div>
  <label for="question1" className="question">
    This is the question that will be asked?
  </label>
  <div className="answers">
This is the answer of the question.. keep it short.</div>
</div>

<div>
  <input type="checkbox" id="question2" name="q" className="questions" />
  <div className="plus">+</div>
  <label for="question2" className="question">
    Short?
  </label>
  <div className="answers">
    short!
  </div>
</div>
  
<div>
  <input type="checkbox" id="question3" name="q" className="questions" />
  <div className="plus">+</div>
  <label for="question3" class="question">
    Keep answers short. But in case of...If the question is long, the text wraps.  
  </label>
  <div className="answers">
    This is the answer! This is the answer! This is the answer! This is the answer! This is the answer! This is the answer! This is the answer! This is the answer! 
  </div>
</div>
</div>
</section>




{showHomePosts ? (
    <HomePosts isSliderVisible={isSliderVisible} className="scroll-area" id="posttop" name="posttop" style={{minHeight:'100dvh', width:'100vw'}} />
    ) : (
      ""
  )}







    
</div>

    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
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
    markdownRemark(id: {eq: $id}) {
      ...isDraft
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        tags
        description
        profTitle
        profileName
        tagline
        addressText
        addressText2
        spotlight
        draft
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
        mediawarnings {
          viewerwarning
          marate
          marating1
          marating2
          marating3
          marating4
          maratingtx1
          maratingtx2
          maratingtx3
          maratingtx4
        }
        comments
        shareable
        bumpertext
        nftdrop
        svgzindex
        scrollable
        featuredImage {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        svgImage {
          publicURL
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
}
`;

export default HomePage;
