import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './components/Punklist';
import Main from './components/Main';


function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() =>  {
    const getMynfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x6b2391b32052FCc7c1A372B153851B7dD8dB0394&order_direction=asc')
      console.log(openseaData.data.assets)
       setPunkListData(openseaData.data.assets)
    }
    return getMynfts()
  }, [])
  return <div className='app'>
    <Header />
    {punkListData.length > 0 && (
      <>
    <Main punkListData={punkListData} selectedPunk={selectedPunk} />
    <Punklist
     punkListData={punkListData} 
    setSelectedPunk={setSelectedPunk}
     />
     </>
    )}
    </div>
  }

export default App;