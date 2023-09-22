import { useEffect } from "react";
import { fetchSearch, fetchImage } from "../api/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { movieIdState } from "../states/recoil";

function SearchMovie() {
	const [title, setTitle] = useState("");
	const [page, setPage] = useState(1);
	const [searchResults, setSearchResults] = useState([]);
	const [movieId, setMovieId] = useRecoilState(movieIdState);
	const imgWidth = "w92";

	useEffect(() => {
		fetchSearch(title, page, (data) => {
			setSearchResults(data.results);
		});
	});

	const handleItemClick = (result) => {
		setMovieId(result.id);
		setTitle("");
	};

	return (
		<div className='flex flex-col justify-center items-center bg-[#0d253f] w-full p-5'>
			<input
				type='text'
				placeholder='Search for a movie...'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className='self-center w-1/4'
			/>

			<ul className='flex flex-row flex-wrap self-center w-full '>
				{searchResults.map((result) => (
					<div
						className='hover:bg-red-950'
						onClick={() => handleItemClick(result)}
					>
						<Link to='./pages/detailsView'>
							<img
								src={fetchImage(imgWidth, result.poster_path)}
								alt={result.title}
							></img>
							<li key={result.id}>{result.title}</li>
						</Link>
					</div>
				))}
			</ul>
		</div>
	);
}

export default SearchMovie;
