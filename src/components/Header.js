import React from 'react'
import styled from 'styled-components'
import HButton from '../elements/HButton'
import HInput from '../elements/HInput'
import Logo from '../elements/Logo'
import Text from '../elements/Text'

const Header = props => {
  const { type } = props
  if (type === 'basic') {
    return (
      <>
        <FlexCenterR>
          <Logo />
          <HInput />
          <FlexCenterR
            style={{
              width: '20rem',
              justifyContent: 'center',
              padding: 0,
              paddingRight: '5.5rem',
            }}
          >
            <Text bold="600" fontSize="0.9rem" others="margin-right:1.2rem">
              호스트 되기
            </Text>
            <i
              className="fas fa-globe"
              style={{
                marginRight: '1.2rem',
                fontSize: '1.2rem',
                marginBottom: '0.2rem',
              }}
            ></i>
            <HButton />
          </FlexCenterR>
        </FlexCenterR>
      </>
    )
  }
}

Header.defaultProps = {
  type: 'basic',
  others: '',
}

const FlexCenterR = styled.div`
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 5.5rem;
  margin: 0;
  background-color: #fff;
`

export default Header
