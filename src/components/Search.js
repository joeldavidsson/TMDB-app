import { useEffect } from "react";
import { fetchSearch } from "../api/api";
import { useState } from "react";

function SearchMovie() {
	const [title, setTitle] = useState("");
	const [page, setPage] = useState(1);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		fetchSearch(title, page, (data) => {
			setSearchResults(data.results);
		});
	});

	return (
		<div className='flex flex-col justify-center items-center bg-[#0d253f] w-full p-5'>
			<input
				type='text'
				placeholder='Search for a movie...'
				value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="self-center w-1/4"
			/>
			{/* Render search results */}
			<ul className="self-center w-1/4">
				{searchResults.map((result) => (
					<li key={result.id}>{result.title}</li>
				))}
			</ul>
		</div>
	);
}

export default SearchMovie;
