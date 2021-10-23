import React from 'react';
import styled from 'styled-components';

const InfoCovid = () => {
	return (
		<>
			<FlexCenterR>
				<CovidText>
					에어비앤비의 코로나 19 대응 반앙에 대한 최신 정보를
					확인하세요.
				</CovidText>
			</FlexCenterR>
		</>
	);
};

const FlexCenterR = styled.div`
	width: 100vw;
	height: 3.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	background-color: #222222;
`;

const CovidText = styled.p`
	font-size: 0.8rem;
	text-decoration: underline;
	color: #a3a3a3;
`;

export default InfoCovid;
