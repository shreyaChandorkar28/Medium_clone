import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import NavLand from '../components/NavLand';
import medium from '../assets/medium.jpg';
import Typewriter from "typewriter-effect";
import stat from '../assets/stat.png';
import Footer from '../components/Footer/Footer.js';
const LandingPage = () => {
  return (
    <div>
      <div><NavLand /></div>
      <div className='bd'>
        <article className='arti' style={{ backgroundImage: `url(${medium})` }}>
          <div className='artihe'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Fuel Your Imagination")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Unleash Your Creativity")
                  .start();
              }}
            />
          </div>
          <div className='artihe2'>
            <p>Discover stories, thinking, and<br /> expertise from writers on any topic.</p>
            <Link to='/register'><button className='medbtn' style={{cursor:'pointer'}}>Start Reading</button></Link>
          </div>
        </article>
        <div className='trending'>
          <div className='trend1'>
            <img src={stat} className='trend'></img>&nbsp;&nbsp;&nbsp;&nbsp;
            <p>Trending on Medium</p>
          </div>
          <div className='trend2main'>
          <div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>01</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Linda Caroll in Middle-Pause</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>No One Really Tells You The Hardest Part Of Getting Older</p>
            <br/>
            <p style={{color:'#808c97'}}>May 29  &nbsp;&nbsp;&nbsp; 7 min read</p>
          </div><div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>02</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Markham Heid in THE NUANCE</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>Why Midlife Is Going to Be Especially Hard On Millennials</p>
            <br/>
            <p style={{color:'#808c97'}}>May 30  &nbsp;&nbsp;&nbsp; 5 min read</p>
          </div><div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>03</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Netflix Technology Blog in Netflix TechBlog</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>Ensuring the Successful Launch of Ads on Netflix</p>
            <br/>
            <p style={{color:'#808c97'}}>Jun 2  &nbsp;&nbsp;&nbsp; 5 min read</p>
          </div><br/>
          <div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>04</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Steve Yegge</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>A good day with Jeff</p>
            <br/>
            <p style={{color:'#808c97'}}>May 28  &nbsp;&nbsp;&nbsp; 6 min read</p>
          </div><div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>05</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Nick Wignall</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>4 Secrets of Emotionally Stable People</p>
            <br/>
            <p style={{color:'#808c97'}}>May 27  &nbsp;&nbsp;&nbsp; 8 min read</p>
          </div><div className='trend2'>
            <span style={{ color: '#e7e7e7', fontSize:'25px' }}>06</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"15px"}}>Allen Helton in Better Programming</span>
            <br/><br/>
            <p style={{fontWeight:'bold', fontSize:'18px'}}>ChatGPT Changed How I Write Software</p>
            <br/>
            <p style={{color:'#808c97'}}>Jun 1  &nbsp;&nbsp;&nbsp; 8 min read</p>
          </div>
          </div>
        </div>
        <br/>
        <hr/>
        <div className='mainbody'>
        <div className='main2'>
          <div className='items'>
            <div className='item'>
              <span><img src='https://t4.ftcdn.net/jpg/01/17/00/87/360_F_117008730_0Dg5yniuxPQLz3shrJvLIeBsPfPRBSE1.jpg'></img></span>
              &nbsp;&nbsp;&nbsp;
              <span>Lee Fischman in UX Collective</span>
              <br/><br/>
              <p style={{fontSize:"20px", fontWeight:"bold", cursor:'pointer'}}>On the nature of elegance</p>
              <br/>
              <p>Elegance is a fundamental concept that is deeply embedded in our lives and work. Is there a universal definition of...</p>
              <br/>
              <p style={{color:'#808c97'}}>May 14 &nbsp;&nbsp;&nbsp; 12 min Reading &nbsp;&nbsp;&nbsp; <button className='med2btn'>UX Research</button></p>
              {/* <span className='main3'><img src='https://miro.medium.com/v2/resize:fill:300:201/0*HPIL9Bp4Mm9JX358.jpeg'></img></span> */}
            </div>
            <div className='main3'>
              <img src='https://miro.medium.com/v2/resize:fill:300:201/0*HPIL9Bp4Mm9JX358.jpeg'></img>
            </div>
          </div>
          {/* next */}
          <div className='items'>
            <div className='item'>
              <span><img src='https://miro.medium.com/v2/resize:fill:40:40/1*abRenZmSXa-oa2rm9tCJwg.png'></img></span>
              &nbsp;&nbsp;&nbsp;
              <span>Hal Wuertz in Age of Awareness</span>
              <br/><br/>
              <p style={{fontSize:"20px", fontWeight:"bold", cursor:'pointer'}}>It’s Time to Re-Design How We Think</p>
              <br/>
              <p>Over the last 50+ years, a new way of thinking has been growing in popularity. Centered around essential human...</p>
              <br/>
              <p style={{color:'#808c97'}}>Feb 22,2021 &nbsp;&nbsp;&nbsp; 9 min Reading &nbsp;&nbsp;&nbsp; <button className='med2btn'>Design Thinking</button></p>
              {/* <span className='main3'><img src='https://miro.medium.com/v2/resize:fill:300:201/0*HPIL9Bp4Mm9JX358.jpeg'></img></span> */}
            </div>
            <div className='main3'>
              <img src='https://miro.medium.com/v2/resize:fill:300:201/1*9rRaimAUp5A2ABGnoR07AA.png'></img>
            </div>
          </div>
          {/* next */}
          <div className='items'>
            <div className='item'>
              <span><img src='https://miro.medium.com/v2/resize:fill:40:40/1*CJe3891yB1A1mzMdqemkdg.jpeg'></img></span>
              &nbsp;&nbsp;&nbsp;
              <span>Jacob Marks, Ph.D. in Towards Data Science</span>
              <br/><br/>
              <p style={{fontSize:"20px", fontWeight:"bold", cursor:'pointer'}}>How I Turned My Company’s Docs into a Searchable Database with OpenAI</p>
              <br/>
              <p>And how you can do the same with your docs</p>
              <br/>
              <p style={{color:'#808c97'}}>Apr 25 &nbsp;&nbsp;&nbsp; 15 min Reading &nbsp;&nbsp;&nbsp; <button className='med2btn'>OpenAI</button></p>
              {/* <span className='main3'><img src='https://miro.medium.com/v2/resize:fill:300:201/0*HPIL9Bp4Mm9JX358.jpeg'></img></span> */}
            </div>
            <div className='main3'>
              <img src='https://miro.medium.com/v2/resize:fill:300:201/1*rsp22rKwFDjiwwCcUly56Q.jpeg'></img>
            </div>
          </div>
        </div>
        <div className='main21'>
          <p>Discover more of what matters to you</p>
          <div className='btnmain21'>
            <button className='btnsec'>Programming</button>
            <button className='btnsec'>Data Science</button>
            <button className='btnsec'>Technology</button>
            <button className='btnsec'>Self Improvement</button>
            <button className='btnsec'>Writing</button>
            <button className='btnsec'>Relationships</button>
            <button className='btnsec'>Machine Learning</button>
            <button className='btnsec'>Productivity</button>
            <button className='btnsec'>Politics</button>
            <button className='btnsec'>Life</button>
            <button className='btnsec'>Work</button>
            <button className='btnsec'>Health</button>
            <button className='btnsec'>Marketing</button>
            <button className='btnsec'>Leadership</button>
            <button className='btnsec'>Art</button>
            <button className='btnsec'>Economics</button>
            <button className='btnsec'>Religion</button>
            <button className='btnsec'>Travel</button>
          </div>
          <br/><br/>
          <p style={{color:'green', justifyContent:'left', cursor:'pointer'}}>See more topics</p>
          <br/><br/><br/>
          <hr style={{color:'grey', marginLeft:'15px', marginRight:'15px'}}/>
          <br/><br/><br/>
          <div className='last'>
            <span>Help</span> &nbsp;&nbsp;&nbsp;
            <span>Writers</span> &nbsp;&nbsp;&nbsp;
            <span>Blog</span> &nbsp;&nbsp;&nbsp;
            <span>Careers</span> &nbsp;&nbsp;&nbsp;
            <span>Privacy</span> &nbsp;&nbsp;&nbsp;
            <span>Terms</span> &nbsp;&nbsp;&nbsp;
            <span>About</span> &nbsp;&nbsp;&nbsp;
            <span>Teams</span> &nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default LandingPage;
