import React, { useState } from 'react'
import styled from 'styled-components'
import { MdHome } from 'react-icons/md'
import TooltipCard from './TooltipCard'

/**
 * @author jinsung
 * @param {*} props
 * @returns Marker
 */
const Marker = props => {
  const { text, type, info, isShow } = props
  const [visible, setVisible] = useState(isShow)
  const [isFocus, setIsFocus] = useState(false)

  const handleClick = () => {
    toggleIsFocus()
    toggleTooltip()
  }

  const toggleIsFocus = () => {
    setIsFocus(isFocus ? false : true)
  }

  const toggleTooltip = () => {
    const toggleVisible = visible ? false : true
    setVisible(toggleVisible)
  }

  if (type === 'home') {
    return (
      <>
        <MarkerArea>
          <HomeMarker onClick={handleClick} isFocus={isFocus}>
            <MdHome />
          </HomeMarker>
          {visible ? <TooltipCard /> : null}
        </MarkerArea>
      </>
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
  isShow: false,
}
const MarkerArea = styled.div`
  position: relative;
`

const HomeMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${props => (props.isFocus ? 'rgb(34, 34, 34)' : '#fff')};
  color: ${props => (props.isFocus ? '#fff' : 'rgb(34, 34, 34)')};
  transform: ${props => (props.isFocus ? 'scale(1.3)' : '')};
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
