import React from 'react';
import styled from 'styled-components';
import SignModal from '../components/SignModal';

const HButton = () => {
	const [basicModalStatus, setBasicModalStauts] = React.useState(false);
	const [signUp, setSignUp] = React.useState(false);
	const [signIn, setSignIn] = React.useState(false);
	return (
		<div>
			<Container
				onClick={() => {
					basicModalStatus
						? setBasicModalStauts(false)
						: setBasicModalStauts(true);
				}}
			>
				<I className="fas fa-grip-lines"></I>
				<I className="fas fa-user-circle"></I>
			</Container>
			{basicModalStatus && (
				<UserModal>
					<UserModalBtn
						onClick={() => {
							signUp ? setSignUp(false) : setSignUp(true);
						}}
					>
						회원가입
					</UserModalBtn>
					<UserModalBtn
						onClick={() => {
							signIn ? setSignIn(false) : setSignIn(true);
						}}
					>
						로그인
					</UserModalBtn>
				</UserModal>
			)}
			{signUp && <SignModal _signUpStatus={1} />}
			{signIn && <SignModal _signInStatus={1} />}
		</div>
	);
};

const Container = styled.button`
	width: 6rem;
	height: 3rem;
	border: 1px solid #dddddd;
	border-radius: 3rem;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5.5rem;
	cursor: pointer;
`;

const I = styled.i`
	font-size: 1.2rem;
	color: #717171;
	&:first-child {
		margin-right: 0.8rem;
	}
	&:nth-child(2) {
		font-size: 2rem;
	}
`;

const UserModal = styled.div`
	width: 15rem;
	height: 10rem;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	top: 5rem;
	right: 11rem;
	border-radius: 1.5rem;
	z-index: 2;
`;

const UserModalBtn = styled.div`
	width: 15rem;
	height: 5rem;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 150ms ease-in-out;
	transition: font-size 150ms ease-in-out;
	cursor: pointer;
	&:nth-child(1) {
		border-top-left-radius: 1.5rem;
		border-top-right-radius: 1.5rem;
	}
	&:nth-child(2) {
		border-bottom-left-radius: 1.5rem;
		border-bottom-right-radius: 1.5rem;
	}
	&:hover {
		background-color: #dddddd;
		opacity: 80%;
		font-weight: 700;
		font-size: 1.1rem;
	}
`;

export default HButton;
