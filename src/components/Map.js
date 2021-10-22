import React from 'react'
import GoogleMap from 'google-map-react'
import Marker from '../components/Marker'

/**
 * @author jinsung
 * @param {*} props
 * @returns 구글맵 적용
 */
const Map = props => {
  const { roomList, zoom, type } = props

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
                    info={v}
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
                  <Marker
                    lat={location.lat}
                    lng={location.lon}
                    type="home"
                    info={v}
                  ></Marker>
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
