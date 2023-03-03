import { useState } from 'react'
import './Form.css'

export default function Form({}) {
	const [loading, setLoading] = useState(true)
	//loop over all classes, for each class call class/index data
	// filter through classes to find skills 
	//fetch all class fetch calls 


	if (loading) {
		return (
			<h1>Loading...</h1>
		)
	}
	return (
		<form>
			
		</form>
	)
}