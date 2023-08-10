import { motion } from "framer-motion";
import React from "react";
import "./Contact.scss";
import { Helmet } from "react-helmet";

function Contact() {
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
        <title>marc lópez portfolio | contact</title>
      </Helmet>

      <div className="contact-parent">
        <a className="contact-text">Contact</a>
      </div>
    </motion.div>
  );
}

export default Contact;
