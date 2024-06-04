import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage';
import Pokedex from './components/Pokedex';
import CatchThemAll from './components/CatchThemAll';


const totalPokemonIndex = 1025;

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/catchthemall" element={<CatchThemAll totalPokemonIndex={totalPokemonIndex} />} />
        <Route path="/pokedex" element={<Pokedex totalPokemonIndex={totalPokemonIndex}/>} />
			</Routes>
		</div>
	);
}

export default App;
