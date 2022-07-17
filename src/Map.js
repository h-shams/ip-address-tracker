import './Map.css'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet'

function SetMapCordinates(props) {
  const map = useMap()
  map.setView([props.lat, props.lng], 13)
  return null
}

function Map(props) {  
  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  return (
    <div className="map">
      <MapContainer className="map__container" center={[51.505, -0.09]} zoom={13} zoomControl={false} scrollWheelZoom={false}>
        <SetMapCordinates {...props}/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={url}
        />
        <ZoomControl position='bottomright'/>
      </MapContainer>
    </div>
  );
}

export default Map;
