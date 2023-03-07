import './Classes.css'
import CharacterCard from '../CharacterCard/CharacterCard'
import Select from 'react-select'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Classes({ classes, skills, allClassFeatures}) {
	const [selectedClasses, setSelectedClasses] = useState(classes)
	const [searchInput, setSearchInput] = useState('')

	
	// const mappedSkills = skills.map(skill => { return { value: skill.index, label: skill.name } })

	// const showilteredClasses = (arrayOfInput) => {
	// 	if (arrayOfInput.length === 0) {
	// 		setSelectedClasses(classes);
	// 		return;
	// 	}
	// 	// {singlecharacter.proficiency_choices[0].from.options.map(choice => choice.item.index)}
	// 	const mappedFeatures = allClassFeatures.map(classFeature => classFeature.proficiency_choices[0].from.options.map(choice => choice.item.index))
	// 	console.log(mappedFeatures)
	// 	const filteredClasses = classes.filter((oneClass) => {
	// 		return arrayOfInput.every((input) => {
	// 			return input.value === true})
	// 	})
	// 	setSelectedClasses(filteredClasses)
	// }

	const filteredClasses = classes.filter(oneClass => oneClass.index.toLowerCase().match(searchInput.toLowerCase()))

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

	const filteredCharacterCard = filteredClasses.map(oneClass => {
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
			<SearchBar setSearchInput={setSearchInput} searchInput={searchInput}/>
				{/* <Select
					closeMenuOnSelect={false}
					// components={mappedSkills}
					isMulti
					options={mappedSkills}
				onChange={(e) => showFilteredClasses(e)}
				/> */}
			</div>
			<div className='character-card-container'>
				{!searchInput && characterCard}
				{searchInput && filteredCharacterCard}
			</div>
		</section>
	)
}



// [
// 	[
// 			"skill-animal-handling",
// 			"skill-athletics",
// 			"skill-intimidation",
// 			"skill-nature",
// 			"skill-perception",
// 			"skill-survival"
// 	],
// 	[
// 			"skill-arcana",
// 			"skill-animal-handling",
// 			"skill-insight",
// 			"skill-medicine",
// 			"skill-nature",
// 			"skill-perception",
// 			"skill-religion",
// 			"skill-survival"
// 	],
// 	[
// 			"skill-history",
// 			"skill-insight",
// 			"skill-medicine",
// 			"skill-persuasion",
// 			"skill-religion"
// 	],
// 	[
// 			"skill-acrobatics",
// 			"skill-animal-handling",
// 			"skill-arcana",
// 			"skill-athletics",
// 			"skill-deception",
// 			"skill-history",
// 			"skill-insight",
// 			"skill-intimidation",
// 			"skill-investigation",
// 			"skill-medicine",
// 			"skill-nature",
// 			"skill-perception",
// 			"skill-performance",
// 			"skill-persuasion",
// 			"skill-religion",
// 			"skill-sleight-of-hand",
// 			"skill-stealth",
// 			"skill-survival"
// 	],
// 	[
// 			"skill-acrobatics",
// 			"skill-animal-handling",
// 			"skill-athletics",
// 			"skill-history",
// 			"skill-insight",
// 			"skill-intimidation",
// 			"skill-perception",
// 			"skill-survival"
// 	],
// 	[
// 			"skill-acrobatics",
// 			"skill-athletics",
// 			"skill-history",
// 			"skill-insight",
// 			"skill-religion",
// 			"skill-stealth"
// 	],
// 	[
// 			"skill-athletics",
// 			"skill-insight",
// 			"skill-intimidation",
// 			"skill-medicine",
// 			"skill-persuasion",
// 			"skill-religion"
// 	],
// 	[
// 			"skill-animal-handling",
// 			"skill-athletics",
// 			"skill-insight",
// 			"skill-investigation",
// 			"skill-nature",
// 			"skill-perception",
// 			"skill-stealth",
// 			"skill-survival"
// 	],
// 	[
// 			"skill-acrobatics",
// 			"skill-athletics",
// 			"skill-deception",
// 			"skill-insight",
// 			"skill-intimidation",
// 			"skill-investigation",
// 			"skill-perception",
// 			"skill-performance",
// 			"skill-persuasion",
// 			"skill-sleight-of-hand",
// 			"skill-stealth"
// 	],
// 	[
// 			"skill-arcana",
// 			"skill-deception",
// 			"skill-insight",
// 			"skill-intimidation",
// 			"skill-persuasion",
// 			"skill-religion"
// 	],
// 	[
// 			"skill-arcana",
// 			"skill-deception",
// 			"skill-history",
// 			"skill-intimidation",
// 			"skill-investigation",
// 			"skill-nature",
// 			"skill-religion"
// 	],
// 	[
// 			"skill-arcana",
// 			"skill-history",
// 			"skill-insight",
// 			"skill-investigation",
// 			"skill-medicine",
// 			"skill-religion"
// 	]
// ]