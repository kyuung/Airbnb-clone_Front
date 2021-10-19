import React from 'react'
import GoogleMap from 'google-map-react'
import Marker from '../components/Marker'

const Map = props => {
  //const Marker = ({ text }) => <div>{text}</div>

  return (
    <>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <Marker
            lat={37.42990861398286}
            lng={126.89336566108994}
            text="₩217,747"
          />
        </GoogleMap>
      </div>
    </>
  )
}

Map.defaultProps = {
  center: {
    lat: 37.42990861398286,
    lng: 126.89336566108994,
  },
  zoom: 14,
  options: {
    gestureHandling: 'cooperative',
  },
}

export default Map
