import { useState, useEffect } from "react";
import { fetchDiscoverBy } from "../api/api";
import { useRecoilState } from "recoil";
import { GenreIdState, GenreTitleState } from "../states/recoil";
import { PageHandler, GetPoster } from "../components/Utilities";
import { ScrollToTopLink } from "../components/Utilities";
import DropdownSort from "../components/DropdownSort";

const GenreMovieList = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);
	const [genreId, setGenreId] = useRecoilState(GenreIdState);
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
			<h1 className='text-4xl font-semibold my-5 uppercase'>{genreTitle}</h1>
			<span className="flex w-full justify-start relative left-24">
				<DropdownSort setSort={setSort} />
			</span>
			<span className='flex flex-row flex-wrap w-full self-center justify-center text-center p-10 gap-10'>
				{movies.map((item) => (
					<ScrollToTopLink to={`../details/${item.id}`}>
						<div
							key={item.id}
							className='flex w-32 h-48 my-4 border-2 border-black hover:opacity-80 shadow-2xl'
						>
							<GetPoster movie={item} />
						</div>
						<div className='w-32 text-center hover:overflow-visible hover:whitespace-normal'>
							<p className='font-semibold'>{item.title}</p>
							<p>Rating: {item.vote_average}</p>
						</div>
					</ScrollToTopLink>
				))}
			</span>
			<div className='flex justify-center items-center mb-6'>
				<PageHandler page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
};

export default GenreMovieList;
