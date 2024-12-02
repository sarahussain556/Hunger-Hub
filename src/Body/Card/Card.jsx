import React from 'react'
import './Card.css'

function Card(props) {
    console.log("prop",props)
    const{image,name, rating,cuisine,cfo}=props.resData?.info;
  return (
    <div>
      <div className='card-box'>
        <img className="card-box-img" src={image.url} alt="img"/>
        <div className='card-heading'>
            <div className='card-heading-text'>
                <p>{name}</p>
            </div>
            <div className='card-heading-rating'>
                <p>{rating.rating_text}</p>
            </div>
        </div>
        <div className='card-cuisines'>
      <p>{cuisine.map(v => v.name).join(',')}</p>
       <span><p>{cfo.text}</p></span>
      </div>
       
       
       
       
      </div>
     
    
    </div>
  )
}

export default Card
