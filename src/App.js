import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Hero from "./component/hero/Hero";
import Contact from './component/contact/Contact';
import axios from 'axios';
import Cryptos from './component/cryptos/Cryptos';
import About from './component/about/About';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

function App() {

  const [data , setData] = useState([]);
  const [crypData, setCrypData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{

    const fetchData = async () => {
      try{
        const response = await axios.get(url);
        setData(response.data.slice(0, 4));
        setCrypData(response.data.slice(0,10));
        setIsLoading(false);
      }catch(errro){
        console.log(errro);
      }
    }

    fetchData();

  }, [])


  return (
    <div className="App">
      
      <Navbar />
      {isLoading ? "Loading" :  < Hero data={data}/> }
      <Cryptos coins={crypData} />
      <About />
      <Contact />
    </div>
  );
}

export default App;
