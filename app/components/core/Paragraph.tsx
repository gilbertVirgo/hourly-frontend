import styled from "styled-components/native";

export const Paragraph = styled.Text`
	font-family: Alata;
	font-size: 18px;

	${({ center }) =>
		center
			? `
        text-align: center;
    `
			: `
        text-align: left;
    `}
`;
