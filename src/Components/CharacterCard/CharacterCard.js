import './CharacterCard.css'

export default function CharacterCard({name, index}) {
	// displayed a character card with name and img
	const findImage = `/assets/${index}.png`
	return (
		<section>
        <p className='character-name' >{name}</p>
        <img src={findImage} alt={index} width={150} />
		</section>
	)
}