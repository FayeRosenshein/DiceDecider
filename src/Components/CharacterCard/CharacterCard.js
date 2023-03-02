import './CharacterCard.css'

export default function CharacterCard({name, index, image}) {
	// displayed a character card with name and img
	const findImage = () => {
		if ('barbarian' === index) {
			console.log('barbarian')
			return `../../public/assests/${index}.png`
		}
	}
	return (
		<section>
        <p className='character-name' >{name}</p>
				<p>{findImage}</p>
        <img src={image} alt={index} width={150} />
		</section>
	)
}