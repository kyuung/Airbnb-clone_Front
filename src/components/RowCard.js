import { getByDisplayValue } from '@testing-library/dom'
import React from 'react'
import styled from 'styled-components'
import Img from '../elements/Img'
import Text from '../elements/Text'
import { MdGrade } from 'react-icons/md'
import { BsHeart } from 'react-icons/bs'

const RowCard = () => {
  return (
    <RowCardArea>
      <CardArea>
        <Img
          bradius="1rem"
          width="18rem"
          height="12rem"
          src="https://a0.muscache.com/im/pictures/6edce0dc-bafb-4361-b532-0a80d7639d4f.jpg?im_w=720"
        />
        <Section>
          <IconArea>
            <BsHeart />
          </IconArea>
          <SubContent>관악의 공동 주택 전체</SubContent>
          <Content>서울 32평 아파트 전체 렌트 확 트인뷰 장기 거주하기</Content>
          <Hr />
          <SubContent>
            최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개
          </SubContent>
          <SubContent>주방 · 에어컨 · 무선 인터넷 · 헤어드라이어</SubContent>
          <GradArea>
            <Grad>
              <MdGrade />
              <Text color="#000">4.94</Text>
              <Text color="gray">(후기 34개)</Text>
            </Grad>
          </GradArea>
        </Section>
      </CardArea>
    </RowCardArea>
  )
}

const RowCardArea = styled.div`
  display: flex;
  height: 100%;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
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
`
const Content = styled.div`
  font-size: 18px;
  color: #222222;
`

const SubContent = styled.div`
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
