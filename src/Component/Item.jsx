import React from 'react';
import './Item.css';

const Item = (props) => {
  const { title, description, imageUrl,newsUrl,author ,date, source} = props;

  return (
    <div className="card text-center news-card"
  style={{ width: "18rem", cursor: "pointer" }}
  onClick={() => window.open(newsUrl, "_blank")}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        
       <p className="card-text fw-bold text-decoration-underline hover-black-white">
  { description}
</p>


       
        <p className="card-text fw-bold bg-blue">{date}</p>
        <p className="card-text fw-bold">{source}</p>
        
    
        <a href={newsUrl}  target="_blank" className="btn bg-dark text-white fw-bold news-card">See Details</a>
      </div>
    </div>
  );
};

export default Item;
