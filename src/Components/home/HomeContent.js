import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import me from "../me.jpg";

function HomeContent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/router/").then((res) => {
      setNews(res.data.frontPosts);
      console.log(res.data);
    });
  }, []);

  console.log("from state", news);

  return (
    <div className="homeContBG">
      <div className="contWrap">
        <img src={me} alt="me" />
        <div className="textWrap">
          {news.map((item) => {
            return (
              <NewsCard
                key={item.id}
                title={item.title}
                date={item.created}
                content={item.post}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
