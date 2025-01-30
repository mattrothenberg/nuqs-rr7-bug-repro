import {
	ArrowsInLineHorizontal,
	ArrowsOutLineHorizontal,
} from "@phosphor-icons/react";
import type { Route } from "./+types/home";
import { useState } from "react";
import { useFavoriteNumberParam, useStatusParam } from "~/hooks";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<div className="flex overflow-hidden divide-x h-screen">
			{sidebarOpen ? <Sidebar /> : null}
			<div className="flex flex-col overflow-hidden flex-1 divide-y">
				<div className="h-16 shrink-0 px-4 flex items-center">
					<button
						type="button"
						onClick={() => setSidebarOpen((curr) => !curr)}
						className="size-8 border border-black flex items-center justify-center"
					>
						{sidebarOpen ? (
							<ArrowsInLineHorizontal size={20} weight="bold" />
						) : (
							<ArrowsOutLineHorizontal size={20} weight="bold" />
						)}
					</button>
				</div>
				<div className="flex-1 overflow-auto">
					<div style={{ height: 2000 }} />
				</div>
			</div>
		</div>
	);
}

function Sidebar() {
	return (
		<aside className="w-72 shrink-0">
			<div className="flex flex-col gap-5 p-5">
				<StatusFilter />
				<FavoriteNumberInput />
			</div>
		</aside>
	);
}

const statusOptions = [
	{
		label: "Open",
		value: "open",
	},
	{
		label: "Closed",
		value: "closed",
	},
	{
		label: "All",
		value: "all",
	},
];

function StatusFilter() {
	const [status, setStatus] = useStatusParam();

	return (
		<select
			className="border p-2"
			value={status}
			onChange={(e) => setStatus(e.target.value)}
		>
			{statusOptions.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}

function FavoriteNumberInput() {
	const [favoriteNumber, setFavoriteNumber] = useFavoriteNumberParam();

	return (
		<input
			className="border p-2"
			type="number"
			value={favoriteNumber}
			onChange={(e) => setFavoriteNumber(Number.parseInt(e.target.value))}
		/>
	);
}
