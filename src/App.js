import './App.css';

import { useEffect, useState } from 'react';

import Header from './Header.js'
import List from './List.js'
import Map from './Map.js'

function App() {
  const [apiKey, setApiKey] = useState('')
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
    fetch("./secrets.json")
    .then( response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('error while getting "secrets.json"')
      }        
    }).then( data => {
      setApiKey(data.apiKey)
      fetchData('', data.apiKey)
    }).catch( error => {
      console.log('error while tring to get "secrets.json" file')
    })
        
  }, [])
  
  function fetchData(ip, apiKey) {
    let url = 'https://geo.ipify.org/api/v2/country,city?'
              + new URLSearchParams({
                  'apiKey': apiKey,
                  'ipAddress': ip,
                })
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
        'Location': `${data.location.country}, ${data.location.region}`,
        'Timezone': `UTC ${data.location.timezone}`,
        'ISP': data.isp,
      }
      setData(newData)
      setCordinates({
        lat: data.location.lat,
        lng: data.location.lng,
      })
    })
  }
  
  function handleSubmit(ip){
    fetchData(ip, apiKey)
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
