import React from 'react';
import styled from 'styled-components';
import Logo from '../elements/Logo';
import Text from '../elements/Text';
import HButton from '../elements/HButton';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const MainHeader = () => {
	const [readStatus, setReadStatus] = React.useState(0);
	const [checkInDate, setCheckInDate] = React.useState('');
	const [checkOutDate, setCheckOutDate] = React.useState('');
	const [counter, setCounter] = React.useState(0);

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll); //clean up
		};
	}, []);

	const handleScroll = (e) => {
		console.log('scrolled');
		console.log(e.target.scrollingElement.scrollHeight);
	};

	const readRooms = () => {
		if (checkInDate === '' || checkOutDate === '' || counter === 0) {
			window.alert(
				'체크인 날짜, 체크아웃 날짜, 인원 수를 전부 선택해주세요.'
			);
		}
		console.log(checkInDate, checkOutDate, counter);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<FlexContainer>
				<div style={{ marginLeft: '5.5rem' }}>
					<Logo fillColor="white" />
				</div>
				<FlexCenterR style={{ width: '16rem', color: 'white' }}>
					<HeaderTextBtn>
						<Text color="white" fontSize="1rem">
							숙소
						</Text>
					</HeaderTextBtn>
					<HeaderTextBtn>
						<Text color="white" fontSize="1rem">
							체험
						</Text>
					</HeaderTextBtn>
					<HeaderTextBtn>
						<Text color="white" fontSize="1rem">
							온라인체험
						</Text>
					</HeaderTextBtn>
				</FlexCenterR>
				<FlexCenterR
					style={{
						width: '20rem',
						justifyContent: 'center',
						padding: 0,
						paddingRight: '5.5rem',
					}}
				>
					<Text
						bold="600"
						fontSize="0.9rem"
						others="margin-right:1.2rem"
						color="white"
					>
						호스트 되기
					</Text>
					<i
						className="fas fa-globe"
						style={{
							marginRight: '1.2rem',
							fontSize: '1.2rem',
							marginBottom: '0.2rem',
							color: 'white',
						}}
					></i>
					<HButton />
				</FlexCenterR>
			</FlexContainer>
			<HeaderFeatures>
				<FeaturesBtn>
					<ColumnText>
						<Text bold="700">위치</Text>
						<BtnInput
							placeholder="어디로 여행가세요?"
							style={{
								border: 'none',
								marginTop: '0.4rem',
							}}
						/>
					</ColumnText>
				</FeaturesBtn>
				<FeaturesBtn
					onClick={() => {
						setReadStatus(1);
					}}
				>
					<ColumnText>
						<Text bold="700">체크인</Text>
						<Text
							color="#717171"
							fontSize="0.9rem"
							others="margin-top: 0.4rem;"
						>
							날짜 입력
						</Text>
					</ColumnText>
				</FeaturesBtn>
				<FeaturesBtn
					onClick={() => {
						setReadStatus(2);
					}}
				>
					<ColumnText>
						<Text bold="700">체크아웃</Text>
						<Text
							color="#717171"
							fontSize="0.9rem"
							others="margin-top: 0.4rem;"
						>
							날짜 입력
						</Text>
					</ColumnText>
				</FeaturesBtn>
				<FeaturesBtn
					onClick={() => {
						setReadStatus(3);
					}}
				>
					<ColumnText>
						<Text bold="700">인원</Text>
						<Text
							color="#717171"
							fontSize="0.9rem"
							others="margin-top: 0.4rem;"
						>
							게스트 추가
						</Text>
					</ColumnText>
				</FeaturesBtn>
			</HeaderFeatures>
			{readStatus > 0 && (
				<Modal>
					<CloseBtn>X</CloseBtn>
					{readStatus === 1 && (
						<Text
							bold="700"
							fontSize="2rem"
							others="margin-bottom:1.3rem;"
						>
							체크인
						</Text>
					)}
					{readStatus === 2 && (
						<Text
							bold="700"
							fontSize="2rem"
							others="margin-bottom:1.3rem;"
						>
							체크아웃
						</Text>
					)}
					{readStatus === 3 && (
						<Text
							bold="700"
							fontSize="2rem"
							others="margin-bottom:1.3rem;"
						>
							인원수
						</Text>
					)}
					{readStatus < 3 && (
						<DayPicker
							format="DD/MM/YYYY"
							onDayClick={(e) => {
								let day = e.toLocaleDateString();

								day = day.replaceAll(' ', '');
								day = day.slice(0, 10);
								if (day.slice(-1) === '.') {
									day = day.slice(0, -1);
								}
								if (readStatus === 0) {
									setCheckInDate(day);
									setReadStatus(1);
								} else if (readStatus === 1) {
									setCheckInDate(day);
									setReadStatus(2);
								} else if (readStatus === 2) {
									setCheckOutDate(day);
									setReadStatus(3);
								}
							}}
						/>
					)}
					{readStatus === 3 && (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Flex style={{ flexDirection: 'row' }}>
								<CounterBtn
									onClick={() =>
										counter > 0 && setCounter(counter - 1)
									}
								>
									-
								</CounterBtn>
								<Text
									fontSize="1.6rem"
									others="margin:0 0.5rem;"
								>
									{counter}
								</Text>
								<CounterBtn
									onClick={() => setCounter(counter + 1)}
								>
									+
								</CounterBtn>
							</Flex>
							<SubmitBtn onClick={readRooms}>조회하기</SubmitBtn>
						</div>
					)}
				</Modal>
			)}
		</div>
	);
};

