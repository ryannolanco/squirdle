import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navigation">
			<ul>
				<li>
					<Link to="/catchthemall">Squirdle</Link>
				</li>
				<li>
					<Link to="pokedex">Pokedex</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
