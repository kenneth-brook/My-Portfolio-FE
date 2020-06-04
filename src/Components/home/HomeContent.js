import React, { useState, useEffect } from "react";
import newsCard from "./newsCard";
import me from "../me.jpg";
import axios from "axios";

function HomeContent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/router/")
      .then((res) => {
        console.log(res);
        setNews(res.data);
        console.log("set news", news);
      })
      .catch((err) => {
        console.log(err);
      });
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
