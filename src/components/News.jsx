import React from "react";
import { useEffect, useState } from "react";
import { getNews } from "../services/newsData";
import NewsItem from "./NewsItem";

const News = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNews(category);
      console.log(category)
      setData(news);
    }
    fetchNews();
  }, [category]);


  return (
    <div className="container mx-auto lg:px-16 px-2 ">

      <h3 className=" text-center mb-5 mt-5 font-bold text-[24px]">{category} &nbsp;  <span className="text-[16px] font-semibold bg-gradient-to-r from-red-500 pl-1">NEWS</span></h3>
      <div className="container mx-auto lg:px-40 px-2 grid lg:grid-cols-4 gap-4">
        {data.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}

      </div>
    </div>
  );
};

export default News;
