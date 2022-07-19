import './App.css';

import { useEffect, useState } from 'react';

import Header from './Header.js'
import List from './List.js'
import Map from './Map.js'

function App() {
  const [data, setData] = useState({
    'IP Address': '192.212.174.101',
    'Location': 'Brooklyn, NY 10001',
    'Timezone': 'UTC -05:00',
    'ISP': 'SpaceX Starlink',
  })
  const [cordinates, setCordinates] = useState({
    lat: 0,
    lng: 0
  })
  const [headerPadding, setHeaderPadding] = useState('')
  
  useEffect( () => {
    fetchData('')
    
    // eslint-disable-next-line
  }, [])
  
  function fetchData(ip) {
    const url = `https://ipwho.is/${ip}`
    fetch(url).then( response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('error while requesting');
        console.log(`status: ${response.status}:${response.statusText}`);
      }
    }).then( data => {
      const newData = {
        'IP Address': data.ip,
        'Location': `${data.country_code}, ${data.region}`,
        'Timezone': 'UTC ' + data.timezone.utc,
        'ISP': data.connection.isp,
      }
      setData(newData)
      setCordinates({
        lat: data.latitude,
        lng: data.longitude,
      })
    })
  }
  
  function handleSubmit(ip){
    fetchData(ip)
    return 0
  }
  
  function handleResize(height){
    setHeaderPadding((height/2+32)+'px')
  }
    
  return (
    <main className="app">
      <Header onSubmit={handleSubmit} paddingBottom={headerPadding}/>
      <List onResize={handleResize}>
        { data }
      </List>
      <Map {...cordinates}/>
    </main>
  );
}

export default App;
