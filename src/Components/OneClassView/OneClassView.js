import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { fetchClassDetails } from '../../apiCalls/apiCalls'
import './OneClassView.css'

export default function OneClassView() {
	const [singlecharacter, setSingleCharacter] = useState([])
	const [loading, setLoading] = useState(true)

	let {index} = useParams()
	let navigate = useNavigate()

	useEffect(() => {
		fetchClassDetails(index)
			.then(data => {
				console.log('proficiency_choices', data.proficiency_choices[0].from.options[0].item.name)
				console.log('proficiencies', data.proficiencies)
				console.log('saving_throws', data.saving_throws)
				console.log(1,data)
				setSingleCharacter(data)
				setLoading(false)
			})
	}, [])
	const findImage = `/assets/${index}.png`

	// const mappedProficiencyChoices = singlecharacter.proficiency_choices[0].from.options.map(choice => choice.item.name)
	// console.log(mappedProficiencyChoices)
	// const reducedProficiencyChoices = singlecharacter.proficiency_choices[0].from.options.reduce((acc, currentValue) => 
	// 	acc + `<p>${currentValue.item.name}</p>`, '')
	// class detailing card
	// classes.proficiency_choices[0].options.item.name
	if (loading) {
		return (
			<h1>Loading...</h1>
		)
	}
	return (
		<section>
			{console.log('hi')}
			{console.log(2,singlecharacter)}
			<button className="find" onClick={() => navigate("/classes")} >GO HOME</button>
			<img src={findImage} alt={singlecharacter.name} width={150} />
			<h2>You can can choose {singlecharacter.proficiency_choices[0].choose} skills</h2>
			<p className='character-name' >{singlecharacter.name}</p>
			<h2>Skills</h2>
			<p>{singlecharacter.proficiency_choices[0].from.options.map(choice => <p>{choice.item.name}</p>)}</p>
			<h2>Hit die</h2>
			<p>{singlecharacter.hit_die}</p>
			<h2>Proficiencies</h2>
			<p>{singlecharacter.proficiencies.map(choice => <p>{choice.name}</p>)}</p>
			<h2>Starting Equipment</h2>
			<p>{singlecharacter.starting_equipment.map(choice => <p>{choice.equipment.name}: {choice.quantity}</p>)}</p>
			<p></p>
			<p></p>

		</section>
	)
}