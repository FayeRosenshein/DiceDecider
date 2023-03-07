import './CharacterCard.css'

export default function CharacterCard({name, index}) {
	// displayed a character card with name and img
	const findImage = `/assets/${index}.png`
	return (
		<section className='character-card'>
        <h2 className='character-name'>{name}</h2>
        <img src={findImage} alt={index} className='character-pic'/>
		</section>
	)
}