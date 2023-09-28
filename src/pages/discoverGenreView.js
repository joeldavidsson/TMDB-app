import { useState, useEffect } from "react";
import { fetchDiscoverBy, fetchImage } from "../api/api";
import { useRecoilState } from "recoil";
import { GenreIdState, movieIdState, GenreTitleState } from "../states/recoil";
import { HandleItemClick, PageHandler } from "../components/Utilities";
import { Link } from "react-router-dom";
import DropdownSort from "../components/DropdownSort";

const GenreMovieList = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);
	const [genreId, setGenreId] = useRecoilState(GenreIdState);
	const [movieId, setMovieId] = useRecoilState(movieIdState);
	const [genreTitle, setGenreTitle] = useRecoilState(GenreTitleState);
	const [sort, setSort] = useState("popularity.desc");

	useEffect(() => {
		fetchDiscoverBy(page, sort, genreId, (data) => {
			setMovies(data.results);
			setTotalPages(data.total_pages);
			console.log(genreId);
			console.log(data);
		});
	}, [page, sort]);

	return (
		<div className='flex flex-col justify-center items-center w-full p-10'>
			<h1 className='text-center text-5xl'>{genreTitle}</h1>
			<DropdownSort setSort={setSort} />
			<span className='flex flex-row flex-wrap gap-16 p-10'>
				{movies.map((item) => (
					<Link to={`../pages/detailsView/${item.id}`}>
						<div
							key={item.id}
							className='flex flex-col justify-center items-center w-56 text-center'
							onClick={() => HandleItemClick({ item, setMovieId })}
						>
							<img src={fetchImage(item.poster_path)}></img>
							<p>{item.title}</p>
							<p>Rating: {item.vote_average}</p>
						</div>
					</Link>
				))}
			</span>
			<div className='flex justify-center items-center'>
				<PageHandler page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
};

export default GenreMovieList;
