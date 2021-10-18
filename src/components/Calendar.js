import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styled from 'styled-components';

const Calendar = () => {
	return (
		<Flex>
			<DayPicker
				format="DD/MM/YYYY"
				onDayClick={(e) => {
					let day = e.toLocaleDateString();
					day = day.replaceAll('.', '-');
					day = day.replaceAll(' ', '');
					day = day.slice(0, 10);
					console.log(day);
				}}
			/>
		</Flex>
	);
};

const Flex = styled.div`
	margin-left: 3rem;
	margin-right: 3rem;
`;

export default Calendar;
