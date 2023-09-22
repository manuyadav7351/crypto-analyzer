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
        <h1>Buy Crypto</h1>
        <p>you can buy the crypto here and look into it </p>
        <h2>welcome to the world of crypto</h2>
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