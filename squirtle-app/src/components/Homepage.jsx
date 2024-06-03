import React, { useState } from "react";
import Navbar from "./Navbar"




const Homepage = () => {
  const [allImgs, setAllImgs] = useState({});
  
	const getNewPokemon = async () => {
		const pokemonId = Math.floor(Math.random() * totalPokemonIndex);
		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
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
}

export default Homepage