import { useState, useEffect } from "react";
import { fetchGenres } from "../api/api";
import { HandleItemClickGenre } from "../components/Utilities";
import { useRecoilState } from "recoil";
import { GenreIdState, GenreTitleState } from "../states/recoil";
import { ScrollToTopLink } from "../components/Utilities";

const DiscoverGenre = () => {
	const [genreList, setGenreList] = useState([]);
	const [genreId, setGenreId] = useRecoilState(GenreIdState);
	const [genreTitle, setGenreTitle] = useRecoilState(GenreTitleState);
	

	useEffect(() => {
		fetchGenres((genres) => {
			setGenreList(genres);
		});
	}, []);

	return (
		<div className='flex flex-col justify-center items-center w-full p-10'>
			<h1 className='text-center font-semibold text-4xl my-5 uppercase'>
				Discover movie by genre
			</h1>
			<span className='flex flex-row flex-wrap gap-16 w-5/6 p-10 justify-center'>
				{genreList.map((item) => (
					<ScrollToTopLink to={`../discover/${item.name}`} key={item.id}>
						<div
							className='flex flex-row justify-center items-center bg-[#A27B5C] aspect-square w-52 hover:bg-opacity-80 shadow-2xl rounded-xl'
							onClick={() =>
								HandleItemClickGenre({ item, setGenreId, setGenreTitle })
							}
						>
							<h2 className='text-2xl uppercase'>{item.name}</h2>
						</div>
					</ScrollToTopLink>
				))}
			</span>
		</div>
	);
};

export default DiscoverGenre;
