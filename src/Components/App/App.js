import './App.css';
import Classes from '../Classes/Classes'
import LandingPage from '../LandingPage/LandingPage'
import OneClassView from '../OneClassView/OneClassView'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { fetchClassDetails, fetchClasses, fetchSkills } from '../../apiCalls/apiCalls';

function App() {
	const [classes, setClasses] = useState([])
	const [skills, setSkills] = useState([])
	const [allClassFeatures, setAllClassFeatures] = useState([])
	const [loading, setLoading] = useState(true)
	let allClassFeatures1 = []
	let classes1 = []
	let skills1 = []

	useEffect(() => {
		fetchClasses()
			.then(data => {
				console.log('class data',data.results)
				setClasses(data.results)
			})
			.then(data => classes.forEach(oneClass => {
				return fetchClassDetails(oneClass.index)
					.then(data => {
						console.log('feature data', data)
						allClassFeatures1.push(data)
					})
			}))
			.then(data => fetchSkills()
				.then(data => {
					console.log('skill data'.data.results)
					setSkills(data.results)
				}))
			.finally(() => {
				setLoading(false)
			})
		// allClassFeatures.forEach(oneClass => console.log(oneClass.index))
	}, [])
	// fetch(`https://www.dnd5eapi.co/api/classes/${class}`)
	// .then(response => response.json())
	// .then(data => {
	// 	setClasses(data.results)
	// 	console.log(data.results)
	// });
	if (loading) {
		return (
			<h1>Loading...</h1>
		)
	}
	return (
		<main className='App'>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path='/classes' element={<Classes classes={classes} skills={skills} allClassFeatures={allClassFeatures} />}></Route>
				<Route path='/classes/:index' element={<OneClassView allClassFeatures={allClassFeatures} />} />
			</Routes>
		</main>
	);
}

export default App;
