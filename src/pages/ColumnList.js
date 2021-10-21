import React from 'react'
import styled from 'styled-components'
import Text from '../elements/Text'
import RowCard from '../components/RowCard'
import Map from '../components/Map'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { getRoomListDB } from '../redux/async/room'
import { useSelector, useDispatch } from 'react-redux'

const ColumnList = () => {
  const dispatch = useDispatch()
  const roomList = useSelector(state => state.room.list)
  console.log('roomList', roomList)
  const [page, setPage] = React.useState(1)
  const handleChange = (event, value) => {
    setPage(value)
  }

  React.useEffect(() => {
    dispatch(getRoomListDB())
  }, [])
  return (
    <FlexContent>
      <Contents>
        <RoomInfoArea>
          <Section>
            <Text fontSize="14px" color="#222">
              300개 이상의 숙소
            </Text>
            <Text fontSize="32px" bold="800" color="#222">
              서울의 숙소
            </Text>
          </Section>
          <Section>
            <OptionButton>취소 수수료 없음</OptionButton>
            <OptionButton>숙소 유형</OptionButton>
            <OptionButton>요금</OptionButton>
            <OptionButton>즉시 예약</OptionButton>
            <OptionButton>필터 추가하기</OptionButton>
          </Section>
          <Section>
            <Text fontSize="14px" bold="400" color="rgb(113,113,133)">
              여행 날짜와 게스트 인원수를 이볅하면 1박당 총 요금을 확인할 수
              있습니다.
            </Text>
            <Text fontSize="14px" bold="400" color="#222">
              예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.자세히
              알아보기
            </Text>
          </Section>
          <CardListArea>
            {roomList.length > 0 &&
              roomList.map((info, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <RowCard info={info} />
                  </React.Fragment>
                )
              })}
          </CardListArea>
          <Stack spacing={2}>
            <Pagination
              count={15}
              defaultPage={1}
              siblingCount={1}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </RoomInfoArea>
        <MapArea>
          <Map roomList={roomList} type={false} />
        </MapArea>
      </Contents>
    </FlexContent>
  )
}

const FlexContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Contents = styled.div`
  display: flex;
`

const RoomInfoArea = styled.div`
  padding: 24px;
  @media (min-width: 1128px) {
    width: 42vw;
    height: 100%;
  }
`

const Section = styled.div`
  margin-bottom: 24px;
`

const CardListArea = styled.div``

const MapArea = styled.div`
  background-color: royalblue;
  @media (min-width: 1128px) {
    position: fixed;
    right: 0;
    width: 56vw;
    height: 100%;
  }
`
const OptionButton = styled.button`
  cursor: pointer;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 30px;
  background-color: #fff;
  color: rgb(34, 34, 34);
  padding: 8px 16px;
  font-size: 12px;
  margin-right: 8px;
`
export default ColumnList
