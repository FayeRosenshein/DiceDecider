import { useEffect, useState } from 'react'
import { fetchClassDetails } from '../../apiCalls/apiCalls'
import './OneClassView.css'

export default function LargeCharacterCard({singleClass}) {
	const [singlecharacter, setSingleCharacter] = useState([])

	useEffect(() => {
		fetchClassDetails('barbarian')
			.then(data => {
				console.log(data.proficiency_choices[0].from.options[0].item.name)
				setSingleCharacter(data)})
	}, [])

	const mappedProficiencyChoices = singlecharacter.proficiency_choices[0].from.options.map(choice => choice.item.name)
	console.log(mappedProficiencyChoices)
	// class detailing card
	// classes.proficiency_choices[0].options.item.name
	return (
		<section>
        <img alt={singlecharacter.name} width={150} />
        <p className='character-name' >{singlecharacter.name}</p>
				<p>{}</p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>

		</section>
	)
}
//proficiency_choices.from.options.item.name
// {
//   "index": "barbarian",
//   "name": "Barbarian",
//   "hit_die": 12,
//   "proficiency_choices": [
//     {
//       "desc": "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
//       "choose": 2,
//       "type": "proficiencies",
//       "from": {
//         "option_set_type": "options_array",
//         "options": [
//           {
//             "option_type": "reference",
//             "item": {
//               "index": "skill-animal-handling",
//               "name": "Skill: Animal Handling",
//               "url": "/api/proficiencies/skill-animal-handling"
//             }
//           },
//           {
//             "option_type": "reference",
//             "item": {
//               "index": "skill-athletics",
//               "name": "Skill: Athletics",
//               "url": "/api/proficiencies/skill-athletics"
//             }
//           },
//           {
//             "option_type": "reference",
//             "item": {
//               "index": "skill-intimidation",
//               "name": "Skill: Intimidation",
//               "url": "/api/proficiencies/skill-intimidation"
//             }
//           },
//           {
//             "option_type": "reference",
//             "item": {
//               "index": "skill-nature",
//               "name": "Skill: Nature",
//               "url": "/api/proficiencies/skill-nature"
//             }
//           },
//           {
//             "option_type": "reference",
//             "item": {
//               "index": "skill-perception",
//               "name": "Skill: Perception",
//               "url": "/api/proficiencies/skill-perception"
//             }
//           },
//           {
//             "option_type": "reference",
//             "item": {
//               "index": "skill-survival",
//               "name": "Skill: Survival",
//               "url": "/api/proficiencies/skill-survival"
//             }
//           }
//         ]
//       }
//     }
//   ]}