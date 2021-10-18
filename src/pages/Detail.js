import React from 'react';
import styled from 'styled-components';
import Calendar from '../components/Calendar';
import Img from '../elements/Img';
import Text from '../elements/Text';

const Detail = () => {
	return (
		<FlexCenter>
			<Section>
				<Img
					width="60vw"
					height="18rem"
					bradius="20px"
					others="margin-top:1rem"
				/>
				<h1>영덕 감성 산장</h1>
				<Text bold="700">4.44 (후기 59개)</Text>
				<Text>여기에 해당 숙소 위치 뿌리기</Text>
				<Hr />
			</Section>
			<Section>
				<h2>오두막</h2>
				<h2>호스트 : 현수님</h2>
				<Text>최대 인원 4명 / 침실 2개 / 침대 3개 / 욕실 2개</Text>
				<Hr />
			</Section>
			<Section>
				<div>
					<h2>집 전체</h2>
					<Text>오두막 전체를 단독으로 사용하게 됩니다.</Text>
				</div>
				<div>
					<h2>순조로운 체크인 과정</h2>
					<Text>
						최근 숙박한 게스트 중 90%가 체크인 과정에 별점 5점을 준
						숙소입니다.
					</Text>
				</div>
				<div>
					<h2>반려동물 입실 가능</h2>
					<Text>게스트가 자주 찾는 편의시설</Text>
				</div>
				<Hr />
			</Section>
			<Section>
				<Text>
					동해바다 뭐시기 인포메이션동해바다 뭐시기 인포메이션
					동해바다 뭐시기 인포메이션 동해바다 뭐시기 인포메이션
					동해바다 뭐시기 인포메이션 동해바다 뭐시기 인포메이션
					동해바다 뭐시기 인포메이션 동해바다 뭐시기 인포메이션
					동해바다 뭐시기 인포메이션
				</Text>
				<Hr />
			</Section>
			<Section>
				<Text
					bold="700"
					fontSize="2rem"
					others="margin-top:1rem;margin-bottom:2rem;"
				>
					숙박 장소
				</Text>
				<div>
					<Img bradius="20px" others="margin-bottom:1rem" />
					<Text>퀸 사이즈 침대 1개, 에어 메트리스 뭐시기</Text>
				</div>
				<Hr />
			</Section>
			<Section>
				<Text
					bold="700"
					fontSize="2rem"
					others="margin-top:1rem;margin-bottom:2rem;"
				>
					숙소 편의시설
				</Text>
				<Text>알뜰 전망</Text>
				<Text>정원 전망</Text>
				<Text>공용 해변과 인접 / 해변</Text>
				<Text>주방</Text>
				<Text>건물 내 무료주차</Text>
				<Hr />
			</Section>
			<Section>
				<Text
					bold="700"
					fontSize="2rem"
					others="margin-top:1rem;margin-bottom:2rem;"
				>
					호스팅 지역
				</Text>
				<div>지도를 넣을 곳입니다.</div>
				<Text>여기에 해당 숙소 위치 뿌리기</Text>
				<Hr />
			</Section>
			<Section>
				<FlexCenterR>
					<FlexCenter>
						<Text
							bold="700"
							fontSize="2rem"
							others="margin-top:1rem;margin-bottom:2rem;"
						>
							체크인 날짜를 선택해주세요.
						</Text>
						<Calendar />
					</FlexCenter>
					<FlexCenter>
						<Text
							bold="700"
							fontSize="2rem"
							others="margin-top:1rem;margin-bottom:2rem;"
						>
							체크아웃 날짜를 선택해주세요.
						</Text>
						<Calendar />
					</FlexCenter>
				</FlexCenterR>

				<Hr />
			</Section>
			<Section>
				<Text
					bold="700"
					fontSize="2rem"
					others="margin-top:1rem;margin-bottom:2rem;"
				>
					4.44 / 후기 0개
				</Text>
				<ReviewBox>
					<Text
						bold="700"
						fontSize="1rem"
						others="margin-bottom:1rem"
					>
						리뷰 작성자 뿌리는곳
					</Text>
					<Text
						bold="700"
						fontSize="1rem"
						others="margin-bottom:1rem"
					>
						리뷰 단 시간 뿌리는곳
					</Text>
					<Text>리뷰 내용 뿌리는곳</Text>
				</ReviewBox>
				<FlexCenterR>
					<Input />
					<Button>등록</Button>
				</FlexCenterR>
				<Hr />
			</Section>
		</FlexCenter>
	);
};

const Section = styled.section`
	width: 60vw;
	padding-left: 10rem;
	padding-right: 10rem;
`;

const Hr = styled.hr`
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

const ReviewBox = styled.article`
	width: 15rem;
	height: 8rem;
	border-radius: 20px;
	border: 1px solid lightgray;
	padding: 1rem;
`;

const FlexCenter = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const FlexCenterR = styled.div`
	width: 60vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	width: 53rem;
	height: 3rem;
	margin-top: 1rem;
	border-radius: 20px;
	border: 1px solid lightgray;
`;

const Button = styled.button`
	width: 5rem;
	height: 3rem;
	margin-top: 1rem;
	border-radius: 20px;
	border: 1px solid lightgray;
	margin-left: 1rem;
`;

export default Detail;
