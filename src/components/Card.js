import React from 'react'
import styled from 'styled-components'
import { BsHeart } from 'react-icons/bs'

const Card = props => {
  const { image_url, width, height } = props
  const styles = {
    width: width,
    height: height,
  }

  return (
    <CardContentsArea>
      <CardArea {...styles}>
        <ImgArea image_url={image_url}>
          <IconArea>
            <BsHeart />
          </IconArea>
        </ImgArea>
        <CardContentArea>
          <div>
            <span style={{ fontWeight: '700' }}>Balamban,중부 비사야</span>
          </div>
          <div>₩273,718 / 박</div>
        </CardContentArea>
        <CardContentArea>
          <div>
            <span style={{ color: '#979a9e' }}>2,954km거리</span>
          </div>
          <div>
            <span style={{ color: '#979a9e' }}>11월 12일 - 11월 19일</span>
          </div>
        </CardContentArea>
      </CardArea>
    </CardContentsArea>
  )
}

Card.defaultProps = {
  width: '100px',
  height: '100px',
}

const CardContentsArea = styled.div`
  display: grid !important;
  grid-template-columns: 100%;
  isolation: isolate;
  box-sizing: border-box;
`
const ImgArea = styled.div`
  background-image: url('${props => props.image_url}');
  background-position: center;
  display: block;
  background-size: cover;
  width: 100%;
  height: 279px;
  border-radius: 12px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 10px;
  position: relative;
`

const CardArea = styled.div`
  grid-area: 1/1/2/2;
  opacity: 1;
  position: relative;
`
const CardContentArea = styled.div`
  -webkit-box-pack: justify;
  display: flex;
  justify-content: space-between;
`
const IconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 8px;
  right: 8px;
  color: #fff;
  svg {
    display: block;
    height: 20px;
    width: 20px;
    stroke-width: 0.5;
    overflow: visible;
  }
`

export default Card
