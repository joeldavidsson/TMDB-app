import { useState, useEffect } from "react";
import { fetchTopRated, fetchImage } from "../api/api";
import { useRecoilState } from "recoil";
import { movieIdState } from "../states/recoil";
import { Link } from "react-router-dom";
import { HandleItemClick, NextPageButton, PrevPageButton } from "./Utilities";

function TopRatedList() {
	const [list, setList] = useState([]);
	const [movieId, setMovieId] = useRecoilState(movieIdState);
	const [page, setPage] = useState(1);

	useEffect(() => {
		fetchTopRated(page, (data) => {
			const itemsWithPosters = data.results.map((item) => ({
				...item,
				poster_path: fetchImage("w154", item.poster_path),
			}));
			setList(itemsWithPosters);
			setPage(data.page);
		});
		console.log(page);
	}, [page]);

	return (
		<div className='cursor-auto'>
			<Link to='./pages/detailsView'>
				<div className=''>
					<h1 className='text-4xl'>Top rated movies</h1>
					<ul>
						{list.map((item) => (
							<li
								key={item.id}
								onClick={() => HandleItemClick({ item, setMovieId })}
							>
								<img src={item.poster_path} alt={item.title} />
								<h2>{item.title}</h2>
								Rating: {item.vote_average}
							</li>
						))}
					</ul>
				</div>
			</Link>
			<NextPageButton page={page} setPage={setPage} />
			<PrevPageButton page={page} setPage={setPage} />
		</div>
	);
}

export default TopRatedList;
