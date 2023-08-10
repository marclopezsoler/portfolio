import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import "./About.scss";

function About() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet>
        <title>marc lópez portfolio | about</title>
      </Helmet>

      <div class="about-parent">
        <div className="about-child">
          <div className="about-first-content">
            <div className="about-first-left-content">
              <a className="about-title">HI, I'M MARC LÓPEZ,</a>
              <p className="about-text">
                a multimedia profile with wide knowledge on website developing and image postprocessing
              </p>
              <a href="#keep-scrolling" className="welcome-link">
                &#8595;
              </a>
            </div>
            <div class="about-first-right-content">
              <img src={require("./imgs/about/profile.png")} />
            </div>
          </div>
          <div className="first-content" id="keep-scrolling">
            <img src={require('./imgs/about/profile-bg.JPG')} />
            <div className="about-text-scroll">
              <p>living in the area of Barcelona, has given me opportunity to be surrounded and close to major landmarks and artistic and cultural exhibitions. During my univeristy period, I assisted to talks about tech, AI, generative art and much more. I consider my professional career started when I stopped just looking at these people, but I started to try to do what they were doing.</p>
            </div>
          </div>
          <div class="second-content">
            <a className="second-title">highlighted experience</a>
            <div className="past-events">
              <div className="events-left"><a>multimedia degree</a><p>CITM UPC</p><p>2019 to 2023</p></div>
              <div className="events-right"><p>my professional career began when I entered univeristy. On the multimedia degree I got wide experience in various fields of knowledge, but specially on website developing and graphic designing.</p></div>
            </div>
            <div className="past-events">
              <div className="events-left"><a>the sideline</a><p>social media content designer</p><p>2021</p></div>
              <div className="events-right"><p>the sideline was an instagram account about premier league, founded by me and some friends. I was in charge of designing all the banners and infographics, as well as managing the profile stats.<br></br><br></br>The project came to an end due to lack of time.</p></div>
            </div>
            <div className="past-events">
              <div className="events-left"><a>dfusió</a><p>art and multimedia department</p><p>2022 - now</p></div>
              <div className="events-right"><p>dfusió is my first professional work. Here I work with a small team, in which I have several roles, specially as a content manager, social media manager and graphic design for some projects.<br></br><br></br>I also highlight gaining experience on treating with clients through meetings and understanding their needs for their project.</p></div>
            </div>
            <div className="past-events">
              <div className="events-left"><a>frontend developer</a><p>freelancer</p><p>2022 - now</p></div>
              <div className="events-right"><p>my first contact with website programming was in 2020 at univeristy. I developed some minor websites using php.<br></br><br></br>By the end of 2022 I developed my first major project with react. That engaged me to keep focusing on website deveolpment, and developing projects such as this website. On the works page you can check some of the projects I did by myself just for gaining knowledge and experience.</p></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
