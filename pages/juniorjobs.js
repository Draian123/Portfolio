import React from "react";
import Image from "next/image";
import JuniorIMG from "../public/assets/projects/JuniorJobs.PNG";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const JuniorJobs = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolue z-1"
					layout="fill"
					objectFit="cover"
					src={JuniorIMG}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Junior Jobs</h2>
					<p>React / MongoDB / Mongoose / Express / Javascript / NodeJS / Material UI / JWT</p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<br />
					<p>
					Junior Jobs is a job platform meant for junior developers to connect with companies and apply for entry-level positions, and for companies to discover new talents to fill their vacancies.
					The client runs on React, user interface relies heavily on Material UI, server and REST APIs run on Express.js.
					</p>
					<br />
					<p>
						Junior Account: abcd@abcd.com
						<br />
						Company Account: abcd
						<br />
						Password: 000000
						</p>
					<br />
					<p>					🏆 AWARDS:
					The project was showcased during the Hackshow on March 29th, 2023 in front of a live audience of 150 people and has been voted for the best project in the Web Development category.</p>
					<br />
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/fabrizio-giffi/juniorjobs-frontend"
					>
						<button className="px-8 py-2 mt-4 mr-8">Frontend-Code</button>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/fabrizio-giffi/juniorjobs-backend"
					>
						<button className="px-8 py-2 mt-4 mr-8">Backend-Code</button>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://juniorjobs-frontend.netlify.app/"
					>
						<button className="px-8 py-2 mt-4">Demo</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								React
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								MongoDB
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Mongoose
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Express
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								NodeJS
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Material UI
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								JSON Web Tokens
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	);
};

export default JuniorJobs;
