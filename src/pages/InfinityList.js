import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import { getRoomListDB } from '../redux/async/room'
import Map from '../components/Map'

const InfinityList = () => {
  const dispatch = useDispatch()
  const cardList = useSelector(state => state.room.list)
  const [toggleStatus, setToggleStatus] = React.useState(true)
  const categoryList = [
    '트리하우스',
    '캠핑카',
    '멋진 수영장',
    '객잔',
    '화물 컨테이너',
    '해변 근처',
    '료칸',
    '초소형 주택',
    '섬',
    '하우스보트',
    '보트',
  ]

  React.useEffect(() => {
    dispatch(getRoomListDB())
  }, [])

  const componentToggle = () => {
    // true : list , false : map
    const componentStatus = toggleStatus
    componentStatus ? setToggleStatus(false) : setToggleStatus(true)
  }

  return (
    <>
      <h2>Air Bnb InfinityList</h2>
      {/* 카테고리 영역 */}
      <NavArea>
        <Nav>
          <CategoryArea>
            <CategoryListArea>
              {categoryList.map((value, idx) => {
                return (
                  <Category key={idx}>
                    <Text>{value}</Text>
                  </Category>
                )
              })}
            </CategoryListArea>
          </CategoryArea>
        </Nav>
      </NavArea>
      {toggleStatus ? (
        <>
          <CardContentsArea>
            <CardListArea>
              {cardList.length > 0 &&
                cardList.map((v, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <Card image_url={v.imageUrl} />
                    </React.Fragment>
                  )
                })}
            </CardListArea>
          </CardContentsArea>
        </>
      ) : (
        <>
          <Map />
        </>
      )}
      <button onClick={componentToggle}>지도로 보기</button>
    </>
  )
}

const NavArea = styled.div`
  position: sticky;
  width: 100%;
  margin-top: 8px;
  padding-bottom: 8px;
  top: 5px;
  z-index: 3;
  background-color: #fff;
`

const Nav = styled.div`
  margin: 0 auto !important;
  position: relative !important;
  padding-left: 80px !important;
  padding-right: 80px !important;
`
const CategoryArea = styled.div`
  -webkit-box-align: center !important;
  padding-top: 8px;
  box-sizing: border-box;
  display: flex !important;
  align-items: center !important;
  width: 100%;
`

const CategoryListArea = styled.div`
  -webkit-box-flex: 1;
  display: flex;
  min-width: 1px;
  flex-grow: 1;
`

const Category = styled.div`
  cursor: pointer;
  text-align: center;
  border: none;
  outline: none;
  padding: 10px;
  margin: 6px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  border-radius: 8px;
  background: transparent;
  color: #717171;
  transition: box-shadow 0.2s ease, -ms-transform 0.1s ease,
    -webkit-transform 0.1s ease, transform 0.1s ease !important;
  -webkit-tap-highlight-color: transparent !important;
`
const Text = styled.div``

const CardContentsArea = styled.div`
  background-color: transparent;
  @media (min-width: 1128px) {
    margin: 0px auto;
    position: relative;
    padding-left: 80px;
    padding-right: 80px;
    max-width: none;
  }
`

const CardListArea = styled.div`
  display: grid;
  gap: 24px;
  box-sizing: border-box;
  @media screen and (min-width: 1607px) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }
  @media screen and (min-width: 960px) and (max-width: 1607px) {
    row-gap: 32px;
    grid-template-columns: repeat(4, minmax(0px, 1fr)) !important;
  }
  @media screen and (min-width: 551px) and (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
  @media screen and (min-width: 0px) and (max-width: 551px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
`

export default InfinityList
