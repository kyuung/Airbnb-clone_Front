import React from 'react'
import styled from 'styled-components'
import { MdHome } from 'react-icons/md'

const Marker = props => {
  const { text, type } = props

  if (type === 'home') {
    return (
      <div>
        <HomeMarker>
          <MdHome />
        </HomeMarker>
        {/* <img src="" alt="marker" width="60px" /> */}
      </div>
    )
  }

  if (type === 'price') {
    return (
      <div>
        <PriceMarker>{text}</PriceMarker>
        {/* <img src="" alt="marker" width="60px" /> */}
      </div>
    )
  }
  return <></>
}

Marker.defaultProps = {
  text: '₩217,747',
  type: 'price',
}
const HomeMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #ffffff;
  color: rgb(34, 34, 34);
  svg {
    font-size: 24px;
  }
  :hover {
    transform: scale(1.3);
    transform-origin: 50% 50%;
    transition: transform 250ms cubic-bezier(0, 0, 0.1, 1) 0s;
  }
`

const PriceMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 28px;
  box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
  color: rgb(34, 34, 34);
  height: 28px;
  width: 58px;
  padding: 0px 8px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 250ms cubic-bezier(0, 0, 0.1, 1) 0s;
  font-weight: 800;
  font-size: 13px;
  line-height: 18px;
  :hover {
    transform: scale(1.1);
  }
`

export default Marker
