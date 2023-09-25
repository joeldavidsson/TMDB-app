import { useState, useEffect } from "react";
import { fetchGenres, fetchDiscoverBy, fetchImage } from "../api/api";

const DiscoverGenre = () => {
	const [genreList, setGenreList] = useState([]);
	const [popularByGenre, setPopularByGenre] = useState({});
	const [page, setPage] = useState(1);
	const [sort, setSort] = useState("desc");

	useEffect(() => {
		fetchGenres((genres) => {
			setGenreList(genres);
			fetchPopularMoviesForGenres(genres);
		});
	}, []);

	const fetchPopularMoviesForGenres = (genres) => {
		genres.forEach((genre) => {
			const genreId = genre.id;

			fetchDiscoverBy(page, sort, genreId, (data) => {
				setPopularByGenre((popularMap) => ({
					...popularMap,
					[genreId]: data.results,
				}));
			});
		});
	};

	return (
		<div className='flex flex-col flex-wrap'>
			<h1 className="text-center text-5xl">Discover movie by genre</h1>
			{genreList.map((data) => (
				<div key={data.id} className='text-center'>
					<h1 className='text-3xl'>{data.name}</h1>
					<ul className=''>
						<li className='flex flex-row flex-wrap gap-10'>
							{popularByGenre[data.id] &&
								popularByGenre[data.id].map((item) => (
									<li className='flex flex-col w-32 text-center justify-end'>
										<p key={item.id}>{item.title}</p>
										<img src={fetchImage("w92", item.poster_path)}></img>
									</li>
								))}
						</li>
					</ul>
				</div>
			))}
		</div>
	);
};

export default DiscoverGenre;
