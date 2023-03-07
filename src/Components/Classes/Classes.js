import './Classes.css'
import CharacterCard from '../CharacterCard/CharacterCard'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Classes({ classes}) {
	const [searchInput, setSearchInput] = useState('')

	const filteredClasses = classes.filter(oneClass => oneClass.index.toLowerCase().match(searchInput.toLowerCase()))

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

	return (
		<section>
			<div className='select'>
			<SearchBar setSearchInput={setSearchInput} searchInput={searchInput}/>
			</div>
			<div className='character-card-container'>
				{!searchInput && characterCard}
				{searchInput && filteredCharacterCard}
			</div>
		</section>
	)
}