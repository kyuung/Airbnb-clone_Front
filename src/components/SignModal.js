import React from 'react';
import styled from 'styled-components';
import Text from '../elements/Text';

const SignModal = (props) => {
	const phoneNum = /^[0-9]+$/;
	const pwdNum = /^[0-9]+$/;

	// ! 모달 view 관련 state
	const { _signUpStatus, _signInStatus } = props;
	const [signUpStatus, setSignUpStatus] = React.useState(_signUpStatus);
	const [signInStatus, setSignInStatus] = React.useState(_signInStatus);

	// ! 회원가입 state
	const [signUpTel, setSignUpTel] = React.useState('');
	const [signUpPwd, setSignUpPwd] = React.useState('');
	const [signUpPwd_chk, setSignUpPwd_chk] = React.useState('');

	const submitSignUp = () => {
		if (signUpPwd !== signUpPwd_chk) {
			window.alert('이전 패스워드와 비밀번호가 맞지 않습니다.');
			return;
		} else if (pwdNum.test(signUpPwd_chk) === false) {
			window.alert('비밀번호는 숫자로 입력해주세요.');
			return;
		} else if (signUpPwd_chk.length !== 6) {
			window.alert('비밀번호는 숫자로 6자 입력해주세요.');
			return;
		}
		setSignUpStatus(signUpStatus + 1);
		// TODO 이쪽에서 회원가입 신청하기 ! ~!~!~!
	};

	// ! 로그인 state
	const [signInTel, setSignInTel] = React.useState('');
	const [signInPwd, setSignInPwd] = React.useState('');

	const submitSignIn = () => {
		if (pwdNum.test(signInPwd) === false) {
			window.alert('비밀번호는 숫자로 입력해주세요.');
			return;
		} else if (signInPwd.length !== 6) {
			window.alert('비밀번호는 6자로 입력해주세요.');
			return;
		}
		// TODO 이쪽에서 로그인 신청하기 ! ~!~!~!
		setSignInStatus(signInStatus + 1);
		console.log(signInTel, signInPwd);
	};

	return (
		<>
			{signUpStatus > 0 && (
				<SignUp>
					<XBtn onClick={() => setSignUpStatus(0)}>X</XBtn>
					<Text
						bold="700"
						fontSize="2rem"
						others="margin-bottom:2rem"
					>
						회원가입
					</Text>
					<Text bold="700" fontSize="1.4rem">
						{signUpStatus === 1 && '전화번호를 입력하세요'}
						{signUpStatus === 2 && '패스워드를 6자 입력하세요'}
						{signUpStatus === 3 && '패스워드를 6자 확인해주세요'}
						{signUpStatus === 4 && (
							<i className="fab fa-airbnb">
								<span> </span>회원가입이 완료되었습니다.
							</i>
						)}
					</Text>
					{signUpStatus === 1 && (
						<Input
							maxLength="11"
							onChange={(e) => setSignUpTel(e.target.value)}
						/>
					)}
					{signUpStatus === 2 && (
						<Input
							maxLength="6"
							onChange={(e) => setSignUpPwd(e.target.value)}
							type="password"
						/>
					)}
					{signUpStatus === 3 && (
						<Input
							maxLength="6"
							onChange={(e) => setSignUpPwd_chk(e.target.value)}
							type="password"
						/>
					)}
					{signUpStatus === 1 && (
						<ContinueBtn
							onClick={() => {
								if (phoneNum.test(signUpTel) === false) {
									window.alert('핸드폰 번호를 입력해주세요.');
									return;
								} else if (signUpTel.length !== 11) {
									window.alert(
										'핸드폰 번호 11자를 입력해주세요.'
									);
									return;
								}
								// TODO 첫번째 회원가입 요청해서 유저인지 아닌지 판별
								setSignUpStatus(signUpStatus + 1);
							}}
						>
							계속
						</ContinueBtn>
					)}
					{signUpStatus === 2 && (
						<ContinueBtn
							onClick={() => {
								if (pwdNum.test(signUpPwd) === false) {
									window.alert('숫자만 입력해주세요.');
									return;
								} else if (signUpPwd.length !== 6) {
									window.alert('6자 입력해주세요');
									return;
								}
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
					<XBtn onClick={() => setSignInStatus(0)}>X</XBtn>
					<Text
						bold="700"
						fontSize="2rem"
						others="margin-bottom:2rem"
					>
						로그인
					</Text>
					<Text bold="700" fontSize="1.4rem">
						{signInStatus === 1 && '전화번호를 입력하세요'}
						{signInStatus === 2 && '패스워드를 6자 입력하세요'}
						{signInStatus === 3 && (
							<i className="fab fa-airbnb">
								<span> </span>로그인이 완료되었습니다.
							</i>
						)}
					</Text>
					{signInStatus === 1 && (
						<Input
							maxLength="11"
							onChange={(e) => setSignInTel(e.target.value)}
						/>
					)}
					{signInStatus === 2 && (
						<Input
							maxLength="6"
							type="password"
							onChange={(e) => setSignInPwd(e.target.value)}
						/>
					)}

					{signInStatus === 1 && (
						<ContinueBtn
							onClick={() => {
								if (phoneNum.test(signInTel) === false) {
									window.alert('핸드폰 번호를 입력해주세요.');
									return;
								} else if (signInTel.length !== 11) {
									window.alert(
										'핸드폰 번호 11자를 입력해주세요.'
									);
									return;
								}
								// TODO 첫번째 회원가입 요청해서 유저인지 아닌지 판별
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
`;

export default SignModal;
