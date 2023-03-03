import './Classes.css'
import CharacterCard from '../CharacterCard/CharacterCard'
import { Link } from 'react-router-dom'

export default function Classes({ classes }) {
	const characterCard = classes.map(oneClass => {
		return (
			<Link to={`/${classes.index}`} key={classes.index} style={{ textDecoration: 'none' }}>
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
			{characterCard}
		</section>
	)
}