import React from 'react'
import styled from 'styled-components'
import Img from '../elements/Img'
import Text from '../elements/Text'
import { MdGrade } from 'react-icons/md'
import { BsHeart } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  setFocusIdReducer,
  setIsFocusReducer,
} from '../redux/modules/roomSlice'

/**
 * @author jinsung
 * @param {*} props
 * @returns 가로 카드형
 */
const RowCard = props => {
  const dispatch = useDispatch()
  const { info } = props
  const [isHover, SetIsHover] = React.useState(false)

  /* Foucs Id 지정 */
  const _handleHover = () => {
    if (isHover) {
      dispatch(setIsFocusReducer(true))
      dispatch(setFocusIdReducer(info._id))
    }
  }

  const _handleInner = () => {
    SetIsHover(true)
  }

  const _handleOut = () => {
    SetIsHover(false)
  }

  return (
    <Link to={`/rooms/${info._id}`}>
      <RowCardArea
        onMouseOver={_handleHover}
        onMouseEnter={_handleInner}
        onMouseOut={_handleOut}
      >
        <CardArea>
          <Img
            bradius="1rem"
            width="18rem"
            height="200px"
            src={info.imageUrl[0]}
          />
          <Section>
            <IconArea>
              <BsHeart />
            </IconArea>
            <SubContent>{info.locationName}</SubContent>
            <Content>{info.title}</Content>
            <Hr />
            <SubContent>
              최대 인원 {info.people}명 · 침실 2개 · 침대 {info.people}개 · 욕실
              1개
            </SubContent>
            <SubContent>주방 · 에어컨 · 무선 인터넷 · 헤어드라이어</SubContent>
            <GradArea>
              <Grad>
                <MdGrade />
                <Text color="#000">{info.rating}</Text>
                <Text color="gray">(후기 2개)</Text>
              </Grad>
            </GradArea>
          </Section>
        </CardArea>
      </RowCardArea>
    </Link>
  )
}

const RowCardArea = styled.div`
  display: flex;
  height: 100%;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`

const CardArea = styled.div`
  display: flex;
  flex-grow: 1;
  height: 200px;
  border-radius: 12px;
  padding: 18px 0;
`
const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 200px;
  margin-left: 16px;
  width: 200px;
`
const Content = styled.div`
  width: 100%;
  font-size: 18px;
  color: #222222;
`

const SubContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  color: #8a8a8a;
  font-size: 14px;
`

const Hr = styled.div`
  margin-top: 11px;
  width: 32px;
  border-top: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  margin-bottom: 5px;
`

const GradArea = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  margin-top: -10px;
  svg {
    color: #ff385c;
  }
`

const Grad = styled.div`
  display: flex;
`
const IconArea = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  display: flex;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  svg {
    font-size: 20px;
  }
`

export default RowCard
