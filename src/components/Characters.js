import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

export default function Characters() {
	const [page, setPage] = useState(1);

	// Fetch Characters
	const fetchCharacters = async ({ queryKey }) => {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
		);
		return response.json();
	};

	const { data, status, isPreviousData, isLoading, isError } = useQuery(
		["characters", page],
		fetchCharacters
	);

	if (isLoading) {
		return <h4 style={{ color: "lightgreen" }}>Loading...</h4>;
	}
	if (isError) {
		return <div>Opps: Error</div>;
	}

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>
					Previous
				</button>
				<button
					disabled={isPreviousData && !data.info.next}
					onClick={() => setPage((old) => old + 1)}
				>
					Next
				</button>
			</div>
			<div className="characters">
				{data?.results?.map((character, index) => (
					<Character character={character} />
				))}
			</div>
		</>
	);
}
