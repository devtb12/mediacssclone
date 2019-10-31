import React, { Component } from 'react';
import Welcome from './Components/Main/Welcome';
import './Styles/Main.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			menuStatus: 'menu-close'
		};
	}
	handleClick = (e) => {
		if (this.state.menuStatus === 'menu-close') {
			this.setState({ menuStatus: 'menu-open' });
		} else {
			this.setState({ menuStatus: 'menu-close' });
		}
	};

	render() {
		return (
			<header>
				<nav className="wrapper">
					<span className="titletags">{`<HTML>`}</span>
					<span className="title">{`My Media CSS Page`}</span>
					<span className="titletags">{`</HTML>`}</span>
					<div className="shrink_nav" onClick={this.handleClick}>
						<img src="https://img.icons8.com/doodle/48/000000/hamburger.png" alt="straight from the src" />
						{`MENU`}
					</div>
					<ul>
						<li>Services</li>
						<li>Portfolio</li>
						<li>About</li>
						<li>Team</li>
						<li>Contact</li>
					</ul>
				</nav>
				<menu id="menu" className={this.state.menuStatus}>
					<ul className="shrinknav">
						<li>
							Resident Evil<br />Media example #1
						</li>
						<li>
							World of Warcraft<br />Media example #2
						</li>
						<li>Media example #3</li>
						<li>
							50 Shades of<br />Fustration
						</li>
					</ul>
				</menu>
				<Welcome />
			</header>
		);
	}
}
export default App;
