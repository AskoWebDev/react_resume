import React from 'react'

function Skills() {
	return (

		<div className="knowledge">
			<div className="educ_section">
				<div className="education_text">
					EDUCATION
				</div>
				<div className="education">
					<ul>
						<li>School #20 in Odessa</li>
						<li>English courses</li>
					</ul>
				</div>
			</div>
			<div className="skills">
				<div className="skills_text">
					SKILLS
				</div>
				<div className="list_of_skills">
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>Javascript</li>
						<li>ReactJs</li>
						<li>Pyhton(beginner)</li>
						<li>Django(beginner)</li>
					</ul>
				</div>
			</div>
		</div>
	);
}


function Body() {
	return (
		<div className="body_container">
			<div className="profile">
				Profile
			</div>
			<p className="engaging_text">
				I'm a beginner web developer, I learn programming since November of 2021,
				my primary goal is front-end programming, but I also have some knowledge of back-end
				(Pyhton, Django), for my further grow as a programmer, and to help others to build their
				product, i would like to get a job.
			</p>
			<Skills />
		</div>

	);
}

export default Body;