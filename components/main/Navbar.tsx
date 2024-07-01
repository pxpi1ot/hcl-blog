"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
	const currentPathname = usePathname();

	// 检查当前路径是否与链接匹配
	const isActive = (pathname: string) => currentPathname === pathname;

	return (
		<div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-20">
			<div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
				<div className="h-auto w-auto flex flex-row items-center ">
					<Link href="/" className="flex flex-row">
						<div className="cursive text-gray-200 flex items-center text-2xl hover:scale-110 transition-all duration-300 ">
							Pxpilot
						</div>
					</Link>
					<div className="w-fit h-full flex flex-row items-center justify-between">
						<div className="flex items-center w-full h-auto gap-5 ml-[30px] px-[20px] py-[10px] text-gray-300 text-sm ">
							{/* <Link
								href="/blog"
								className={`${
									isActive("/blog") ? "text-[#b49bff]" : "hover:text-white"
								} cursor-pointer `}
							>
								博客
							</Link> */}

							<Link
								href="/projects"
								className={`${
									isActive("/projects") ? "text-[#b49bff]" : "hover:text-white"
								} cursor-pointer transition-all duration-300 hidden sm:block`}
							>
								项目
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-row gap-5 cursor-pointer hover:scale-110 transition-all duration-300 ">
					{Socials.map(social => (
						<Link key={social.name} href={social.href}>
							<Image
								src={social.src}
								alt={social.name}
								width={24}
								height={24}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
