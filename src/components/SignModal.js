import React from 'react'
import styled from 'styled-components'
import Text from '../elements/Text'

const SignModal = props => {
  const phoneNum = /^[0-9]+$/
  const pwdNum = /^[0-9]+$/
  const nameChk = /^[가-힣a-zA-Z]+$/
  const emailChk = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/

  const { _signStatus } = props

  const [signStatus, setSignStatus] = React.useState(_signStatus)
  const [basicTel, setBasicTel] = React.useState('')

  const [signInModal, setSignInModal] = React.useState(false)
  const [signUpModal, setSignUpModal] = React.useState(false)

  // * 로그인 input
  const [signInPin, setSignInPin] = React.useState('')
  const [signInPhone, setSignInPhone] = React.useState('')

  // * 회원가입 Input
  const [signUpName, setSignUpName] = React.useState('')
  const [signUpMail, setSignUpMail] = React.useState('')
  const [signUpPin, setSignUpPin] = React.useState('')
  const [signUpPin_chk, setSignUpPin_chk] = React.useState('')

  const phoneConfirm = () => {
    if (phoneNum.test(basicTel) === false) {
      window.alert('핸드폰 번호를 입력해주세요.')
      return
    } else if (basicTel.length !== 11) {
      window.alert('핸드폰 번호 11자를 입력해주세요.')
      return
    }
    const test = window.confirm('true/false')
    if (test) {
      // true : 로그인
      setSignInModal(true)
      setSignStatus(false)
    } else if (!test) {
      // false : 회원가입
      setSignUpModal(true)
      setSignStatus(false)
    }
  }

  const logIn = () => {
    if (phoneNum.test(signInPhone) === false || signInPhone.length !== 11) {
      window.alert('핸드폰 번호로 11자 입력해주세요.')
      return
    } else if (pwdNum.test(signInPin) === false || signInPin.length !== 6) {
      window.alert('핀번호는 숫자로 6자 입력해주세요.')
      return
    }
    console.log(signInPin, signInPhone)
    setSignInModal(false)
  }

  const signUp = () => {
    if (!nameChk.test(signUpName)) {
      window.alert('이름은 한글이나 영문으로 입력해주세요.')
      return
    } else if (!emailChk.test(signUpMail)) {
      window.alert('이메일은 이메일 형식으로 입력해주세요.')
      return
    } else if (!pwdNum.test(signUpPin)) {
      window.alert('핀번호는 숫자로 입력해주세요.')
      return
    } else if (signUpPin !== signUpPin_chk) {
      window.alert('핀번호와 핀번호 확인이 맞지 않습니다.')
      return
    }
  }

  return (
    <>
      {signStatus && (
        <SignUp>
          <XBtn
            onClick={() => {
              setSignStatus(false)
            }}
          >
            X
          </XBtn>
          <Text bold="700" fontSize="1.8rem" others="margin-bottom:3rem;">
            로그인 또는 회원가입
          </Text>
          <Text bold="700" fontSize="1.2rem">
            전화번호를 입력하세요.
          </Text>
          <Input maxLength="11" onChange={e => setBasicTel(e.target.value)} />
          <ContinueBtn onClick={phoneConfirm}>제출하기</ContinueBtn>
        </SignUp>
      )}

      {signInModal && (
        <SignUp>
          <XBtn
            onClick={() => {
              setSignInModal(false)
            }}
          >
            X
          </XBtn>
          <Text bold="700" fontSize="1.8rem" others="margin-bottom:3rem;">
            로그인
          </Text>
          <Text bold="700" fontSize="1.2rem">
            핸드폰 번호를 입력하세요.
          </Text>
          <Input
            maxLength="11"
            onChange={e => setSignInPhone(e.target.value)}
          />
          <Text bold="700" fontSize="1.2rem" others="margin-top:2rem;">
            핀 번호를 입력하세요.
          </Text>
          <Input
            maxLength="6"
            onChange={e => setSignInPin(e.target.value)}
            type="password"
          />
          <ContinueBtn style={{ marginTop: '2rem' }} onClick={logIn}>
            로그인
          </ContinueBtn>
        </SignUp>
      )}

      {signUpModal && (
        <SignUp>
          <XBtn
            onClick={() => {
              setSignUpModal(false)
            }}
          >
            X
          </XBtn>
          <Text bold="700" fontSize="1.8rem" others="margin-bottom:1rem;">
            회원가입
          </Text>
          <Text bold="700" fontSize="1.2rem" others="margin-top:1rem;">
            이름
          </Text>
          <Input onChange={e => setSignUpName(e.target.value)} />
          <Text bold="700" fontSize="1.2rem" others="margin-top:1rem;">
            E-mail
          </Text>
          <Input onChange={e => setSignUpMail(e.target.value)} />
          <Text
            maxLength="6"
            bold="700"
            fontSize="1.2rem"
            others="margin-top:1rem;"
          >
            핀 번호를 입력하세요.
          </Text>
          <Input
            maxLength="6"
            type="password"
            onChange={e => setSignUpPin(e.target.value)}
          />
          <Text bold="700" fontSize="1.2rem" others="margin-top:1rem;">
            핀 번호를 한번 더 입력하세요.
          </Text>
          <Input
            maxLength="6"
            type="password"
            onChange={e => setSignUpPin_chk(e.target.value)}
          />
          <ContinueBtn style={{ marginTop: '2rem' }} onClick={signUp}>
            회원가입
          </ContinueBtn>
        </SignUp>
      )}
    </>
  )
}

const SignUp = styled.div`
  width: 30rem;
  height: 40rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 40vw;
  top: 5rem;
  z-index: 3;
  border-radius: 3rem;
`

const Input = styled.input`
  width: 22rem;
  height: 3rem;
  border: 1px solid #dddddd;
  border-radius: 0.8rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  padding-left: 1rem;
  &:active {
    border: 1px solid black;
  }
`

const ContinueBtn = styled.button`
  width: 23rem;
  height: 3rem;
  background-color: rgb(255, 56, 92);
  border: none;
  border-radius: 0.8rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
`

const XBtn = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
  &:hover {
    background-color: rgb(255, 56, 92);
  }
`

export default SignModal
