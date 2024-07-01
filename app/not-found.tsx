"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
	const routeName = usePathname();
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-6xl font-bold text-gray-50">糟糕!</h1>
			<p className="mt-4 text-2xl text-gray-200">
				你访问的<span> &quot; {routeName} &quot; </span>不存在.
			</p>
			<Link
				href="/"
				className="mt-6 px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
			>
				回到首页
			</Link>
		</div>
	);
}
