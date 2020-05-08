import React from 'react';
import relogo from "../../src/images/portfolio-images/re-logo.png";
import styled from "styled-components";

//styling for the main header
const MainHeader = styled.header`
	margin: 0 auto;
	width: 100%;
	/* styling for collapsible toggle menu */
	.nav-toggle{
		
	}
	.hamburgerMenu{

	}
`;

export default function Header() {
	return (
		<>
			<MainHeader>
				<img src={relogo} alt="RE logo" />
				<button className="nav-toggle" aria-label="toggle-navigation">
					<span className="hamburgerMenu"></span>
				</button>
				<nav className="nav">
					<ul className="nav__list">
						<li class="nav__item"> <a href="#" class="nav__link">Home</a></li>
						<li class="nav__item"> <a href="#" class="nav__link">My Work</a></li>
						<li class="nav__item"> <a href="#" class="nav__link">About Me</a></li>

					</ul>
				</nav>
			</MainHeader>


		</>
	)
}