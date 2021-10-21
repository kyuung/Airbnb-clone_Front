import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import { getRoomListDB } from '../redux/async/room'
import Map from '../components/Map'
import { BsFillMapFill } from 'react-icons/bs'
import { GoListUnordered } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'
import { BiFilter } from 'react-icons/bi'

/**
 * @author jinsung
 * @returns 유현한 검색 리스트
 */
const InfinityList = () => {
  const dispatch = useDispatch()
  const roomList = useSelector(state => state.room.list)
  console.log('list', roomList)
  const [toggleStatus, setToggleStatus] = React.useState(true)
  const categoryList = ['멋진 수영장', '농장', '성', '해변 근처', '캠핑카']

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
          <FilterArea>
            <FilterButton>
              언제든
              <IoIosArrowDown />
            </FilterButton>
            <FilterButton>
              인원
              <IoIosArrowDown />
            </FilterButton>
            <FilterButton>
              <BiFilter />
              필터
            </FilterButton>
          </FilterArea>
        </Nav>
      </NavArea>
      {toggleStatus ? (
        <>
          <CardContentsArea>
            <CardListArea>
              {roomList &&
                roomList.length > 0 &&
                roomList.map((info, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <Card info={info} />
                    </React.Fragment>
                  )
                })}
            </CardListArea>
          </CardContentsArea>
        </>
      ) : (
        <>
          <Map roomList={roomList} type={true} />
        </>
      )}
      <ToggleBtn onClick={componentToggle}>
        {toggleStatus ? (
          <>
            지도 표시하기
            <BsFillMapFill />
          </>
        ) : (
          <>
            목록 보기
            <GoListUnordered style={{ fontSize: '16px' }} />
          </>
        )}
      </ToggleBtn>
    </>
  )
}

const NavArea = styled.div`
  position: sticky;
  width: 100%;
  margin-top: 8px;
  padding-bottom: 8px;
  top: 0;
  z-index: 3;
  background-color: #fff;
`

const Nav = styled.div`
  display: flex;
  margin: 0 auto !important;
  position: relative !important;
  padding-left: 80px !important;
  padding-right: 80px !important;
  white-space: nowrap;
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

const FilterArea = styled.div`
  display: flex;
  align-items: center;
`
const FilterButton = styled.button`
  height: 40px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px 16px;
  margin-right: 8px;
  cursor: pointer;
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
    margin-bottom: 50px;
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

const ToggleBtn = styled.button`
  position: fixed;
  bottom: 23px;
  right: 46%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
  border-radius: 24px;
  padding: 14px 19px;
  color: #fff;
  cursor: pointer;
  border-width: 1px;
  transition-property: -ms-transform, -webkit-transform, transform !important;
  transition-duration: 0.25s, 0.25s, 0.25s !important;
  transition-timing-function: ease, ease, ease !important;
  transition-delay: 0s, 0s, 0s !important;
  :hover {
    transform: scale(1.05);
  }
  svg {
    margin-left: 5px;
  }
`

export default InfinityList
