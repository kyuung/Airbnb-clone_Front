import React from 'react';
import styled from 'styled-components';
import Text from '../elements/Text';
import Img from '../elements/Img';

const LiveCard = () => {
	return (
		<ScrollX>
			<FlexCenter
				style={{
					alignItems: 'flex-start',
					marginRight: '2rem',
				}}
			>
				<Img
					bradius="1rem"
					width="20rem"
					height="20rem"
					src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720"
				/>
				<Text bold="500" fontSize="1.3rem" others="margin-top:0.8rem">
					자연생활을 만끽할 수 있는 숙소
				</Text>
			</FlexCenter>
			<FlexCenter
				style={{
					alignItems: 'flex-start',
					marginRight: '2rem',
				}}
			>
				<Img
					bradius="1rem"
					width="20rem"
					height="20rem"
					src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
				/>
				<Text bold="500" fontSize="1.3rem" others="margin-top:0.8rem">
					독특한 공간
				</Text>
			</FlexCenter>
			<FlexCenter
				style={{
					alignItems: 'flex-start',
					marginRight: '2rem',
				}}
			>
				<Img
					bradius="1rem"
					width="20rem"
					height="20rem"
					src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
				/>
				<Text bold="500" fontSize="1.3rem" others="margin-top:0.8rem">
					집 전체
				</Text>
			</FlexCenter>
			<FlexCenter
				style={{
					alignItems: 'flex-start',
					marginRight: '2rem',
				}}
			>
				<Img
					bradius="1rem"
					width="20rem"
					height="20rem"
					src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"
				/>
				<Text bold="500" fontSize="1.3rem" others="margin-top:0.8rem">
					반려동물 가능
				</Text>
			</FlexCenter>
		</ScrollX>
	);
};

const FlexCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 20rem;
`;

const ScrollX = styled.div`
	padding-left: 24px;
	padding-right: 24px;
	scroll-padding: 0px 24px;
	display: grid;
	--column-count: 4;
	scroll-snap-type: x mandatory;
	grid-auto-flow: column;
	overflow-x: auto;
	width: 90vw;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export default LiveCard;
