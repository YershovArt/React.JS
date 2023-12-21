import { NavLink } from "react-router-dom";

function Header() {

	return (
		<div className="header">
			<nav>
				<ul className="header__nav">
					<li>
						<h4 className="header__title">
							ShareNotes
						</h4>
					</li>
					<li className="header__list">
						<NavLink className="header__link" to='/'>Main</NavLink>
					</li>
					<li className="header__list">
						<NavLink className="header__link" to='/note/'>Note</NavLink>
					</li>
					<li className="header__list">
						<NavLink className="header__link" to='/create'>Create</NavLink>
					</li>
					<li className="header__list">
						<NavLink className="header__link" to='/about'>About</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
