import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//styles
import './styles/pokedex.css';


const navigate = useNavigate();


const Pokedex = ({ totalPokemonIndex }) => {
	const [allPokemon, setAllPokemon] = useState([]);

	useEffect(() => {
		const abortController = new AbortController();

		const fetchPokemon = async () => {
			let updatedPokemonList = [...allPokemon];
			for (let i = 1; i <= 151; i++) {
				try {
					const response = await fetch(
						`https://pokeapi.co/api/v2/pokemon/${i}/`,
						{ signal: abortController.signal }
					);
					const data = await response.json();
					updatedPokemonList.push({
						name: data.name,
						imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
					});
				} catch (error) {
					if (error.name !== 'AbortError') {
						console.error(error);
					}
				}
			}
			setAllPokemon(updatedPokemonList);
		};

		fetchPokemon();
		console.log(allPokemon);
		return () => {
			abortController.abort(); // Cleanup if component unmounts
		};
	}, [totalPokemonIndex]);

	const listItems = allPokemon.map((pokemon) => (
		<div>
			<li>
					<img src={pokemon.imgUrl} />
					<p>{pokemon.name}</p>
			</li>
		</div>
	));

	return (
		<div className="pokedex">
			<ul>{listItems}</ul>
		</div>
	);
};

export default Pokedex;
