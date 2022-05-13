import React from 'react'

function Card({ imgUrl, title, bgCard, text, big }) {
  return (
    <>
      {bgCard ? (
        <div className="card" style={{ backgroundImage: `url(${imgUrl})` }}>
          <h3 className="card-title">{title}</h3>
          <h5 className="card-subtitle">VIEW PROJECTS {'>'}</h5>
        </div>
      ) : (
        <div className="card">
          <figure className={big ? 'big' : ''}>
            <img src={imgUrl} alt="" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h5 className="text">{text}</h5>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
