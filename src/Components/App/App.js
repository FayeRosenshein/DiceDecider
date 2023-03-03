import './App.css';
import Classes from '../Classes/Classes'
import Final from '../FinalPage/FinalPage'
import LandingPage from '../LandingPage/LandingPage'
import OneClassView from '../OneClassView/OneClassView'
import React, { useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import {fetchClassDetails, fetchClasses, fetchSkills } from '../../apiCalls/apiCalls';

function App() {
	const [classes, setClasses] = useState([])
	const [skills, setSkills] = useState([])
	const [singleClass, setSingleClass] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetchClasses()
			.then(data => {
				console.log(data.results)
				setClasses(data.results)})
			.finally(() => setLoading(false))
		fetchSkills()
			.then(data => {
				console.log(data.results)
				setSkills(data.results)
			})
		fetchClassDetails('barbarian')
	}, [])
	// fetch(`https://www.dnd5eapi.co/api/classes/${class}`)
	// .then(response => response.json())
	// .then(data => {
	// 	setClasses(data.results)
	// 	console.log(data.results)
	// });
  return (
		<main>
			<Routes>
			<Route path="/" element={<LandingPage />} />
				<Route path='/classes' element={<Classes classes={classes} skills={skills}/>}></Route>
				<Route path='/classes/:index' element={<OneClassView/>}/>
				<Route path='/final' element={<Final />}></Route>
			</Routes>
		</main>
  );
}

export default App;
