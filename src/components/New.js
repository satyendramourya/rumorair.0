// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// export class New extends Component {
export default function New(props) {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState()
  const [offset, setOffset] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://api.worldnewsapi.com/search-news?api-key=4cd52267b53e4b388cdc6350dcead260&source-countries=${props.country}&text=${props.category}&number=25`
    let data = await fetch(url);
    console.log(url)
    props.setProgress(30);
    setLoading(true)
    let parsedData = await data.json()
    props.setProgress(60);

    setArticles(parsedData.news)
    setLoading(false)
    // setOffset(offset + 1)
    setTotalResults(parsedData.totalResults)

    props.setProgress(100);

  }

  useEffect(() => {
    document.title = `${props.category}- tidings`
    updateNews();
  }, [])

  return (
    <>
        <div className='container mt-5 pt-2 '>
          <div className="row ">
            {/*this.state.*/articles?.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem text_color={props.text_color} color={props.color}
                  
                    title={element.title ? element.title.slice(0, 40) : "---"}
                    descreption={element.summary? element.summary.slice(0, 80) : ""}
                    imageUrl={element.image ? element.image : "https://tinypng.com/images/social/website.jpg"}
                    author={element.author} publishedAt={element.publish_date} newsUrl={element.url} />
                </div>
              )
            })}
          </div>
        </div>

    </>
  )
}
// }

New.defaultProps = {
  country: 'in',
  category: "sports",
  color: "white",
  text_color: "black",

}

New.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  color: PropTypes.string,
  text_color: PropTypes.string,

}
