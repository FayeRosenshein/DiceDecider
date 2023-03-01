import './App.css';
import Classes from '../Classes/Classes'
import Final from '../FinalPage/FinalPage'
import LandingPage from '../LandingPage/LandingPage'
import OneClassPage from '../OneClassPage/OneClassPage'
import React, {Routes, Route, useState, useEffect} from 'react'
import {fetchClasses} from '../../apiCalls/apiCalls';

function App() {
	const [classes, setClasses] = useState([])

	useEffect(() => {
		fetchClasses()
		.then(response => {
      if (response.ok) {
				const data = response.json()
				console.log(data)
        return data;
      } else {
        throw new Error(response.text)
      }
    })
			.then(data => {
				console.log(data.results)
				setClasses(data.results)})
	}, [])
	// fetch('https://www.dnd5eapi.co/api/classes/')
	// .then(response => response.json())
	// .then(data => {
	// 	setClasses(data.results)
	// 	console.log(data.results)
	// });
  return (
		<main>
			<Routes>
				<Route path='/' element={<LandingPage />}></Route>
				<Route path='/classes' element={<Classes classes={classes}/>}></Route>
				<Route path='/singlecharacter' element={<OneClassPage />}></Route>
				<Route path='/final' element={<Final />}></Route>
			</Routes>
		</main>
  );
}

export default App;
