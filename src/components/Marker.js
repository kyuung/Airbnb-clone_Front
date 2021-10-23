import React, { useState } from 'react'
import styled from 'styled-components'
import { MdHome } from 'react-icons/md'
import TooltipCard from './TooltipCard'
import { useSelector } from 'react-redux'

/**
 * @author jinsung
 * @param {*} props
 * @returns Marker
 */
const Marker = props => {
  const { text, type, info, isShow } = props
  const [visible, setVisible] = useState(isShow)
  const [isFocus, setIsFocus] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  const focusId = useSelector(state => state.room.focusId)
  const _isFocus = useSelector(state => state.room.isFocus)

  React.useEffect(() => {
    if (_isFocus) {
      if (focusId === info._id) {
        setIsFocus(true)
      } else {
        setIsFocus(false)
      }
    } else {
      setIsFocus(false)
    }
  }, [focusId, _isFocus])

  const handleClick = () => {
    toggleIsSelected()
    toggleTooltip()
  }

  const toggleIsSelected = () => {
    setIsSelected(isSelected ? false : true)
  }

  const toggleTooltip = () => {
    const toggleVisible = visible ? false : true
    setVisible(toggleVisible)
  }

  if (type === 'home') {
    return (
      <>
        <MarkerArea>
          <HomeMarker
            onClick={handleClick}
            isFocus={isFocus}
            isSelected={isSelected}
          >
            <MdHome />
          </HomeMarker>
          {visible ? <TooltipCard info={info} /> : null}
        </MarkerArea>
      </>
    )
  }

  if (type === 'price') {
    return (
      <div>
        <PriceMarker onClick={handleClick} isSelected={isSelected}>
          {text}
        </PriceMarker>
        {visible ? <TooltipCard info={info} type="price" /> : null}
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
  background-color: ${props =>
    props.isFocus || props.isSelected ? 'rgb(34, 34, 34)' : '#fff'};
  color: ${props =>
    props.isFocus || props.isSelected ? '#fff' : 'rgb(34, 34, 34)'};
  transform: ${props =>
    props.isFocus || props.isSelected ? 'scale(1.3)' : ''};
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
  background-color: ${props => (props.isSelected ? 'rgb(34, 34, 34)' : '#fff')};
  color: ${props => (props.isSelected ? '#fff' : 'rgb(34, 34, 34)')};
  transform: ${props => (props.isSelected ? 'scale(1.3)' : '')};
  border-radius: 28px;
  box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
  height: 28px;
  width: 58px;
  padding: 0px 8px;
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
