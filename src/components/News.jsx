import React from "react";
import { useEffect, useState } from "react";
import { getNews } from "../services/newsData";
import NewsItem from "./NewsItem";

// const data = [
//   {
//     id: "841415404982569641",
//     title: "Grammys 2024: Taylor Swift (Midnights) for Album of the Year?",
//     url: "https://www.goldderby.com/article/2023/grammys-2024-taylor-swift-midnights-album-of-the-year/",
//     description:
//       "She would make history as the first artist to claim four wins in the category, but we've got a long way to go this eligibility year.",
//     body: "The 2023 Grammys just took place on February 5, but the eligibility period for 2024 is already almost half over, so we launched our predictions for Album of the Year. Theres still a long way to go, but at this early stage things are looking good for Taylor Swift, whose Midnights is the early front-runner []",
//     snippet:
//       "Theres still a long way to go, but at this early stage things are looking good for <b><b>Taylor Swift</b></b>, whose Midnights is the early front-runner [].",
//     keywords: "",
//     language: "en",
//     isSafe: true,
//     datePublished: "2023-02-27T21:00:19",
//     provider: {
//       name: "goldderby",
//       favIcon: "",
//       favIconBase64Encoding: "",
//     },
//     image: {
//       url: "https://www.goldderby.com/wp-content/uploads/2023/01/taylor-swift-midnights.jpg",
//       height: 0,
//       width: 0,
//       thumbnail: "",
//       thumbnailHeight: 0,
//       thumbnailWidth: 0,
//       base64Encoding: "",
//       name: null,
//       title: null,
//       provider: {
//         name: "goldderby",
//         favIcon: "",
//         favIconBase64Encoding: "",
//       },
//       imageWebSearchUrl: null,
//       webpageUrl:
//         "https://www.goldderby.com/article/2023/grammys-2024-taylor-swift-midnights-album-of-the-year/",
//     },
//   },
//   {
//     id: "62116488790797142",
//     title: "Taylor Swift Ties the Record for Most Adult Pop",
//     url: "https://www.onenewspage.com/n/World/1zpkbh2ac7/Taylor-Swift-Ties-the-Record-for-Most-Adult.htm",
//     description:
//       "Taylor Swift matches the mark for the most top 10 hits in the history of Billboards Adult Pop Airplay..  World  One News Page: Monday, 27 February 2023",
//     body: "Taylor Swift Ties the Record for Most Adult Pop Airplay Chart Top 10s With Lavender Haze\nPublished\n27 Feb 2023\nTaylor Swift matches the mark for the most top 10 hits in the history of Billboards Adult Pop Airplay chart, as Lavender Haze lifts from No. 11 to No. 9 on the tally dated March 4. The song, released on Republic Records, becomes Swifts 27th Adult Pop Airplay top 10, equaling Maroon 5 for the\n#taylorswift #republicrecords #maroon5 #billboards #rihannatalks #swift #myguitar #antihero #adultpopairplay #kellyclarkson",
//     snippet:
//       "<b><b>Taylor Swift</b></b> matches the mark for the most top 10 hits in the history of Billboards Adult Pop Airplay. World One News Page: Monday, 27 February 2023.",
//     keywords: "",
//     language: "en",
//     isSafe: true,
//     datePublished: "2023-02-27T20:47:08",
//     provider: {
//       name: "onenewspage",
//       favIcon: "",
//       favIconBase64Encoding: "",
//     },
//     image: {
//       url: "https://cdn.newsserve.net/ONPglobe256.png",
//       height: 0,
//       width: 0,
//       thumbnail: "",
//       thumbnailHeight: 0,
//       thumbnailWidth: 0,
//       base64Encoding: "",
//       name: null,
//       title: null,
//       provider: {
//         name: "onenewspage",
//         favIcon: "",
//         favIconBase64Encoding: "",
//       },
//       imageWebSearchUrl: null,
//       webpageUrl:
//         "https://www.onenewspage.com/n/World/1zpkbh2ac7/Taylor-Swift-Ties-the-Record-for-Most-Adult.htm",
//     },
//   },
// ];

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNews();
      setData(news);
    }
    fetchNews();
  }, []);

  data.map((news, index) => {
    console.log(news);
  });

  return (
    <div className="container mx-auto lg:px-16 px-2 ">
      <h3>news</h3>
      <div className="container mx-auto lg:px-40 px-2 grid lg:grid-cols-4 gap-4">
        {data.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}

      </div>
    </div>
  );
};

export default News;
