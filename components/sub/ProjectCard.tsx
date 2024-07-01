"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import { BentoCard } from "@/components/magicui/bento-grid";

interface Props {
	name: string;
	description: string;
	href: string;
	cta: string;
	className: string;
	background: ReactNode;
}

const ProjectCard = (props: Props) => {
	// return (
	// 	<div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
	// 		<Image
	// 			src={src}
	// 			alt={title}
	// 			width={1000}
	// 			height={1000}
	// 			className="w-full object-contain"
	// 		/>

	// 		<div className="relative p-4">
	// 			<h1 className="text-2xl font-semibold text-white">{title}</h1>
	// 			<p className="mt-2 text-gray-300">{description}</p>
	// 		</div>
	// 	</div>
	// );

	return <BentoCard key={props.name} {...props} />;
};

export default ProjectCard;
