import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

const App = () => {
  const [everthing, setEverything] = useState({});
  const [topheadlines, setTopHeadlines] = useState({});
  useEffect(() => {
    const everything = async () => {
      return fetch(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6f678dc42acc4d56b9625ed613295017"
      )
        .then((response1) => response1.json())
        .then((result1) => setEverything(result1));
    };

    const topheadlines = async () => {
      return fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6f678dc42acc4d56b9625ed613295017"
      )
        .then((response2) => response2.json())
        .then((result2) => setTopHeadlines(result2));
    };

    everything();
    topheadlines();
  }, []);

  return (
    <div>
      <Header />
      <Body everthing={everthing} topheadlines={topheadlines} />
    </div>
  );
};

export default App;
