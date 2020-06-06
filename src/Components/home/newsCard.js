import React from "react";

const NewsCard = (props) => {
  return (
    <div className="newsWrap">
      <div className="titleHead">
        <h3>{props.title}</h3>
        <h3>{props.date}</h3>
      </div>
      <p>{props.content}</p>
    </div>
  );
};

export default NewsCard;
