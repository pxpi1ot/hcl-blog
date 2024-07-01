"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import SparklesText from "../magicui/sparkles-text";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const Projects = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});

	const imageVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			variants={imageVariants}
			animate={inView ? "visible" : "hidden"}
			className="flex flex-col items-center justify-center pb-20"
			id="projects"
		>
			<motion.div
				variants={slideInFromBottom(0.5)}
				className="text-[30px] text-white font-medium mt-[10px] text-center "
			>
				<SparklesText className="text-4xl" text="我的项目" />
			</motion.div>
			<motion.div
				variants={slideInFromBottom(0.5)}
				className="h-full w-full flex gap-10 mt-10 justify-center"
			>
				<div className="w-[90%] flex flex-col flex-wrap md:flex-row gap-10 mx-auto">
					<ProjectCard
						href="/"
						cta="查看项目"
						name="Modern Next.js Portfolio"
						className=" h-[400px] sm:w-[90%] md:w-[45%] lg:w-[400px]"
						background={
							<div>
								<Image
									className="absolute origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_10%)] group-hover:scale-110 "
									width={500}
									height={500}
									src="/NextWebsite.png"
									alt=""
								/>
							</div>
						}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
					<ProjectCard
						href="/"
						cta="查看项目"
						name="Modern Next.js Portfolio"
						className=" h-[400px] sm:w-[90%] md:w-[45%] lg:w-[400px]"
						background={
							<div>
								<Image
									className="absolute origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_10%)] group-hover:scale-110"
									width={500}
									height={500}
									src="/NextWebsite.png"
									alt=""
								/>
							</div>
						}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
					<ProjectCard
						href="/"
						cta="查看项目"
						name="Modern Next.js Portfolio"
						className=" h-[400px] sm:w-[90%] md:w-[45%] lg:w-[400px]"
						background={
							<div>
								<Image
									className="absolute origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_10%)] group-hover:scale-110"
									width={500}
									height={500}
									src="/NextWebsite.png"
									alt=""
								/>
							</div>
						}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
				</div>
			</motion.div>
			<Link href="/projects">
				<p className="text-neutral-400 mt-10 cursor-pointer transition-all duration-300 hover:text-neutral-100 hover:scale-110">
					查看更多
				</p>
			</Link>
		</motion.div>
	);
};

export default Projects;
