import React from 'react';
import styled from 'styled-components';
import BigCard from '../components/BigCard';
import LiveCard from '../components/LiveCard';
import MiniCard from '../components/MiniCard';
import Img from '../elements/Img';
import Text from '../elements/Text';

const Main = () => {
	return (
		<>
			<section
				style={{
					width: '100vw',
					height: '30rem',
				}}
			>
				<Img
					width="100%"
					height="100%"
					others="display:flex; justify-content:center; align-items:center; flex-direction:column"
					src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560"
				>
					<Text bold="600" fontSize="1.2rem">
						어디든 상관없이 떠나고 싶을 때 에어비앤비가
						도와드립니다!
					</Text>
					<Button
						style={{
							marginTop: '1rem',
							height: '4rem',
							width: '14rem',
						}}
					>
						<Span>유연한 검색</Span>
					</Button>
				</Img>
			</section>
			<Section>
				<div
					style={{
						marginLeft: '5rem',
						marginTop: '4rem',
						marginBottom: '1rem',
					}}
				>
					<Text bold="700" fontSize="2rem">
						가까운 여행지 둘러보기
					</Text>
				</div>
				<MiniCard />
			</Section>
			<Section>
				<div
					style={{
						marginLeft: '5rem',
						marginTop: '4rem',
						marginBottom: '1rem',
					}}
				>
					<Text bold="700" fontSize="2rem">
						어디에서나, 여행은 살아보는거야!
					</Text>
				</div>
				<Section
					style={{
						width: '100vw',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<LiveCard />
				</Section>
			</Section>
			<Section
				style={{
					width: '100vw',
					alignItems: 'center',
					marginTop: '2rem',
				}}
			>
				<Img
					width="90vw"
					height="30rem"
					src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560"
					bradius="2rem"
				>
					<FlexCenter
						style={{
							height: '30rem',
							width: '18rem',
							alignItems: 'flex-start',
							marginLeft: '5rem',
						}}
					>
						<Text
							bold="700"
							color="white"
							fontSize="2.5rem"
							others="margin-bottom:1rem"
						>
							호스팅 시작하기
						</Text>
						<Text
							color="white"
							fontSize="1.2rem"
							others="margin-bottom:2rem"
						>
							집을 공유하여 부수입을 올리고 새로운 가능성을
							만나세요
						</Text>
						<Button
							style={{
								borderRadius: '0.6rem',
								fontWeight: '700',
								fontSize: '1rem',
							}}
						>
							자세히 알아보기
						</Button>
					</FlexCenter>
				</Img>
			</Section>
			<Section
				style={{
					width: '100vw',
					alignItems: 'center',
					marginTop: '2rem',
					marginBottom: '2rem',
				}}
			>
				<div
					style={{
						marginLeft: '5rem',
						marginTop: '2rem',
						marginBottom: '1rem',
						width: '92vw',
					}}
				>
					<Text bold="700" fontSize="2rem" others="text-align:left;">
						특별한 즐길거리를 찾아보세요
					</Text>
				</div>
				<BigCard />
			</Section>
		</>
	);
};

const Span = styled.span`
	background: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
	color: transparent;
	-webkit-background-clip: text;
	font-size: 1.2rem;
	font-weight: 700;
`;

const Button = styled.button`
	width: 10rem;
	height: 3rem;
	color: linear-gradient(
		90deg,
		rgb(111, 1, 156) 0%,
		rgb(198, 1, 126) 135.12%
	);
	background-color: #fff;
	box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
	border: none;
	border-radius: 2rem;
`;

const Section = styled.section`
	width: 80vw;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

const FlexCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export default Main;
