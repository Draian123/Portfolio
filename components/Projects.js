import React from "react";
import ProjectItem from "./ProjectItem";
import batman from "../public/assets/projects/batman.PNG";
import EcomFrontIMG from "../public/assets/projects/EcomFront.PNG";
import JuniorIMG from "../public/assets/projects/JuniorJobs.PNG";
import ecomIMG from "../public/assets/projects/EcomAdmin.PNG";
import fitness from "../public/assets/projects/gym.PNG";
import Wunderlist from "../public/assets/projects/Wunderlist.PNG";


const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl uppercase tracking-widest text-[#1E90FF]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Batman Shooter Game"
						backgroundImg={batman}
						projectUrl="/batman"
						tech="JS HTML CSS"
					/>
					<ProjectItem
						title="Fitness Frontend"
						backgroundImg={fitness}
						projectUrl="/fitness"
						tech="HTML CSS JS TS"
					/>
					<ProjectItem
						title="Wunderlist"
						backgroundImg={Wunderlist}
						projectUrl="/wunderlist"
						tech="HTML CSS JS MongoDB Express Mongoose"
					/>
					<ProjectItem
						title="Junior Jobs"
						backgroundImg={JuniorIMG}
						projectUrl="/juniorjobs"
						tech="MERN Material UI"
					/>
					<ProjectItem
						title="Ecommerce Admin Dashboard"
						backgroundImg={ecomIMG}
						projectUrl="/ecommerceAdmindash"
						tech="NextJS, Tailwind, Next Auth ..."
					/>
					<ProjectItem
						title="Ecommerce Front"
						backgroundImg={EcomFrontIMG}
						projectUrl="/ecommerceFront"
						tech="NextJS, Styled Components, Stripe, Next Auth ..."
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
