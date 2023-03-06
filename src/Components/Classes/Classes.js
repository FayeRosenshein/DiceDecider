import './Classes.css'
import CharacterCard from '../CharacterCard/CharacterCard'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Classes({ classes, skills, allClassFeatures}) {
	const [selectedClasses, setSelectedClasses] = useState(classes)
	
	const mappedSkills = skills.map(skill => { return { value: skill.index, label: skill.name } })

	const showFilteredClasses = (arrayOfInput) => {
		if (arrayOfInput.length === 0) {
			setSelectedClasses(classes);
			return;
		}
		// {singlecharacter.proficiency_choices[0].from.options.map(choice => choice.item.index)}
		const mappedFeatures = allClassFeatures.map(classFeature => classFeature.index)
		console.log(mappedFeatures)
		const filteredClasses = classes.filter((oneClass) => {
			return arrayOfInput.every((input) => {
				return input.value === true});
		});
		setSelectedClasses(filteredClasses);
	};

	const characterCard = selectedClasses.map(oneClass => {
		return (
			<Link to={`/classes/${oneClass.index}`} key={oneClass.index} style={{ textDecoration: 'none' }}>
				<CharacterCard
					key={oneClass.index}
					index={oneClass.index}
					name={oneClass.name}
					url={oneClass.url}
				/>
			</Link>
		)
	})
	// console.log(mappedSkills)



	return (
		<section>
			<div className='select'>
				<Select
					closeMenuOnSelect={false}
					// components={mappedSkills}
					isMulti
					options={mappedSkills}
				onChange={(e) => showFilteredClasses(e)}
				/>
			</div>
			<div className='character-card-container'>
				{characterCard}
			</div>
		</section>
	)
}