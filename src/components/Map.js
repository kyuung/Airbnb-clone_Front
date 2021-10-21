import React, { useState } from 'react'
import GoogleMap from 'google-map-react'
import Marker from '../components/Marker'

const Map = props => {
  const { roomList, zoom, type } = props
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(true)
  }

  const toggleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {type ? (
        <>
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
              defaultCenter={props.center}
              defaultZoom={zoom}
            >
              {roomList.map((v, idx) => {
                const location = v.location
                return (
                  <Marker
                    lat={location.lat}
                    lng={location.lon}
                    text={`₩${v.price}`}
                  />
                )
              })}
            </GoogleMap>
          </div>
        </>
      ) : (
        <>
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
              defaultCenter={props.center}
              defaultZoom={zoom}
            >
              {roomList.map((v, idx) => {
                const location = v.location
                return (
                  <Marker lat={location.lat} lng={location.lon} type="home" />
                )
              })}
            </GoogleMap>
          </div>
        </>
      )}
    </>
  )
}

Map.defaultProps = {
  center: {
    lat: 37.42990861398286,
    lng: 126.89336566108994,
  },
  zoom: 7,
  options: {
    gestureHandling: 'cooperative',
  },
}

export default Map
