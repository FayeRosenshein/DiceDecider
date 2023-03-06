import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { fetchClassDetails } from '../../apiCalls/apiCalls'
import './OneClassView.css'
import { GiCheckMark } from 'react-icons/gi'

export default function OneClassView() {
	const [singlecharacter, setSingleCharacter] = useState({})
	const [loading, setLoading] = useState(true)

	let { index } = useParams()
	let navigate = useNavigate()

	useEffect(() => {
		fetchClassDetails(index)
			.then(data => {
				console.log('proficiency_choices', data.proficiency_choices[0].from.options[0].item.name)
				console.log('proficiencies', data.proficiencies)
				console.log('saving_throws', data.saving_throws)
				console.log(1, data)
				setSingleCharacter(data)
				setLoading(false)
			})
	}, [])
	
	const findImage = `/assets/${index}.png`
	if (loading) {
		return (
			<h1>Loading...</h1>
		)
	}
	return (
		<section className="one-class-container">
			<div className='nav-bar'>
				<button className="go-home-button" onClick={() => navigate("/classes")} >GO HOME</button>
				<h2 className='character-name' >{singlecharacter.name}</h2>
			</div>
			<img src={findImage} alt={singlecharacter.name} className='one-class-pic' />
			<h3>You can can choose {singlecharacter.proficiency_choices[0].choose} skills</h3>
			<p className='one-class-skills'>{singlecharacter.proficiency_choices[0].from.options.map(choice => <p>{choice.item.name}</p>)}</p>
			<h3>Hit die</h3>
			<p>d{singlecharacter.hit_die}</p>
			<h3>Proficiencies</h3>
			<p>{singlecharacter.proficiencies.map(choice => <p>{choice.name}</p>)}</p>
			<h3>Starting Equipment</h3>
			<p>{singlecharacter.starting_equipment.map(choice => <p>{choice.equipment.name}: {choice.quantity}</p>)}</p>
		</section>
	)
}