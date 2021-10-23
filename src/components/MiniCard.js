import React from 'react'
import styled from 'styled-components'
import Img from '../elements/Img'
import Text from '../elements/Text'
import { history } from '../redux/configureStore'

const MiniCard = () => {
  return (
    <section
      style={{
        width: '95vw',
      }}
    >
      <ScrollX>
        <FlexCenterR
          onClick={() => {
            history.push('/cardmap-list?category=서울')
          }}
        >
          <Img
            src="https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=240"
            width="5.5rem"
            height="5.5rem"
            bradius="1rem"
            others="margin-right:1rem;"
          />
          <FlexCenter style={{ alignItems: 'flex-start' }}>
            <Text bold="700">서울</Text>
            <Text>차로 30분 거리</Text>
          </FlexCenter>
        </FlexCenterR>
        <FlexCenterR
          onClick={() => {
            history.push('/cardmap-list?category=대구')
          }}
        >
          <Img
            src="https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?im_q=medq&im_w=240"
            width="5.5rem"
            height="5.5rem"
            bradius="1rem"
            others="margin-right:1rem;margin-left:1rem;"
          />
          <FlexCenter style={{ alignItems: 'flex-start' }}>
            <Text bold="700">대구</Text>
            <Text>차로 2.5시간 거리</Text>
          </FlexCenter>
        </FlexCenterR>
        <FlexCenterR
          onClick={() => {
            history.push('/cardmap-list?category=부산')
          }}
        >
          <Img
            src="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240"
            width="5.5rem"
            height="5.5rem"
            bradius="1rem"
            others="margin-right:1rem;"
          />
          <FlexCenter style={{ alignItems: 'flex-start' }}>
            <Text bold="700">부산</Text>
            <Text>차로 5시간 거리</Text>
          </FlexCenter>
        </FlexCenterR>
        <FlexCenterR
          onClick={() => {
            history.push('/cardmap-list?category=완주군')
          }}
        >
          <Img
            src="https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240"
            width="5.5rem"
            height="5.5rem"
            bradius="1rem"
            others="margin-right:1rem;margin-left:0.5rem;"
          />
          <FlexCenter style={{ alignItems: 'flex-start' }}>
            <Text bold="700">완주군</Text>
            <Text>차로 2.5시간 거리</Text>
          </FlexCenter>
        </FlexCenterR>
        <FlexCenterR
          onClick={() => {
            history.push('/cardmap-list?category=양양군')
          }}
        >
          <Img
            src="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240"
            width="5.5rem"
            height="5.5rem"
            bradius="1rem"
            others="margin-right:1rem;"
          />
          <FlexCenter style={{ alignItems: 'flex-start' }}>
            <Text bold="700">양양군</Text>
            <Text>차로 2.5시간 거리</Text>
          </FlexCenter>
        </FlexCenterR>
        <FlexCenterR
          onClick={() => {
            history.push('/cardmap-list?category=전주시')
          }}
        >
          <Img
            src="https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240"
            width="5.5rem"
            height="5.5rem"
            bradius="1rem"
            others="margin-right:1rem;"
          />
          <FlexCenter style={{ alignItems: 'flex-start' }}>
            <Text bold="700">전주시</Text>
            <Text>차로 2.5시간 거리</Text>
          </FlexCenter>
        </FlexCenterR>
        <FlexCenterR
          onClick={() => {
            history.push('/cardmap-list?category=속초시')
          }}
        >
          <Img
            src="https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240"
            width="5.5rem"
            height="5.5rem"
            bradius="1rem"
            others="margin-right:1rem;"
          />
          <FlexCenter style={{ alignItems: 'flex-start' }}>
            <Text bold="700">속초시</Text>
            <Text>차로 3시간 거리</Text>
          </FlexCenter>
        </FlexCenterR>
        <FlexCenterR
          onClick={() => {
            history.push('/cardmap-list?category=고성군')
          }}
        >
          <Img
            src="https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240"
            width="5.5rem"
            height="5.5rem"
            bradius="1rem"
            others="margin-right:1rem;"
          />
          <FlexCenter style={{ alignItems: 'flex-start' }}>
            <Text bold="700">고성군</Text>
            <Text>차로 3시간 거리</Text>
          </FlexCenter>
        </FlexCenterR>
      </ScrollX>
    </section>
  )
}

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FlexCenterR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  cursor: pointer;
`

const ScrollX = styled.div`
  display: grid;
  --column-count: 4;
  padding-left: 24px;
  padding-right: 24px;
  overflow-x: auto;
  grid-template-rows: repeat(2, auto);
  scroll-padding: 0px 24px;
  scroll-snap-type: x mandatory;
  grid-auto-flow: column;
  gap: 12px;
  row-gap: 12px;
  column-gap: 12px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
export default MiniCard
