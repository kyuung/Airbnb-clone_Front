import React from 'react';
import styled from 'styled-components';
import Text from '../elements/Text';
import Img from '../elements/Img';

const BigCard = () => {
	return (
		<ScrollX>
			<FlexCenter>
				<Img
					width="28rem"
					height="28rem"
					bradius="1rem"
					src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720"
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						flexDirection: 'column',
						width: '28rem',
						marginLeft: '1rem',
						marginTop: '1rem',
					}}
				>
					<Text bold="700">체험</Text>
					<Text>
						가까운 곳에서 즐길 수 있는 잊지 못할 체험을 찾아보세요
					</Text>
				</div>
			</FlexCenter>
			<FlexCenter>
				<Img
					width="28rem"
					height="28rem"
					bradius="1rem"
					src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=720"
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						flexDirection: 'column',
						width: '28rem',
						marginLeft: '1rem',
						marginTop: '1rem',
					}}
				>
					<Text bold="700">온라인 체험</Text>
					<Text>
						호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요.
					</Text>
				</div>
			</FlexCenter>
			<FlexCenter>
				<Img
					width="28rem"
					height="28rem"
					bradius="1rem"
					src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720"
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						flexDirection: 'column',
						width: '28rem',
						marginLeft: '1rem',
						marginTop: '1rem',
					}}
				>
					<Text bold="700">
						추천 컬렉션 : 여행 본능을 깨우는 체험
					</Text>
					<Text>온라인 체험으로 집에서 랜선 여행을 즐기세요.</Text>
				</div>
			</FlexCenter>
		</ScrollX>
	);
};

const FlexCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 28rem;
	margin-right: 1.3rem;
	&:last-child {
		margin-right: 0;
	}
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
	width: 95vw;
	place-items: center;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export default BigCard;
