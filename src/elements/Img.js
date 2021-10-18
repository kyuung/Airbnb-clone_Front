import React from 'react';
import styled from 'styled-components';

const Img = (props) => {
	const { width, height, bradius, others, src } = props;
	const styles = { width, height, bradius, others, src };
	return (
		<>
			<ImgBox {...styles} />
		</>
	);
};

Img.defaultProps = {
	width: '15rem',
	height: '15rem',
	bradius: '0px',
	src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/cat1.jpeg',
	others: '',
};

const ImgBox = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.bradius};
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	${(props) => props.others};
`;

export default Img;
