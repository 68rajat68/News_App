import React from 'react'

const NewsItemF = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3' >
      <div className="card" >
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0',
          top: '-10px'
        }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLo0yYhCRoYwAChKvkkKqOO9lBBrA4BgihT9VpK6fXhzJh4Si3EI4q5zwtenh9-np-_A&usqp=CAU"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>

      </div>
    </div>
  )
}

export default NewsItemF