import React from "react";
import "./WorkText.scss";
import { Link } from "react-router-dom";

const WorkText = ({
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
}) => {
  const Data = {
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
  };

  return (
    <p className="work-text-parent">
      <a className="bar">{type}/</a>
      <Link to={{ pathname: "/work/" + link }} state={Data}>
        {title}
      </Link>
    </p>
  );
};

export default WorkText;
