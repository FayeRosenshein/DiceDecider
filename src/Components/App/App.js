import './App.css';
import Classes from '../Classes/Classes'
import Final from '../FinalPage/FinalPage'
import LandingPage from '../LandingPage/LandingPage'
import OneClassPage from '../OneClassPage/OneClassPage'
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
				<Route path='/singlecharacter' element={<OneClassPage />}></Route>
				<Route path='/final' element={<Final />}></Route>
			</Routes>
		</main>
  );
}

export default App;
