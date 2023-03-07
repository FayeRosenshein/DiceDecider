import './LandingPage.css'
import { useNavigate } from "react-router-dom"

function LandingPage() {
	let navigate = useNavigate()
	// pick character option
	return (
		<div className='landing-page'>
			<button className="design-character" onClick={() => navigate("/classes")} >DESIGN A CHARACTER</button>
		</div>
	)
}

export default LandingPage