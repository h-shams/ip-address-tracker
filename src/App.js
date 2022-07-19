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
    const url = `http://ip-api.com/json/${ip}?fields=33612511`
    fetch(url).then( response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('error while requesting');
        console.log(`status: ${response.status}:${response.statusText}`);
      }
    }).then( data => {
      const newData = {
        'IP Address': data.query,
        'Location': `${data.countryCode}, ${data.regionName}`,
        'Timezone': parseUTCOffset(data.offset),
        'ISP': data.isp,
      }
      setData(newData)
      setCordinates({
        lat: data.lat,
        lng: data.lon,
      })
    })
  }
  
  function parseUTCOffset(offset){
    const sign = offset < 0 ? '-' : '+'
    offset = Math.abs(offset)
    let mins = offset/60 % 60;
    mins = (mins < 10) ? '0'+mins : mins
    let hours = Math.floor(offset/3600)
    hours = (hours < 10) ? '0'+hours : hours
    return `UTC ${sign}${hours}:${mins}`
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
