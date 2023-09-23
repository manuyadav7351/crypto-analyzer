import React, { useEffect, useState } from 'react'
import Card from "./Card";
import "./hero.css"

const Hero = ({data}) => {

  const [laoding, setLoading] = useState(true);
  console.log(data);

  useEffect(()=>{
    if(data.length > 0){
      setLoading(false);
    }
  }, [data]);

  return (
    <div className='hero' id='Home'>
      <div className='hero-left'>
        <div className='h1'>Buy Crypto</div>
        <p>you can buy the crypto here and look into it </p>
        <div className='h2'>welcome to the world of crypto</div>
      </div>

      <div className='hero-right'>
        {
          laoding ? "Loading..." :
          data.map((coin) => {
            return <Card key={coin.id} coin={coin}/>
          }) 
        }
      </div>
    </div>
  )
}

export default Hero