import React from 'react'
import "./card.css";

const Card = ({coin}) => {
  return (
    <div key={coin.id} className='right-card'>
      <div className='right-img'>
        <img src={coin.image} alt="" />
      </div>
      <h1>{coin.name}</h1>
      <p>{coin.current_price}</p>
      <h3>{coin.price_change_percentage_24h}</h3>
    </div>
  )
}

export default Card