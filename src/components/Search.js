import { useEffect } from "react";
import { fetchSearch } from "../api/api";
import { useState } from "react";
import { ScrollToTopLink } from "./Utilities";
import { useRecoilState } from "recoil";
import { SearchTitleState } from "../states/recoil";
import { GetPoster } from "./Utilities";
import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchMovie() {
	const [searchTitle, setSearchTitle] = useRecoilState(SearchTitleState);
	const [page, setPage] = useState(1);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		fetchSearch(searchTitle, page, (data) => {
			setSearchResults(data.results);
		});
	}, [searchTitle]);

	return (
		<div className='flex flex-col'>
			<span className='flex justify-center items-center gap-2'>
				<HiMagnifyingGlass className='text-white h-6 w-6' />
				<input
					type='text'
					placeholder='Search for a movie...'
					value={searchTitle}
					onChange={(e) => setSearchTitle(e.target.value)}
					className='self-center text-white w-1/4 text-center text-lg p-1 rounded-2xl  outline-none bg-[#3F4E4F] focus:bg-[#DCD7C9] focus:text-black'
				/>
			</span>
			<ul className='flex flex-row flex-wrap w-full self-center justify-center bg-[#2C3639] absolute z-10  rounded-xl text-white gap-4 mt-10  shadow-2xl '>
				{searchResults.map((result) => (
					<div
						key={result.id}
						className='flex flex-col my-5 items-center text-white'
					>
						<ScrollToTopLink
							to={`../details/${result.id}`}
							onClick={() => setSearchTitle("")}
						>
							<li className='flex w-28 h-44 border-2 border-black hover:opacity-80 shadow-2xl'>
								<GetPoster movie={result} />
							</li>
							<li className='w-28 whitespace-nowrap overflow-hidden text-ellipsis text-center hover:overflow-visible hover:whitespace-normal font-semibold'>
								{result.title}
							</li>
						</ScrollToTopLink>
					</div>
				))}
			</ul>
		</div>
	);
}

export default SearchMovie;
