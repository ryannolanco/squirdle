import { useEffect, useState } from 'react';

const CatchThemAll = ({ totalPokemonIndex }) => {
	// const pokemonId = Math.floor(Math.random() * totalPokemonIndex);
	const abortController = new AbortController();
	const { signal } = abortController;
	const [pokemons, setPokemons] = useState([]);
	const [isCorrect, setIsCorrect] = useState(false);
	const [allPokemonIds, setAllPokemonIds] = useState(0);
	const [imageURL, setImageUrl] = useState('');
	const [showImg, setShowImg] = useState(false);
	const [allImgs, setAllImgs] = useState({});

	const getNewPokemon = async () => {
		const pokemonId = Math.floor(Math.random() * totalPokemonIndex);
		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
				{ signal: abortController.signal }
			);
			const data = await response.json();
			console.log(data);
			setAllImgs({
				...allImgs,
				[pokemonId]: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div>
				<h1>hello</h1>
				<button onClick={() => getNewPokemon()}>Get Random Pokemon!</button>
			</div>
		</>
	);
};

// useEffect(() => {
// 	async function fetchPokemon() {
// 		try {
// 			const response = await fetch(
// 				`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`, { signal: abortController.signal }
// 			);
// 			const pokemonList = await response.json();
// 			setPokemons(pokemonList);
// 			setImageUrl(
//         `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
//       );
// 		} catch (error) {
// 			if (error.name === 'AbortError') {
// 				return;
// 			} else {
// 				throw error;
// 			}
// 		}
// 	}
// 	fetchPokemon();
// }, []);

// 	<div>
// 		<h1>{pokemons.name}</h1>
// 		<div>
// 			{showImg ? (
// 				<img
// 					className={isCorrect ? 'colored-img' : 'blacked-out'}
// 					src={imageURL}
// 				/>
// 			) : (
// 				'use your life line'
// 			)}
// 		</div>

// 		<div>
// 			<button onClick={() => setIsCorrect(!isCorrect)}>
// 				Who's that pokemon!?
// 			</button>
//       <button onClick={() => getNewPokemon()}>
// 				get new pokemon
// 			</button>
// 			<button onClick={() => setShowImg(!showImg)}>Need a hint?</button>
// 		</div>
// 	</div>
// );

export default CatchThemAll;
