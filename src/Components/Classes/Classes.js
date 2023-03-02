import './Classes.css'
import CharacterCard from '../CharacterCard/CharacterCard'

export default function Classes({classes}) {
	const characterCard = classes.map(oneClass => {
		return (
			<CharacterCard 
			key={oneClass.index}
			index={oneClass.index}
			name={oneClass.name}
			url={oneClass.url}
			/>
		)
	})
	

	return (
		<section>
			{characterCard}
		</section>
	)
}