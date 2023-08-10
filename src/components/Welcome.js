import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import ContactBox from "../subcomponents/ContactBox";
import "./Welcome.scss";

function Welcome() {
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
        <title>marc lópez portfolio</title>
      </Helmet>
      <div className="welcome-container">
        <div className="welcome-parent">
          <div className="welcome-child">
            <a className="welcome-title">creative digital artist</a>
            <p className="welcome-text">
              marc lópez is a digital artist and developer from Barcelona, he's
              keen on creating cool and simple stuff
            </p>
          </div>
          <a href="#keep-scrolling" className="welcome-link">
            &#8595;
          </a>
        </div>
        <div className="welcome-content" id="keep-scrolling">
          <div className="first-content">
            <div className="left-content">
              <a className="welcome-title2">mutlimedia profile</a>
              <p className="welcome-text">
                i consider there's no need to just focus on a particular field
                of knowledge for life, what's important is to keep learning and
                discover about new things everyday.<br></br>
                <br></br>That's why i consider an ambitious profile.
              </p>
            </div>
            <div className="right-content">
              <img
                src={require("./imgs/home/pixels.gif")}
                alt="generative-pixels-loop"
                className="pixels"
              ></img>
              <p className="right-text">
                my passion is to combine<br></br>
                <b>developing</b> & <b>designing</b>
              </p>
            </div>
          </div>
        </div>
        <div className="welcome-content-final">
          <a className="welcome-title">keep browsing!</a>
          <a className="welcome-text">
            you can find many other things all around this site. Look out for
            easter eggs and special surprises.
          </a>
        </div>
        <ContactBox />
      </div>
    </motion.div>
  );
}

export default Welcome;
