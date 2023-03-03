import './Classes.css'
import CharacterCard from '../CharacterCard/CharacterCard'
import Select from 'react-select'
import { Link } from 'react-router-dom'

export default function Classes({ classes, skills }) {
	const characterCard = classes.map(oneClass => {
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
	const mappedSkills = skills.map(skill => {return {value: skill.index, label: skill.name}})
	console.log(mappedSkills)


	return (
		<section>
			<Select
        closeMenuOnSelect={false}
        // components={mappedSkills}
        isMulti
        options={mappedSkills}
        // onChange={(e) => showFilteredActivitie(e)}
      />
			{characterCard}
		</section>
	)
}