import React, { useState, useEffect } from "react";
import newsCall from "../api/newsCall";
import newsCard from "./newsCard";
import me from "../me.jpg";

function HomeContent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    newsCall(setNews(props.res.data));
    console.log(news);
  }, []);

  return (
    <div className="homeContBG">
      <div className="contWrap">
        <img src={me} alt="me" />
        <div className="textWrap">
          {news.map((item) => {
            return (
              <newsCard
                key={item.id}
                title={item.title}
                date={item.created}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
