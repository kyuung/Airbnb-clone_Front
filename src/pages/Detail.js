import React from 'react';
import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Img from '../elements/Img';
import Text from '../elements/Text';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailRoomListDB } from '../redux/async/detailRoom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Marker from '../components/Marker';

const Detail = (props) => {
	const dispatch = useDispatch();
	const post_id = props.match.params.id;

	const [reserveStatus, setReserveStatus] = React.useState(0);
	const [counter, setCounter] = React.useState(0);
	const [initalDescription, setDescription] = React.useState('');
	const [updateDescription, setUpdateDescription] = React.useState('');
	const [checkInDate, setCheckInDate] = React.useState('');
	const [checkOutDate, setCheckOutDate] = React.useState('');
	const [reviewState, setReviewState] = React.useState(false);

	const detailList = useSelector((state) => state.detailRoom.list);
	const roomList = detailList.room;
	const reviewList = detailList.reviews;
	console.log('reviewList', reviewList);

	React.useEffect(() => {
		dispatch(getDetailRoomListDB(post_id));
	}, []);

	const _lat = roomList?.location?.lat;
	const _lon = roomList?.location?.lon;

	const submitReview = () => {
		console.log(initalDescription, '리뷰 axios post 부분');
	};

	const deleteReview = () => {
		console.log('리뷰 axios delete 부분');
	};

	const updateReview = () => {
		!reviewState && setReviewState(true);
		if (reviewState && updateReview !== '') {
			console.log('axios 수정 요청', updateDescription);
			setReviewState(false);
		}
	};

	return (
		<FlexCenter>
			<Header />
			<Section style={{ marginTop: '2rem' }}>
				<ScrollX>
					<ScrollX>
						{roomList?.imageUrl.map((img, idx) => (
							<ScrollXChild key={idx}>
								<Img
									bradius="20px"
									others="margin-bottom:1rem"
									src={img}
								/>
							</ScrollXChild>
						))}
					</ScrollX>
				</ScrollX>
				<h1>{roomList?.host}</h1>
				<Text bold="700">
					<i className="fas fa-star"></i> {roomList?.rating}
				</Text>
				<Text others="margin-top:0.7rem;">
					{roomList?.locationName}
				</Text>
				<Hr />
			</Section>
			<Section>
				<h2>{roomList?.category}</h2>
				<h2>
					호스트 :{' '}
					{roomList?.host.split('이 호스팅하는 주거용 공간 전체')}
				</h2>
				<Text>
					<i className="fas fa-user-friends"></i>
					<span> </span>최대 인원
					{roomList?.people}명 / <i className="fas fa-bed"></i>
					<span> </span>침실 {roomList?.people}개
				</Text>
				<Hr />
			</Section>
			<Section>
				<div>
					<h2>
						<i className="fas fa-home"></i> {roomList?.category}{' '}
						전체
					</h2>
				</div>
				<div>
					<h2>
						<i className="fas fa-key"></i> 순조로운 체크인 과정
					</h2>
					<Text others="margin-left:1.5rem">
						최근 숙박한 게스트 중 90%가 체크인 과정에 별점{' '}
						{roomList?.rating}
						점을 준 숙소입니다.
					</Text>
				</div>
				<div>
					<h2>
						<i className="far fa-bookmark"></i> 숙소 이용 규칙
					</h2>
					<Text others="margin-left:1.5rem">
						{roomList?.pet ? '반려동물 가능' : '반려동물 불가능'}
					</Text>
					<Text others="margin-left:1.5rem;margin-top:1rem">
						{roomList?.smoking ? '흡연 가능' : '흡연 불가능'}
					</Text>
				</div>
				<Hr />
			</Section>

			<Section></Section>
			<Section>
				<Text
					bold="700"
					fontSize="2rem"
					others="margin-top:1rem;margin-bottom:2rem;"
				>
					숙박 장소
				</Text>
				<Text others="margin-bottom:2rem;">
					{roomList?.description}
				</Text>

				<div>
					<ScrollX>
						{roomList?.imageUrl.map((img, idx) => (
							<ScrollXChild key={idx}>
								<Img
									bradius="20px"
									others="margin-bottom:1rem"
									src={img}
								/>
							</ScrollXChild>
						))}
					</ScrollX>
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
				<ScrollX>
					<ScrollXChild>
						<Text>
							<i className="fas fa-fan"></i> 알뜰 전망
						</Text>
						<Text>
							<i className="fas fa-fan"></i> 정원 전망
						</Text>
						<Text>
							<i className="fas fa-water"></i> 공용 해변과 인접
						</Text>
						<Text>주방</Text>
						<Text>
							<i className="fas fa-car"></i> 건물 내 무료주차
						</Text>
					</ScrollXChild>
					<ScrollXChild>
						<Text>
							<i className="fas fa-fan"></i> 알뜰 전망
						</Text>
						<Text>정원 전망</Text>
						<Text>공용 해변과 인접</Text>
						<Text>주방</Text>
						<Text>건물 내 무료주차</Text>
					</ScrollXChild>
				</ScrollX>
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
				<Section>
					<LoadScript
						googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
					>
						<GoogleMap
							mapContainerStyle={{
								width: '400px',
								height: '400px',
							}}
							center={{
								lat: _lat,
								lng: _lon,
							}}
							zoom={10}
						/>
					</LoadScript>
				</Section>
				<Hr />
			</Section>
			<Section>
				<Text
					bold="700"
					fontSize="2rem"
					others="margin-top:1rem;margin-bottom:2rem;"
				>
					예약하기 : 1박에 {roomList?.price}원
				</Text>
				<ScrollX>
					<ScrollXChild>
						{reserveStatus === 0 && (
							<Flex>
								<Text
									bold="700"
									fontSize="1.6rem"
									others="margin-top:1rem;margin-bottom:2rem;"
								>
									체크인 날짜를 선택해주세요
								</Text>
							</Flex>
						)}
						{reserveStatus === 1 && (
							<Flex>
								<Text
									bold="700"
									fontSize="1.6rem"
									others="margin-top:1rem;margin-bottom:2rem;"
								>
									체크아웃 날짜를 선택해주세요
								</Text>
							</Flex>
						)}
						{reserveStatus < 2 && (
							<Flex>
								<DayPicker
									format="DD/MM/YYYY"
									onDayClick={(e) => {
										let day = e.toLocaleDateString();

										day = day.replaceAll(' ', '');
										day = day.slice(0, 10);
										if (day.slice(-1) === '-') {
											day = day.slice(0, -1);
										}
										if (reserveStatus === 0) {
											setCheckInDate(day);
											setReserveStatus(1);
										} else if (reserveStatus === 1) {
											setCheckOutDate(day);
											setReserveStatus(2);
										}
										console.log(checkInDate);
										console.log(checkOutDate);
									}}
								/>
							</Flex>
						)}
						{reserveStatus === 2 && (
							<Flex
								style={{
									height: '14rem',
									paddingTop: '3rem',
									paddingBottom: '3rem',
									justifyContent: 'space-between',
								}}
							>
								<Text fontSize="1.2rem">
									체크인 날짜 : {checkInDate}
								</Text>
								<Text fontSize="1.2rem">
									체크아웃 : {checkOutDate}
								</Text>
								<Flex style={{ flexDirection: 'row' }}>
									<Text fontSize="1.2rem">인원 수</Text>
									<CounterBtn
										onClick={() =>
											counter > 0 &&
											setCounter(counter - 1)
										}
									>
										<Text fontSize="1.5rem">-</Text>
									</CounterBtn>
									<Text fontSize="1.6rem">{counter}</Text>
									<CounterBtn
										onClick={() => setCounter(counter + 1)}
									>
										<Text fontSize="1.5rem">+</Text>
									</CounterBtn>
								</Flex>
								<Button
									style={{
										width: '18rem',
										border: 'none',
										fontSize: '1.3rem',
									}}
									onClick={() => {
										if (counter === 0) {
											window.alert(
												'인원수를 입력해주세요.'
											);
											return;
										}
										window.alert('예약이 완료되었습니다.');
										setReserveStatus(0);
									}}
								>
									예약하기
								</Button>
							</Flex>
						)}
					</ScrollXChild>
				</ScrollX>

				<Hr />
			</Section>
			<Section>
				<Text
					bold="700"
					fontSize="2rem"
					others="margin-top:1rem;margin-bottom:2rem;"
				>
					<i className="fas fa-star" style={{ color: '#FF385C' }}></i>{' '}
					<span> </span>
					{roomList?.rating} / 후기 {reviewList?.length}개
				</Text>
				<ScrollX>
					{reviewList?.map((review, idx) => (
						<ReviewBox key={idx}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
								}}
							>
								<div>
									<Text
										bold="700"
										fontSize="1rem"
										others="margin-top:0.5rem; margin-bottom: 1rem;width:10rem;"
									>
										<i className="fas fa-user"></i>{' '}
										<span> </span>
										{review?.userId.length > 6
											? `${review?.userId.slice(0, 5)}...`
											: review?.userId}{' '}
										/ {review?.rating}
									</Text>
									<Text
										bold="700"
										fontSize="1rem"
										others="margin-bottom:1rem"
									>
										{review?.createdAt}
									</Text>
									{reviewState ? (
										<UpdateInput
											onChange={(e) =>
												setUpdateDescription(
													e.target.value
												)
											}
										/>
									) : (
										<Text>{review?.comment}</Text>
									)}
								</div>
								<div style={{ width: '3rem' }}>
									<OptionBtn onClick={deleteReview}>
										X
									</OptionBtn>
									<OptionBtn onClick={updateReview}>
										수정
									</OptionBtn>
								</div>
							</div>
						</ReviewBox>
					))}
				</ScrollX>
				<FlexCenterR>
					<Input
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
					<Button onClick={submitReview}>등록</Button>
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
	margin-right: 2rem;
	&:last-child {
		margin-right: 0;
	}
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
	padding-left: 1rem;
`;

const Button = styled.button`
	width: 5rem;
	height: 3rem;
	margin-top: 1rem;
	border-radius: 20px;
	border: 1px solid lightgray;
	margin-left: 1rem;
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
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const ScrollXChild = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-right: 2rem;

	&:last-child {
		margin-right: 0;
	}
`;

const OptionBtn = styled.button`
	width: 3.5rem;
	height: 2.3rem;
	border: none;
	border-radius: 0.5rem;
	margin-bottom: 0.1rem;
	transition: background-color 150ms ease-in-out;
	&:hover {
		background-color: black;
		color: white;
	}
`;

const UpdateInput = styled.input`
	width: 10rem;
	height: 3rem;
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
`;

export default Detail;
