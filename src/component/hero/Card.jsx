import React from 'react'
import "./card.css";

const Card = ({coin}) => {
  return (
    <div key={coin.id} className='right-card'>
      <div className='right-img'>
        <img src={coin.image} alt="" />
      </div>
      <div className='coin-name'>{coin.name}</div>
      <p>{coin.current_price}</p>
      <div className='coin-percentage'>{coin.price_change_percentage_24h}</div>
    </div>
  )
}

export default Card