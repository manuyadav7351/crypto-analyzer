import React, { useEffect, useState } from 'react'
import "./cryptos.css"

const Cryptos = ({coins}) => {

  const [loading , setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <div className='cryptos' id='Cryptos'>
      <div className='crypto-heading'>Crypto in Trends</div>
      {loading ? "Loading..." : 

      <ul className='ul'>
        {coins.map((ele)=>(
          <li className='li' key={ele.id}>
            <div className='name'>{ele.name}</div>
            <div className='price'>{ele.current_price}</div>
            <div className='price'>{ele.price_change_percentage_24h}</div>
            <div className='image'>
              <img src={ele.image} alt={ele.name} />
            </div>
          </li>
        ))}
      </ul>

  }
    </div>
  )
}

export default Cryptos