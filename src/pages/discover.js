import { useState, useEffect } from "react";
import { fetchGenres, fetchDiscoverBy, fetchImage } from "../api/api";
import { HandleItemClickGenre } from "../components/Utilities";
import { useRecoilState } from "recoil";
import { GenreIdState, GenreTitleState } from "../states/recoil";
import { Link } from "react-router-dom";

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
			<h1 className='text-center text-5xl'>Discover movie by genre</h1>
			<span className='flex flex-row flex-wrap gap-16 justify-evenly w-4/6 p-10'>
				{genreList.map((item) => (
					<Link to='../pages/discoverGenreView'>
						<div
							key={item.id}
							className='flex flex-row justify-center items-center bg-red-700 aspect-square w-56'
							onClick={() =>
								HandleItemClickGenre({ item, setGenreId, setGenreTitle })
							}
						>
							<h2 className='text-3xl'>{item.name}</h2>
						</div>
					</Link>
				))}
			</span>
		</div>
	);
};

export default DiscoverGenre;
