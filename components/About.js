import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#1E90FF]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						Hi there!, I’m Dennis, a junior fullstack software developer.
					</p>
					<p className="py-2 text-gray-600">
						Throughout my life, technology and computers have always held a special appeal for me.
						The intricate nature of programming never fails to captivate my attention, 
						driving me to delve deeper into this fascinating field. As a result, I embarked on a journey 
						of learning JavaScript and eventually took the step of enrolling in Ironhacks Web Development 
						Bootcamp, a highly renowned program in America and internationally.
					</p>
					<p className="py-2 text-gray-600">
						Dedication to continuous learning is at the core of my values, 
						firmly believing that one should never cease expanding their knowledge.
					</p>
					<p className="py-2 text-gray-600">
						Always on the lookout for fresh opportunities to broaden my understanding of the internet and
						web development, you&apos;ll often find me locked into my laptop, sipping a bottle of club mate. 
						My ultimate aspiration is to join a team of talented individuals, from whom I can learn 
						and collaborate with to build captivating digital experiences.
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my latest projects
						</p>
					</Link>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={AboutImg} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
