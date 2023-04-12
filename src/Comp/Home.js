// import React from 'react';
import './Home.css'
import Marquee from "react-fast-marquee";
import ReactPlayer from 'react-player';
import { delay, motion } from "framer-motion";
import anime from "animejs/lib/anime.es.js"
import ReactModal from 'react-modal';

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { Autoplay, EffectCards } from "swiper";

import logo from './assets/logo.png';
import camel from './assets/camel.mp4';
import slider1 from './assets/slider-1.png';
import slider2 from './assets/slider-2.png';
import slider3 from './assets/slider-3.png';
import main5bg from './assets/main5-bg.png';
import team1 from './assets/team1.jpg';
import team2 from './assets/team2.jpg';
import team3 from './assets/team3.jpg';
import roadmap from './assets/roadmap.png';
import camelgif1 from './assets/camelgif1.png';
import camelgif2 from './assets/camelgif2.gif';
import camelgif2pic from './assets/camelgif2z.gif';
import camelgif3 from './assets/camelgif3.gif';
import runninghorse from './assets/running-horse.gif';

import { SiTwitter } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiCamel, GiMute } from 'react-icons/gi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { GiOverInfinity } from 'react-icons/gi';
import { SiCodesandbox } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import Particles from "react-particles-js";

function Home(){
     const [isOpen, setIsOpen] = useState(false);

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 50){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <>

        <div class="home-main">
            
            <div className='home-shimer-bg-img'></div>
            {/* <div style={styles.root}><Particles/></div> */}
            <div class="home-nav" className={ colorChange ? 'home-nav-change' : 'home-nav'}>
            <div class="home-nav-container">
                <div class="home-nav-div1">
                    <div class="home-nav-logo">
                        <img src={logo}></img>
                    </div>
                    <span>Meta<br/>Horse</span>
                </div>
                <div class="home-nav-div2">
                    <a href="#about" style={{textDecoration:'none', color:'white'}}><span>About</span></a>
                    <a href="#lab" style={{textDecoration:'none', color:'white'}}><span>Laboratory</span></a>
                    <a href="#tok" style={{textDecoration:'none', color:'white'}}><span>Tokenomics</span></a>
                    <a href="#road" style={{textDecoration:'none', color:'white'}}><span>Roadmap</span></a>
                    <a href="#team" style={{textDecoration:'none', color:'white'}}><span>Team</span></a>
                </div>
                <div class='home-nav-div3'>
                    <span class="home-nav-div3-txt">Join at</span>
                    <span class="home-nav-div3-icon"><SiTwitter style={{color:'white'}}/></span>
                    <span class="home-nav-div3-icon"><FaDiscord style={{color:'white'}}/></span>
                    <span class="home-nav-div3-icon"><FaInstagram style={{color:'white'}}/></span>
                
                </div>
            </div>
            </div>
            <div class="marquee-div">
                    <Marquee class='marquee' speed={1} gradient={true} gradientColor={[0,0,0,0.9]} gradientBorder={'1rem'}>
                    <div class="home-main2-marquee">
                        <span>International Community</span>
                        <span>Competitive</span>
                        <span>Various Race Tracks</span>
                        <span>Rent Horse</span>
                        <span>Own Hippodromes</span>
                        <span>20,000 NFT Horse's</span>
                        <span><GiCamel/></span>
                    </div>
                    </Marquee>
                </div>
            
            
            <div class="home-main-conatiner">
                <div class="home-main2">
                    <div class="home-main2-div1">
                        <span class="home-main2-txt1">Experience first-ever Metaverse Horse Racing</span>
                        <span class="home-main2-txt2">Meta Horse Racing Club brings a well-know Middle East sport - horse racing - to Metaverse, connecting cultural heritage of the Middle East and blockchain technology.</span>
                        <button onClick={() => setIsOpen(true)}>Register</button>
                        <button>Whitepaper</button>
                    </div>
                    <div class="home-main2-div2">
                    <div class="home-main2-div2-img">
                        <div className='home-main2-shimer-bg-img'></div>
            

                        <img src={camelgif3}></img>
                    </div>
                    </div>
                </div>
                <div class="home-main3">
                <div class="home-main3-div1">
                    <div class="home-main3-div2">
                    <ReactPlayer 
                        className='react-player fixed-bottom'
                        url= {camel}
                        width='100%'
                        height='100%'
                        controls = {true}
                        playing={true} 
                        loop={true} 
                        muted={true}
                    />
                    </div>
                    </div>
                </div>
                
                <div id="about" class="home-main4">
                    <div class="home-main4a">
                        <div class="home-main4a-div1">
                            <p>What is Horse Racing?</p>
                            <span>Horse Racing is a famous Middle East sport, where only millionaires can take part. We are opening this world of luxury and competition to everyone.</span>
                            <button>White Paper</button>
                        </div>
                        <div class="home-main4a-div2">
                            <div class="home-main4a-div2-img"><img src={camelgif2}></img></div>
                        </div>
                    </div>
                    <div class="home-main4a">
                        <div class="home-main4a-div2">
                            <div class="home-main4a-div2-img2"><img src={camelgif2pic}></img></div>
                        </div>
                        <div class="home-main4a-div1">
                            <p>How does it work?</p>
                            <span>Collect, breed, rent Horses. Join guilds to compete together. Buy Hippodromes to host races. Build your own Metaverse Horse empire!</span>
                            <button onClick={() => setIsOpen(true)}>Get Started</button>
                        </div>
                    </div>
                </div> 
                
                <div id="lab" class="home-main5">
                    <div class="home-main5-heading">
                        <p>Your Horse Laboratory</p>
                        <span>Buy, rent, upgrade Horses. Restore energy and more</span>
                    </div>
                    <div class='home-main5-div1'>
                        <div class="home-main5-div1-img">
                            <img src={main5bg}></img>
                        </div>
                        <div class="home-main5-div2">
                        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]} autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
                                    <div class="home-main5-div2-slider">
                                    <div class="home-main5-div2-slider-div1">
                                   

                                        <span class="home-main5-div2-slider-div1-txt1"><GiOverInfinity style={{paddingRight:'0.5rem'}}/>X Matic</span>
                                        <span class="home-main5-div2-slider-div1-txt2">#/10,000<BsFillBookmarkFill style={{paddingLeft:'0.5rem',fontSize:'12px'}}/><br/>Horse</span>
                                    </div>
                                    <div class="home-main5-div2-slider-div2">
                                        <img src={slider1}></img>
                                    </div>
                                    </div>
                                </SwiperSlide >
                                <SwiperSlide>
                                    <div class="home-main5-div2-slider">
                                    <div class="home-main5-div2-slider-div1">
                                  

                                        <span class="home-main5-div2-slider-div1-txt1"><GiOverInfinity style={{paddingRight:'0.5rem'}}/>X Matic</span>
                                        <span class="home-main5-div2-slider-div1-txt2">#/10,000<BsFillBookmarkFill style={{paddingLeft:'0.5rem',fontSize:'12px'}}/><br/>Boosters</span>
                                    </div>
                                    <div class="home-main5-div2-slider-div2">
                                        <img src={slider2}></img>
                                    </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="home-main5-div2-slider">
                                    <div class="home-main5-div2-slider-div1">
                                   

                                        <span class="home-main5-div2-slider-div1-txt1"><GiOverInfinity style={{paddingRight:'0.5rem'}}/>X Matic</span>
                                        <span class="home-main5-div2-slider-div1-txt2">#/4,500<BsFillBookmarkFill style={{paddingLeft:'0.5rem',fontSize:'12px'}}/><br/>Horse</span>
                                    </div>
                                    <div class="home-main5-div2-slider-div2">
                                        <img src={slider3}></img>
                                    </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="home-main5-div2-slider">
                                    <div class="home-main5-div2-slider-div1">

                                        <span class="home-main5-div2-slider-div1-txt1"><GiOverInfinity style={{paddingRight:'0.5rem'}}/>X Matic</span>
                                        <span class="home-main5-div2-slider-div1-txt2">#/10,000<BsFillBookmarkFill style={{paddingLeft:'0.5rem',fontSize:'12px'}}/><br/>Horse</span>
                                    </div>
                                    <div class="home-main5-div2-slider-div2">
                                        <img src={slider2}></img>
                                    </div>
                                    </div>
                                </SwiperSlide>
    
      </Swiper>
    
                    
                        
                        </div>
                    </div>
                </div>
               
                <div id="road" class="home-main7">
                    <div class="home-main5-heading home-main5-heading-resp">
                        <p>Roadmap</p>
                        <span>Join us on an exciting voyage to the East-Verse<br/>2023-2024</span>
                    </div>
                    <div class="home-main7-div-content">
                        <div class="home-main7-img">
                            <img src={roadmap}></img>
                        </div>
                        <div class="home-main7-img-logo"><img src={runninghorse}></img></div>
                        <div class="home-main7-divs">
                            <div class="home-main7-div1">
                                <div class="home-main7-div1a">
                                    <p>Q1 2023</p>
                                    <div class="home-main7-div1a-1"><span><SiCodesandbox style={{paddingRight:'0.5rem'}}/>Website</span></div>
                                    <div class="home-main7-div1a-1"><span><SiCodesandbox style={{paddingRight:'0.5rem'}}/>Vip Round</span></div>
                                    <div class="home-main7-div1a-1"><span><SiCodesandbox style={{paddingRight:'0.5rem'}}/>Start of development</span></div>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                    <div class="home-main7-divs2">
                        <div class="home-main7-div1">
                                <div class="home-main7-div1a">
                                    <p>Q2 2023</p>
                                    <div class="home-main7-div1a-1"><span><SiCodesandbox style={{paddingRight:'0.5rem'}}/>MvP Release</span></div>
                                </div>
                            </div>
                            <div class="home-main7-div1">
                                <div class="home-main7-div1a">
                                    <p>Q3-Q4 2023</p>
                                    <div class="home-main7-div1a-1"><span><SiCodesandbox style={{paddingRight:'0.5rem'}}/>Private Round</span></div>
                                    <div class="home-main7-div1a-1"><span><SiCodesandbox style={{paddingRight:'0.5rem'}}/>Public Beta Release</span></div>
                                    <div class="home-main7-div1a-1"><span><SiCodesandbox style={{paddingRight:'0.5rem'}}/>Mainnet Launch</span></div>
                                </div>
                            </div>
                            
                        </div>
                </div>

                <div id="tok" class="home-main6">
                    <div class="home-main5-heading">
                        <p>Game Economics</p>
                        <span><button>White Paper</button></span>
                    </div>
                    <div class="home-main6-div1">
                        <div class="home-main6-div1a">
            <div class="home-main6-div1a-table">
            <table>
                <tr class="table-row1">
                    <th>
                        <span class="home-nav-logo">
                        <img src={logo}></img>
                        </span>
                    </th>
                    <th>Horse Racing Token</th>
                    <th>Horse Breed Token</th>
                </tr>
                <tr class="table-row2">
                    <td class="table-row2-td1-txt">Blockchain</td>
                    <td>Arbitrium</td>
                    <td>Arbitrium</td>
                </tr>
                <tr class="table-row2 color-change-row">
                    <td class="table-row2-td1-txt">Usage</td>
                    <td>
                        <p>Rewarding players in competitions</p>
                        <p>Replenishing horse energy</p>
                        <p>Upgrading your assets</p>
                        <p>Paying for advertising</p>
                    </td>
                    <td>Arbitrium</td>
                </tr>
                <tr class="table-row2">
                    <td class="table-row2-td1-txt">Blockchain</td>
                    <td>Arbitrium</td>
                    <td>Arbitrium</td>
                </tr>
            </table>

        </div>
                        </div>
                    </div>
                </div>
            

                <div id="team" class="home-main8">
                <div class="home-main5-heading home-main5-heading-resp">
                        <p>Team</p>
                    </div>
                    <div class="home-main8-div1">
                        <div class="home-main8-div1a">
                            <div class="home-main8-div1a-img">
                                <img src={team1}></img>
                            </div>
                            <div class="home-main8-div1a-2">
                                <span>Mohit</span>
                                <span class="home-main8-div1a-2-txt2">CEO</span>
                                {/* <br/> */}
                                {/* <span><SiLinkedin style={{paddingRight:'0.5rem'}}/>🤝🚀🙌</span> */}
                            </div>
                        </div>
                        <div class="home-main8-div1a">
                            <div class="home-main8-div1a-img">
                                <img src={team2}></img>
                            </div>
                            <div class="home-main8-div1a-2">
                                <span>Sumit Kumar</span>
                                <span class="home-main8-div1a-2-txt2">CTO</span>
                                {/* <br/> */}
                                {/* <span><SiLinkedin style={{paddingRight:'0.5rem'}}/>💻👓👾</span> */}
                            </div>
                        </div>
                        <div class="home-main8-div1a">
                            <div class="home-main8-div1a-img">
                                <img src={team3}></img>
                            </div>
                            <div class="home-main8-div1a-2">
                            <span>Mohit</span>
                            <span class="home-main8-div1a-2-txt2">CEO</span>
                            {/* <br/> */}
                            {/* <span><SiLinkedin style={{paddingRight:'0.5rem'}}/>🤝🚀🙌</span> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="home-main9">
                <div class="home-main5-heading home-main5-heading-resp">
                        <p>Stay Tuned</p>
                        <span>Provide your contact information to secure a spot as a very early  racer of the Meta Horse Racing Club </span>
                    </div>
                    <div class="home-main9-div1">
                        <div class='home-main9-div1a'>
                            <div class="home-main9-div1a-input">
                                <input type="text" placeholder='email@metahorse.com'></input>
                            </div>
                            <div class="home-main9-div1a-btn">
                                <button>Sign Up</button>
                            </div>
                        </div>
                        <span class="home-main9-div1a-txt">2023 © MetaHorse</span>
                    </div>
                </div>
                {/* <div class="home-main10">
                    <div className='home-main10-shimer-bg-img'></div>
                    <div class="home-main10-img">
                        <img src={camelgif3}></img>
                    </div>
                </div> */}
            </div>
        </div>



        <ReactModal id="home-modal"
                            style={{
                                
                                 
                                overlay: {
                                position: 'fixed',
                                zIndex: 1020,
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                background: 'rgba(7, 7, 7, 0.9)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                
                                
                                
                                },
                                content: {
                                background: 'rgba(0, 0, 0)',
                                width: 'auto',
                                maxWidth: 'calc(100vw - 2rem)',
                                maxHeight: 'calc(100vh - 2rem)',
                                overflowY: 'auto',
                                position: 'relative',
                                border:'grey solid 1px',
                                borderRadius: '1rem',
                                },
                                
                                
                            }}

                            isOpen={isOpen}
                            contentLabel="Example Modal"
                            onRequestClose={() => setIsOpen(false)}
                            >

<div class="home-pup-main">
<div className='home-pup-shimer-bg-img'></div>

    <div class="home-pup-main-container">
    <div class="home-pup-div1">
    <span class="home-pup-div1-txt1">Sign up</span>
    <span class="home-pup-div1-txt2">Provide your contact information to secure a spot as a very early  racer of the Meta Horse Racing Club  </span>
    </div>
    <div class="home-pup-div2">
        <input type="text" placeholder='email@meta.com'></input>
    </div>
    <div class="home-pup-div3">
        <button>Sign Up</button>
    </div>
    </div>
</div>

                            
                            </ReactModal>
        </>
    )
};
export default Home