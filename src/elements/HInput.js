import React from 'react';
import styled from 'styled-components';
import Text from './Text';

// ! 헤더 에니메이션 부분
const HInput = () => {
	return (
		<>
			<Button placeholder="검색 시작하기">
				<FlexCenter>
					<Text
						bold="700"
						others={'text-align:left;margin-top:0.2rem'}
						fontSize="0.9rem"
						color="#717171"
					>
						검색 시작하기
					</Text>
					<Search>
						<I className="fas fa-search"></I>
					</Search>
				</FlexCenter>
			</Button>
		</>
	);
};

// const MainHeaderInput = () => {

// }

const Button = styled.button`
	width: 20rem;
	height: 2.8rem;
	border-radius: 30px;
	margin-left: 14rem;
	padding-left: 1rem;
	border: 1px solid #dddddd;
	-webkit-box-shadow: -3px 4px 13px 1px #dddddd;
	box-shadow: -3px 4px 13px 1px #dddddd;
	background-color: white;
`;

const Search = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 2rem;
	background: #ff385c;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FlexCenter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: 18.4rem;
`;

const I = styled.i`
	color: white;
`;

export default HInput;
