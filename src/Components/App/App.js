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
				console.log(data.results)
				classes1 = data.results
				console.log('classes', classes1)
			})
			.then(data => classes.forEach(oneClass => {
				return fetchClassDetails(oneClass.index)
					.then(data => {
						allClassFeatures1.push(data)
					})
			}))
			.then(data => fetchSkills()
				.then(data => {
					skills1 = data.results
					console.log('skills', skills1)
				}))
			.finally(() => {
				setClasses(classes1)
				setAllClassFeatures(allClassFeatures1)
				setSkills(skills1)
				setLoading(false)})
				console.log(allClassFeatures)
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
