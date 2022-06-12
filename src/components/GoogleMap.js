import React from 'react'
import GoogleMapReact from 'google-map-react';
import "../style/map.scss";
import {HiOutlineLocationMarker} from 'react-icons/hi';


const GoogleMap = () => {
    const location = {
        lat : -37.698349401116715, 
        lng : 176.15726925633035
    }

  return (
    <div className='map'>
            <div className='google_map' style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.GATSBY_GOOGLE_MAP_API_KEY}}
                defaultCenter={location}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={21}
            >
            <HiOutlineLocationMarker 
              lat={location.lat}
              lng={location.lng}
            />
            </GoogleMapReact>
            </div>
    </div>
  )
}

export default GoogleMap