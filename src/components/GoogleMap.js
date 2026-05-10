import React, { useMemo } from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import "../style/map.scss";


const Map = () => {
    const center = useMemo(()=>({
        lat : -37.698349401116715, 
        lng : 176.15726925633035
    }), []);

    const {isLoaded} = useLoadScript({
      //gogoleMap Api is hidden
      googleMapsApiKey : "AIzaSyAI2bn_C3zM7QV8kDXjbpA7gVQXvq87OvY",
    });


  return isLoaded? (
    <div className='map'>
    <GoogleMap zoom={18} center={center} mapContainerClassName="google_map">
      <Marker position={center}/>
    </GoogleMap>
    </div>
  ) : <></>
}

export default Map