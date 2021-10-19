import React from 'react'
import styled from 'styled-components'

const Marker = props => {
  const { text } = props
  return (
    <div>
      <PriceMarker>{text}</PriceMarker>
      {/* <img src="" alt="marker" width="60px" /> */}
    </div>
  )
}

Marker.defaultProps = {
  text: '₩217,747',
}

const PriceMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 28px;
  box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
  color: rgb(34, 34, 34);
  height: 28px;
  width: 55px;
  padding: 0px 8px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 250ms cubic-bezier(0, 0, 0.1, 1) 0s;
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
`

export default Marker
