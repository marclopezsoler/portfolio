import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import "./WorkDetail.scss";
import { Helmet } from "react-helmet";
import ContactBox from "../subcomponents/ContactBox";

const WorkDetail = () => {
  const location = useLocation();
  const {
    link,
    title,
    subtitle,
    url1,
    url2,
    url3,
    url4,
    url5,
    url6,
    url7,
    url8,
    url9,
    url10,
    date,
    firstText,
    subtitle2,
    secondText,
    subtitle3,
    subtitle4,
    thirdText,
    lastText,
    type,
    roles,
    client,
  } = location.state;
  console.log(location.state);

  // if(client == "none"){
  //   document.querySelector(".client").style.display = 'none';
  //   console.log(client);
  // }

  // var anchors = document.querySelectorAll(".arrow-link");
  // [].forEach.call(anchors, function (a) {
  //   a.addEventListener("click", function (e) {
  //     e.stopPropagation();
  //   });
  // });

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });

  return (
    <motion.div
      className="container text-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet>
        <title>marc lópez portfolio | {title}</title>
      </Helmet>

      <div className="work-detail-parent">
        <div className="work-detail-header">
          <img src={url1} alt={title} className="work-detail-img" />
          <div className="work-detail-header-text">
            <h2 className="work-detail-title">{title}</h2>
            <p className="work-detail-subtitle">{subtitle}</p>
          </div>
          {/* <a href="#keep-reading" className="arrow-link">
            &#8595;
          </a> */}
        </div>
        <div className="work-detail-type" id="keep-reading">
          <p>{type}</p>
        </div>
        <div className="work-detail-content">
          <div className="description">
            <p>{firstText}</p>
          </div>
          <div>
            <div className="roles">
              <a>roles</a>
              <p>{roles}</p>
            </div>
            {client != "none" ? (
              <div className="client" style={{ display: "block" }}>
                <a>client</a>
                <p id="client-name">{client}</p>
              </div>
            ) : (
              <div className="client" style={{ display: "none" }}></div>
            )}
            <div className="client">
              <a>date</a>
              <p id="client-name">{date}</p>
            </div>
          </div>
        </div>
        <div className="work-detail-images">
          <div className="work-detail-first-description">
            {url2 != "none" ? (
              <img src={url2} alt={title} className="images-cards borde" />
            ) : (
              <img src={url2} style={{ display: "none" }} />
            )}
            <div className="subtitle2-parent">
              <a className="subtitle2">{subtitle2}</a>
              <p>{secondText}</p>
            </div>
          </div>
          <div className="images-grid">
            <div className="images borde">
              {url3 != "none" ? (
                <img src={url3} alt={title} className="images-cards" />
              ) : (
                <img src={url3} style={{ display: "none" }} />
              )}
              {url4 != "none" ? (
                <img src={url4} alt={title} className="images-cards" />
              ) : (
                <img src={url4} style={{ display: "none" }} />
              )}
              {url5 != "none" ? (
                <img src={url5} alt={title} className="images-cards" />
              ) : (
                <img src={url5} style={{ display: "none" }} />
              )}
              {url6 != "none" ? (
                <img src={url6} alt={title} className="images-cards" />
              ) : (
                <img src={url6} style={{ display: "none" }} />
              )}
            </div>
            <a>{subtitle3}</a>
          </div>
          <div className="images-grid-2">
            <div className="subtitle4-parent">
              <a className="subtitle4">{subtitle4}</a>
              <p>{thirdText}</p>
            </div>
            <div className="borde">
              {url7 != "none" ? (
                <img src={url7} alt={title} className="images-cards" />
              ) : (
                <img src={url7} style={{ display: "none" }} />
              )}
              <div className="images">
                {url8 != "none" ? (
                  <img src={url8} alt={title} className="images-cards" />
                ) : (
                  <img src={url8} style={{ display: "none" }} />
                )}
                {url9 != "none" ? (
                  <img src={url9} alt={title} className="images-cards" />
                ) : (
                  <img src={url9} style={{ display: "none" }} />
                )}
              </div>
              {url9 != "none" ? (
                <img src={url10} alt={title} className="images-cards" />
              ) : (
                <img src={url10} style={{ display: "none" }} />
              )}
            </div>
            <p className="last-text">{lastText}</p>
          </div>
        </div>
        <ContactBox />
      </div>
    </motion.div>
  );
};

export default WorkDetail;
