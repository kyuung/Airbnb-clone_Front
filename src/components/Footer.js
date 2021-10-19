import React from 'react';
import styled from 'styled-components';
import Text from '../elements/Text';

const Footer = () => {
	return (
		<div
			style={{
				width: '100vw',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
				backgroundColor: '#F7F7F7',
			}}
		>
			<Section>
				<ScrollX>
					<ScrollXChild>
						<Text bold="700" others="margin-bottom:1rem">
							소개
						</Text>
						<Text others="margin-bottom:0.5rem">
							에어비앤비 이용 방법
						</Text>
						<Text others="margin-bottom:0.5rem">뉴스룸</Text>
						<Text others="margin-bottom:0.5rem">
							에어비앤비 2021
						</Text>
						<Text others="margin-bottom:0.5rem">투자자 정보</Text>
						<Text others="margin-bottom:0.5rem">
							에어비앤비 플러스
						</Text>
						<Text others="margin-bottom:0.5rem">
							에어비앤비 Luxe
						</Text>
						<Text others="margin-bottom:0.5rem">호텔투나잇</Text>
						<Text others="margin-bottom:0.5rem">
							에어비앤비 비즈니스 프로그램
						</Text>
						<Text others="margin-bottom:0.5rem">
							호스트 분들이 있기에 가능합니다
						</Text>
						<Text others="margin-bottom:0.5rem">채용정보</Text>
						<Text others="margin-bottom:0.5rem">창립자 편지</Text>
					</ScrollXChild>
					<ScrollXChild>
						<Text bold="700" others="margin-bottom:1rem">
							커뮤니티
						</Text>
						<Text others="margin-bottom:1rem">
							다양성 및 소속감
						</Text>
						<Text others="margin-bottom:1rem">접근성</Text>
						<Text others="margin-bottom:1rem">
							에어비앤비 어소시에이트
						</Text>
						<Text others="margin-bottom:1rem">
							아프간 난민 호스팅하기
						</Text>
						<Text others="margin-bottom:1rem">게스트 추천</Text>
						<Text others="margin-bottom:1rem">Airbnb.org</Text>
					</ScrollXChild>
					<ScrollXChild>
						<Text bold="700" others="margin-bottom:1rem">
							호스팅하기
						</Text>
						<Text others="margin-bottom:1rem">숙소 호스팅</Text>
						<Text others="margin-bottom:1rem">
							온라인 체험 호스팅하기
						</Text>
						<Text others="margin-bottom:1rem">체험 호스팅하기</Text>
						<Text others="margin-bottom:1rem">
							책임감 있는 호스팅
						</Text>
						<Text others="margin-bottom:1rem">자료 센터</Text>
						<Text others="margin-bottom:1rem">커뮤니티 센터</Text>
					</ScrollXChild>
					<ScrollXChild>
						<Text bold="700" others="margin-bottom:1rem">
							에어비앤비 지원
						</Text>
						<Text others="margin-bottom:1rem">
							에어비앤비의 코로나19 대응 방안
						</Text>
						<Text others="margin-bottom:1rem">도움말 센터</Text>
						<Text others="margin-bottom:1rem">예약 취소 옵션</Text>
						<Text others="margin-bottom:1rem">
							에어비앤비 이웃 민원 지원
						</Text>
						<Text others="margin-bottom:1rem">신뢰와 안전</Text>
					</ScrollXChild>
				</ScrollX>
			</Section>
		</div>
	);
};

const Section = styled.section`
	width: 60vw;
	padding-left: 10rem;
	padding-right: 10rem;
	padding-top: 1rem;
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
`;

const ScrollXChild = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	width: 10rem;
	margin-right: 2rem;
	&:last-child {
		margin-right: 0;
	}
`;

export default Footer;
