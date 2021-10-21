import React from 'react';
import styled from 'styled-components';
import Text from '../elements/Text';

const SignModal = (props) => {
	//TODO 회원가입 로그인 정규식 체크

	// ! 모달 view 관련 state
	const { _signUpStatus, _signInStatus } = props;
	const [signUpStatus, setSignUpStatus] = React.useState(_signUpStatus);
	const [signInStatus, setSignInStatus] = React.useState(_signInStatus);

	// ! 회원가입 state
	const [signUpTel, setSignUpTel] = React.useState('');
	const [signUpPwd, setSignUpPwd] = React.useState('');
	const [signUpPwd_chk, setSignUpPwd_chk] = React.useState('');

	const submitSignUp = () => {
		setSignUpStatus(signUpStatus + 1);
		console.log(signUpTel, signUpPwd, signUpPwd_chk);
	};

	// ! 로그인 state
	const [signInTel, setSignInTel] = React.useState('');
	const [signInPwd, setSignInPwd] = React.useState('');

	const submitSignIn = () => {
		setSignInStatus(signInStatus + 1);
		console.log(signInTel, signInPwd);
	};

	return (
		<>
			{signUpStatus > 0 && (
				<SignUp>
					<Text bold="700" fontSize="1.4rem">
						{signUpStatus === 1 && '전화번호를 입력하세요'}
						{signUpStatus === 2 && '패스워드를 입력하세요'}
						{signUpStatus === 3 && '패스워드를 확인해주세요'}
						{signUpStatus === 4 && (
							<i className="fab fa-airbnb">
								<span> </span>회원가입이 완료되었습니다.
							</i>
						)}
					</Text>
					{signUpStatus === 1 && (
						<Input onChange={(e) => setSignUpTel(e.target.value)} />
					)}
					{signUpStatus === 2 && (
						<Input
							onChange={(e) => setSignUpPwd(e.target.value)}
							type="password"
						/>
					)}
					{signUpStatus === 3 && (
						<Input
							onChange={(e) => setSignUpPwd_chk(e.target.value)}
							type="password"
						/>
					)}
					{signUpStatus < 3 && (
						<ContinueBtn
							onClick={() => {
								setSignUpStatus(signUpStatus + 1);
							}}
						>
							계속
						</ContinueBtn>
					)}
					{signUpStatus === 3 && (
						<ContinueBtn onClick={submitSignUp}>
							회원가입 하기
						</ContinueBtn>
					)}
					{signUpStatus === 4 && (
						<ContinueBtn
							onClick={() => {
								setSignUpStatus(0);
							}}
						>
							사이트 둘러보기
						</ContinueBtn>
					)}
				</SignUp>
			)}
			{signInStatus > 0 && (
				<SignUp>
					<Text bold="700" fontSize="1.4rem">
						{signInStatus === 1 && '전화번호를 입력하세요'}
						{signInStatus === 2 && '패스워드를 입력하세요'}
						{signInStatus === 3 && (
							<i className="fab fa-airbnb">
								<span> </span>로그인이 완료되었습니다.
							</i>
						)}
					</Text>
					{signInStatus === 1 && <Input />}
					{signInStatus === 2 && <Input type="password" />}

					{signInStatus === 1 && (
						<ContinueBtn
							onClick={() => {
								setSignInStatus(signInStatus + 1);
							}}
						>
							계속
						</ContinueBtn>
					)}
					{signInStatus === 2 && (
						<ContinueBtn onClick={submitSignIn}>
							로그인 하기
						</ContinueBtn>
					)}
					{signInStatus === 3 && (
						<ContinueBtn
							onClick={() => {
								setSignInStatus(0);
							}}
						>
							사이트 둘러보기
						</ContinueBtn>
					)}
				</SignUp>
			)}
		</>
	);
};

const SignUp = styled.div`
	width: 30rem;
	height: 35rem;
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
`;

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
`;

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
`;

export default SignModal;
