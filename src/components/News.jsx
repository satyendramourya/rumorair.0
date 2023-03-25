import React from "react";
import { useEffect, useState } from "react";
import { getNews } from "../services/newsData";
import NewsItem from "./NewsItem";
import { useSelector } from 'react-redux';
import Spinner from "./Spinner";



const News = () => {
  const category = useSelector(state => state.category);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const news = await getNews(category);
      console.log(JSON.stringify(news))
      setData(news);
      setLoading(false);
    }
    fetchNews();
  }, [category]);


  return (
    <div className="container mx-auto lg:px-16 px-2 ">
      {loading && <Spinner />}
      <h3 className=" text-center mb-5 mt-5 font-bold text-[24px]">{category.charAt(0).toUpperCase() + category.slice(1)} &nbsp;  <span className="text-[16px] font-semibold bg-gradient-to-r from-red-500 pl-1">NEWS</span></h3>
      <div className="container mx-auto lg:px-40 px-2 grid lg:grid-cols-4 gap-4">
        {data.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}

      </div>
    </div>
  );
};

export default News;
