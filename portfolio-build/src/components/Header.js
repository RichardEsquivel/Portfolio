import React from 'react';
import relogo from "../../src/images/portfolio-images/re-logo.png";
import styled from "styled-components";

const MainHeader = styled.header`
	margin: 0 auto;
	width: 100%;
`;

export default function Header() {
	return (
		<>
			<MainHeader>
				<img src={relogo} alt="logo" />
			</MainHeader>


		</>
	)
}