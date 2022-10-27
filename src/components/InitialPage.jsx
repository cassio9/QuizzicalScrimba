import { Link } from "react-router-dom";
import "../css/start.css";

function InitialPage(props) {
	return (
		<div className="initial-page">
			<div className="initial-page-container">
				<h1>Quizzical</h1>
				<p>Let's test your knowledge</p>
				<Link className="btn" to="quiz">
					Start
				</Link>
			</div>
			<div className="up-background"></div>
			<div className="down-background"></div>
		</div>
	);
}

export default InitialPage;
