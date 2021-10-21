import React from 'react'
import Img from '../elements/Img'
import styled from 'styled-components'
import Text from '../elements/Text'
import { MdGrade } from 'react-icons/md'
import { BsHeart } from 'react-icons/bs'

/**
 * @author jinsung
 * @param {*} props
 * @returns infoWindow
 */
const TooltipCard = props => {
  return (
    <Grid>
      <ImgArea>
        <BsHeart />
        <Img bradius="16px 16px 0 0" width="280px" height="12rem" />
      </ImgArea>
      <Contents>
        <Content>
          <MdGrade />
          <Text fontSize="14px">4.98</Text>
          <Text fontSize="14px" color="#b2b5be">
            (99)
          </Text>
        </Content>
        <Content>
          <Text fontSize="16px">펜션 Janghowon-eup,Incheon</Text>
        </Content>
        <Content>
          <Text fontSize="16px">퍼시픽블루 이천</Text>
        </Content>
      </Contents>
    </Grid>
  )
}

const Grid = styled.div`
  width: 280px;
  height: 280px;
  position: absolute;
  bottom: 20px;
  left: -125px;
  transform: translate(calc(-50% + 142.386px), calc(100% + 30.72px));
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  border-radius: 0 0 16px 16px;
`
const Content = styled.div`
  line-height: 18px;
  align-items: center;
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  svg {
    color: #ff385c;
    font-size: 16px;
    margin-right: 2px;
  }
`
const ImgArea = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 22px;
    color: #ffffff;
  }
`

export default TooltipCard
