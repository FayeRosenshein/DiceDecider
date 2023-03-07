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

	useEffect(() => {
		fetchClasses()
			.then(data => {
				console.log(data.results)
				setClasses(data.results)
				console.log('classes', classes)
			})
			.then(data => classes.forEach(oneClass => {
				return fetchClassDetails(oneClass.index)
					.then(data => {
						allClassFeatures1.push(data)
						setAllClassFeatures([...allClassFeatures, data])
					})
			}))
			.then(fetchSkills()
				.then(data => {
					setSkills(data.results)
					console.log('skills', skills)
				}))
			.finally(() => {
				setLoading(false)})
	}, [])
	
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
