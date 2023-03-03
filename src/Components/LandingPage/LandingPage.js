import './LandingPage.css'
import { useNavigate } from "react-router-dom"

function LandingPage() {
	let navigate = useNavigate()
	// pick character option
	return (
		<div>
			<p>Hi</p>
			<button className="find" onClick={() => navigate("/classes")} >DESIGN A CHARACTER</button>
		</div>
	)
}

export default LandingPage