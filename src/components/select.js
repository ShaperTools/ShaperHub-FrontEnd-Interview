/* @flow */

import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
	align-items: center;
	display: flex;
	margin-bottom: 24px;
	margin-top: 24px;
`;

const Heading = styled.div`
	color: black;
	font-family: sans-serif;
	font-size: 18px;
	margin-right: 24px;
`;

const Select = ({
	options,
	heading,
}: {
	options: Array<{ text: string, value: string }>,
	heading: string,
}) => (
	<SelectContainer>
		<Heading>{heading}</Heading>
		<select>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.text}
				</option>
			))}
		</select>
	</SelectContainer>
);

export default Select;
