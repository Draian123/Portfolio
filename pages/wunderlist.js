import React from "react";
import Image from "next/image";
import Wunderlist from "../public/assets/projects/Wunderlist.PNG";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Fitness = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolue z-1"
					layout="fill"
					objectFit="cover"
					src={Wunderlist}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Wunderlist</h2>
					<p>HTML / CSS / Javascript / MongoDB / Mongoose</p>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<br />
					<p>
					Built on the Express.js framework and the EJS templating engine, Wunderlist is a mock-up project for a listing application with a modern minimalistic design.
					It features basic authentication, cookies and  CRUD operations. It lets you create all types of lists and helps you organize your life. You can also use it for bucketlist or whatever type of lists you would ever need.
					</p>
					<p className="py-3">
					This is the second sprint-like project that we were asked to deliver as part of the Ironhack bootcamp.

					</p>
                    <br />
                    <p>
                    Account: demo
                    <br />
                    Password: demo123
                    </p>
					<br />
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/Draian123/WUNDERLIST"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://wunderlist.adaptable.app/"
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
								Javascript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								MongoDB
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								JavaScript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Bcrypt
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								JSON Web Tokens
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Express
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

export default Fitness;
