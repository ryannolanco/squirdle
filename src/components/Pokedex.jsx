import { useEffect, useState } from 'react';

const Pokedex = ({ totalPokemonIndex }) => {
	const [allPokemon, setAllPokemon] = useState([]);

	useEffect(() => {
		const loadAllPokemon = async () => {
			try {
				for (let i = 1; i <= totalPokemonIndex; i++) {
					const response = await fetch(
						`https://pokeapi.co/api/v2/pokemon/${i}/`,
						{ signal: abortController.signal }
					);
					const data = await response.json();
          console.log(data)
					setAllPokemon([...allPokemon, {
						name: data.name,
						imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
					}]);
          console.log(allPokemon)
				}
			} catch (error) {
				console.error(error);
			}
		};
		loadAllPokemon();
	}, []);

	return (
		<div className="pokedex">
			{allPokemon.map((pokemon) => (
				<div>
					<p>{pokemon.name}</p>
					<img src={pokemon.imgUrl}/>
				</div>
			))}
		</div>
	);
};

export default Pokedex;
