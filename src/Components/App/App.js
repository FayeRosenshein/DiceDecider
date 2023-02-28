import './App.css';
import Classes from '../Classes/Classes'
import Final from '../FinalPage/FinalPage'
import LandingPage from '../LandingPage/LandingPage'
import Races from '../Races/Races'
import SingleCharacterPage from '../SingleCharacterPage/SingleCharacterPage'
import React, {Routes, Route, useState, useEffect} from 'react'

function App() {
	const [classes, setClasses] = useState([])

	useEffect(() => {
		
	})
	fetch('https://www.dnd5eapi.co/api/classes/')
	.then(response => response.json())
	.then(data => console.log(data));
  return (
		<main>
			<Routes>
				<Route path='/' element={<LandingPage />}></Route>
				<Route path='/classes' element={<Classes />}></Route>
				<Route path='/classes/races' element={<Races />}></Route>
				<Route path='/singlecharacter' element={<SingleCharacterPage />}></Route>
				<Route path='/final' element={<Final />}></Route>
			</Routes>
		</main>
  );
}

export default App;
