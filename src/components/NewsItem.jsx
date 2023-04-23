import React from "react";
import { Link } from 'react-router-dom'

const NewsItem = ({ news }) => {
  let publishDate = new Date(news.datePublished);
  publishDate = publishDate.toLocaleDateString();

  let author = news.provider.name;
  author = author.charAt(0).toUpperCase() + author.slice(1);
  return (
    <div className="container text-sm overflow-hidden rounded border border-gray-800  p-2 relative lg:max-w-[250px] max-w-[300px] hover:shadow-grayish">
      <img src={news.image.url} alt={news.image.title} />
      <div className="flex space-x-10 mt-1">
        <span className="text-red-500  font-bold">{author}</span>
        <span className="text-gray-400">{publishDate}</span>
      </div>
      <h2 className="font-bold my-2 leading-4" >{news.title}</h2>
      <p className="text-gray-300 mb-2 text-xs">{news.snippet}</p>
      <div className="m-2  grid grid-cols-2 gap-2  ">
        <button className="bg-blue-700 mt-2 py-2 text-xs items-center justify-center hover:scale-105  rounded">
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            read more..
          </a>
        </button>

        {/* <Link key={news.id} to={`/summary/${news.id}`} > */}
        <Link key={news.id} to={`/summary/${encodeURIComponent(news.url)}`} >
          <button className="  relative flex items-center justify-start mt-2 ml-3 border-b-2 border-blue-400"  >
            summary
          </button>
        </Link>
      </div>

    </div >
  );
};

export default NewsItem;