const FlexContainer = styled.div`
	width: 100vw;
	height: 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 0 5.5rem;
	margin: 0;
	position: absolute;
	top: 4rem;
`;

const FlexCenterR = styled.div`
	width: 100vw;
	height: 6rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 0 5.5rem;
	margin: 0;
	background: none;
`;

const HeaderTextBtn = styled.button`
	border: none;
	width: 6rem;
	background: none;
	cursor: pointer;
`;

const HeaderFeatures = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	background: white;
	align-items: center;
	top: 10rem;
	width: 50rem;
	height: 4.5rem;
	border-radius: 10rem;
`;

const FeaturesBtn = styled.button`
	width: 6rem;
	height: 4.5rem;
	background: white;
	cursor: pointer;
	border-radius: 10rem;
	border: none;

	&:nth-child(1) {
		width: 15rem;
	}
	&:nth-child(2) {
		width: 10rem;
	}
	&:nth-child(3) {
		width: 10rem;
	}
	&:nth-child(4) {
		width: 15rem;
	}
	&:hover {
		background: #dddddd;
	}
`;

const ColumnText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding-left: 2rem;
`;

const BtnInput = styled.input`
	background: inherit;
	font-size: 0.9rem;
	color: #717171;
`;

const Modal = styled.article`
	width: 50rem;
	height: 27rem;
	background-color: #ffff;
	position: absolute;
	top: 16rem;
	border-radius: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Flex = styled.div`
	margin-left: 3rem;
	margin-right: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CounterBtn = styled.button`
	width: 3rem;
	height: 3rem;
	border-radius: 3rem;
	border: none;
	margin-left: 1rem;
	margin-right: 1rem;
	font-weight: 700;
	opacity: 80%;
	cursor: pointer;
	transition: background-color 150ms ease-in-out;
	&:hover {
		background-color: black;
		color: white;
	}
`;

const SubmitBtn = styled.button`
	width: 12rem;
	height: 3rem;
	border: none;
	margin-top: 2rem;
	border-radius: 2rem;
	opacity: 80%;
	color: black;
	font-size: 1rem;
	font-weight: 700;
	cursor: pointer;
	transition: background-color 150ms ease-in-out;
	&:hover {
		background-color: black;
		color: white;
	}
`;

const CloseBtn = styled.button`
	width: 2.7rem;
	height: 2.7rem;
	border-radius: 2rem;
	border: none;
	position: absolute;
	top: 0;
	right: 0;
	margin: 2rem;
	transition: background-color 150ms ease-in-out;
	&:hover {
		background-color: red;
		color: white;
	}
`;

export default MainHeader;
