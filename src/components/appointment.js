import React from 'react'
import "../App.css";
import { useHistory } from "react-router-dom";

function Appointment() {
	const history = useHistory();
	const home = () => {
		history.push("/");
	}
	return (
		<>
			<div className="card " >
				<h1>Courses </h1>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						Data Structures & Algorithms
					</li>
					<li className="list-group-item">
						Competitive Programming
					</li>
					<li className="list-group-item">
						Full Stack Development
					</li>
					<li className="list-group-item">
						Java Backend
					</li>
				</ul>
			</div>
			<button className="btn btn-success" onClick={home}>
				Back to Home
			</button>
		</>
	)
}

export default Appointment
