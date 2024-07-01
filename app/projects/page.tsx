"use client";

import ProjectCard from "@/components/sub/ProjectCard";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import Image from "next/image";
import SparklesText from "@/components/magicui/sparkles-text";

const Page = () => {
	return (
		<div className="h-full w-full flex flex-col gap-10 my-24 items-center ">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={slideInFromBottom(0.5)}
				className="text-[30px] text-white font-medium mt-[10px] text-center "
			>
				<SparklesText className="text-4xl" text="我的项目" />
			</motion.div>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={slideInFromBottom(0.8)}
				className="cursive text-[20px] text-gray-200  text-center"
			>
				这里是我在技术领域中努力实践和应用的证明。
			</motion.div>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={slideInFromBottom(1)}
				className="w-[90%] flex flex-col flex-wrap md:flex-row gap-10 mx-auto"
			>
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
					className=" h-[400px] sm:w-[90%] md:w-[50%] lg:w-[400px]"
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
					className=" h-[400px] sm:w-[90%] md:w-[50%] lg:w-[400px]"
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
					className=" h-[400px] sm:w-[90%] md:w-[50%] lg:w-[400px]"
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
			</motion.div>
		</div>
	);
};

export default Page;
