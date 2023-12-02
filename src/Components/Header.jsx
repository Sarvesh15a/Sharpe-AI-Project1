import React from 'react'
import {Link} from 'react-router-dom'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Header.css'

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
		<header>
			<h3>Sharpe AI</h3>
			<nav ref={navRef}>
				<span><Link to='/'>Home</Link></span>
				<span><Link to='/transaction'>Transaction</Link></span>
				<span><Link to='/data'>Data</Link></span>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	   
		</>
	);
}

export default Header;