import React from 'react'
import styled from 'styled-components'
import Text from '../elements/Text'
import RowCard from '../components/RowCard'
import Map from '../components/Map'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { getRoomListDB } from '../redux/async/room'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import { setIsFocusReducer } from '../redux/modules/roomSlice'

/**
 * @author jinsung
 * @returns 지역별 목록 리스트
 */
const ColumnList = props => {
  const categoryNm = decodeURIComponent(props.location.search.substr(10))
  const dispatch = useDispatch()
  const roomList = useSelector(state => state.room.pageList)
  const paging = useSelector(state => state.room.paging)
  const [page, setPage] = React.useState(1)
  const handleChange = (event, value) => {
    const params = `page=${value}`
    dispatch(getRoomListDB(params))
    setPage(value)
    window.scrollTo(0, 0)
  }

  React.useEffect(() => {
    const params = `page=1&category=${categoryNm}`
    dispatch(getRoomListDB(params))
  }, [])

  const _handleOut = () => {
    dispatch(setIsFocusReducer(false))
  }
  return (
    <>
      <Header />
      <FlexContent>
        <Contents>
          <RoomInfoArea>
            <Section>
              <Text fontSize="14px" color="#222">
                300개 이상의 숙소
              </Text>
              <Text fontSize="32px" bold="800" color="#222">
                {categoryNm}의 숙소
              </Text>
            </Section>
            <Section>
              <OptionButton>취소 수수료 없음</OptionButton>
              <OptionButton>숙소 유형</OptionButton>
              <OptionButton>요금</OptionButton>
              <OptionButton>즉시 예약</OptionButton>
              <OptionButton>필터 추가하기</OptionButton>
            </Section>
            <Section onMouseEnter={_handleOut}>
              <Text
                fontSize="14px"
                bold="400"
                color="rgb(113,113,133)"
                margin="0 0 10px 0"
              >
                여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
                있습니다.
              </Text>
              <Text fontSize="14px" bold="400" color="#222">
                예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.자세히
                알아보기
              </Text>
            </Section>
            <CardListArea>
              <>
                {roomList.length > 0 &&
                  roomList.map((info, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <RowCard info={info} />
                      </React.Fragment>
                    )
                  })}
              </>
            </CardListArea>
            {roomList.length > 0 ? (
              <PaginationArea onMouseEnter={_handleOut}>
                <Stack spacing={2}>
                  <Pagination
                    count={paging.totalPage}
                    defaultPage={1}
                    siblingCount={1}
                    page={page}
                    onChange={handleChange}
                  />
                </Stack>
              </PaginationArea>
            ) : (
              <>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Text>숙소 정보가 없습니다.</Text>
                </div>
              </>
            )}
          </RoomInfoArea>
          <MapArea onMouseEnter={_handleOut}>
            <Map roomList={roomList} type={false} />
          </MapArea>
        </Contents>
      </FlexContent>
    </>
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
    width: 41vw;
    height: 100%;
  }
`

const Section = styled.div`
  margin-bottom: 24px;
`

const CardListArea = styled.div`
  height: 100%;
`

const MapArea = styled.div`
  background-color: royalblue;
  @media (min-width: 1128px) {
    position: fixed;
    top: 0;
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

const PaginationArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`
export default ColumnList
