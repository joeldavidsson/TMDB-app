import { useEffect } from "react";
import { fetchSearch, fetchImage } from "../api/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { movieIdState, SearchTitleState } from "../states/recoil";

function SearchMovie() {
	const [searchTitle, setSearchTitle] = useRecoilState(SearchTitleState);
	const [page, setPage] = useState(1);
	const [searchResults, setSearchResults] = useState([]);
	const [movieId, setMovieId] = useRecoilState(movieIdState);

	useEffect(() => {
		fetchSearch(searchTitle, page, (data) => {
			setSearchResults(data.results);
		});
	});

	const handleItemClick = (result) => {
		setMovieId(result.id);
		setSearchTitle("");
	};

	return (
		<div className='flex flex-col justify-center items-center bg-[#0d253f] w-full p-5'>
			<input
				type='text'
				placeholder='Search for a movie...'
				value={searchTitle}
				onChange={(e) => setSearchTitle(e.target.value)}
				className='self-center w-1/4'
			/>

			<ul className='flex flex-row flex-wrap self-center w-full '>
				{searchResults.map((result) => (
					<div
						className='hover:bg-red-950'
						onClick={() => handleItemClick(result)}
						key={result.id}
					>
						<Link to='./pages/detailsView'>
							<li>{result.title}</li>
							<li>
								<img src={fetchImage("w92", result.poster_path)}></img>
							</li>
						</Link>
					</div>
				))}
			</ul>
		</div>
	);
}

export default SearchMovie;
