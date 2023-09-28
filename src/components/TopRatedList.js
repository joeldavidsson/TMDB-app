import { useState, useEffect } from "react";
import { fetchTopRated, fetchImage } from "../api/api";
import { useRecoilState } from "recoil";
import { movieIdState } from "../states/recoil";
import { Link } from "react-router-dom";
import { HandleItemClick, PageHandler} from "./Utilities";

function TopRatedList() {
	const [list, setList] = useState([]);
	const [movieId, setMovieId] = useRecoilState(movieIdState);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);

	useEffect(() => {
		fetchTopRated(page, (data) => {
			const itemsWithPosters = data.results.map((item) => ({
				...item,
				poster_path: fetchImage(item.poster_path),
			}));
			setList(itemsWithPosters);
			setPage(data.page);
		});
		console.log(page);
	}, [page]);

	return (
		<div>
			<div className='flex flex-col justify-center items-center w-full p-10'>
				<h1 className='text-4xl'>Top rated movies</h1>
				<ul className='flex flex-row flex-wrap gap-24 justify-center p-10'>
					{list.map((item) => (
						<Link to='./pages/detailsView'>
							<li
								className='text-center w-40'
								key={item.id}
								onClick={() => HandleItemClick({ item, setMovieId })}
							>
								<img src={item.poster_path} alt={item.title} />
								<p className='font-semibold'>{item.title}</p>
								<p>Rating: {item.vote_average}</p>
							</li>
						</Link>
					))}
				</ul>
			</div>
			<div className='flex justify-center items-center'>
				<PageHandler page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
}

export default TopRatedList;
