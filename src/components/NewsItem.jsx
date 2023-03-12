import React from "react";
const NewsItem = ({ news }) => {
  let publishDate = new Date(news.datePublished);
  publishDate = publishDate.toLocaleDateString();

  let author = news.provider.name;
  author = author.charAt(0).toUpperCase() + author.slice(1);
  return (
    <div className="container grid text-sm overflow-hidden gap-2 rounded border-0 bg-gray-800 p-2 mx-auto items-center justify-center relative">
      <div className="grid grid-cols-2  items-center justify-center  ">
        <img src={news.image.url} alt={news.image.title} className="w-40 rounded basis-1.6/3 items-center" />
        <p className="grid text-xs gap-0.5 mx-auto basis-1.4/3">
          <span className="text-red-500  font-bold">author</span>
          <span className="text-yellow-100">{author}</span>
          <span>{publishDate}</span>
        </p>
      </div>


      <h2 className="font-bold" >{news.title}</h2>

      <p className="text-gray-300">{news.snippet}</p>

      <div className="m-2  grid grid-cols-3 gap-2 items-center justify-center border-t-2 ">
        <button className="bg-blue-700 mt-2 py-2 text-xs items-center justify-center  rounded">
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            read more..
          </a>
        </button>
        <button ><svg fill="white" className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg> -no</button>

        <button><svg fill="white" className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" /></svg></button>
      </div>

    </div>
  );
};

export default NewsItem;
