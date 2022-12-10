

import React from 'react'


  export default function NewsItem(props)  {

    let {title , descreption ,imageUrl , key , newsUrl , author , publishedAt , source , } = props;
    return (

      <div className="card my-3" style={{backgroundColor:props.color}} >
        <p>{key}</p>

        <img src={imageUrl} className="card-img-top" alt="..."/>

        <div className="card-body">
          <h5 className="card-title h6" style={{color:props.text_color}}>{title}...</h5>
          <p className="card-text small"style={{color:props.text_color}}>{descreption}...</p>
          <p className='card-text' > <small className='text-muted'>By {author?author:'Unknown'} on {new Date(publishedAt).toUTCString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer"  className="btn btn-primary btn-sm" style={{cursor:"pointer"}}>Read More<span 
          className="position-absolute top-1 start-99 translate-middle badge rounded-pill bg-danger" style={{left:'80%' ,zIndex:'1'}}>{source}</span></a>
        </div>
      </div>
    )
  }
// }

// export default NewsItem