import React from 'react';
import styled from 'styled-components';

const HButton = () => {
	return (
		<div>
			<Container>
				<I className="fas fa-grip-lines"></I>
				<I className="fas fa-user-circle"></I>
			</Container>
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

export default HButton;
