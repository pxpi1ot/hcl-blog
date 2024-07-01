"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { OrbitingCirclesDemo } from "./OrbitingCircles";

const HeroContent = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
		>
			<div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
				<motion.span
					variants={slideInFromLeft(0.5)}
					className="flex flex-col gap-6 mt-4 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
				>
					嗨! 👋 我是 Pxpilot
				</motion.span>

				<motion.p
					variants={slideInFromLeft(0.8)}
					className="mt-5 text-4xl font-bold"
				>
					<TypeAnimation
						sequence={[
							"一名前端开发工程师",
							2000,
							"A Web <Developer /> .",
							2000,
						]}
						wrapper="span"
						speed={50}
						className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
						repeat={Infinity}
					/>
				</motion.p>

				<motion.p
					variants={slideInFromLeft(1)}
					className="text-lg text-gray-400 my-5 max-w-[600px]"
				>
					我热爱构建富有创意和高效的Web应用程序。喜欢使用 React 和 Next.js
					来开发现代、响应式的用户界面，并且对前端交互动画情有独钟，致力于通过动画提升用户体验。
					欢迎访问我的个人网站，了解更多关于我的项目
					<span className="line-through">和技术博客(暂无)</span>
					。如果你对前端开发同样充满热情，或者有任何问题和合作机会，请随时与我联系！
				</motion.p>
				{/* <motion.a
					variants={slideInFromLeft(1)}
					className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
				>
					Learn More!
				</motion.a> */}
			</div>

			<motion.div
				variants={slideInFromRight(0.8)}
				className="w-full h-full justify-center items-center hidden md:flex"
			>
				{/* <Image
					src="/mainIconsdark.svg"
					alt="work icons"
					height={650}
					width={650}
				/> */}
				<OrbitingCirclesDemo />
			</motion.div>
		</motion.div>
	);
};

export default HeroContent;
