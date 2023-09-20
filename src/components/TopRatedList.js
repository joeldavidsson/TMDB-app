import { useState, useEffect } from "react";
import { fetchTopRated, fetchImage } from "../api/api";
import { useRecoilState } from "recoil";
import { movieIdState } from "../states/recoil";
import { Link } from "react-router-dom";

function TopRatedList() {
	const [list, setList] = useState([]);

	const [movieId, setMovieId] = useRecoilState(movieIdState);
	const [page, setPage] = useState(1);

	useEffect(() => {
		fetchTopRated((data) => {
			const itemsWithPosters = data.results.map((item) => ({
				...item,
				poster_path: fetchImage(item.poster_path),
			}));
			setList(itemsWithPosters);
			setPage(data.page);
		}, page);
		console.log(page);
	}, [page]);

	const handleItemClick = (item) => {
		setMovieId(item.id);
	};

	return (
		<>
			<Link to='./pages/detailsView'>
				<div className=''>
					<h1 className="text-4xl">Top rated movies</h1>
					<ul>
						{list.map((item) => (
							<li key={item.id}>
								<img
									src={item.poster_path}
									alt={item.title}
									onClick={() => handleItemClick(item)}
								/>
								<h2>{item.title}</h2>
								Rating: {item.vote_average}
							</li>
						))}
					</ul>
				</div>
			</Link>
			<button
				onClick={() => {
					setPage(page + 1);
				}}
			>
				Next Page
			</button>
			<button
				onClick={() => {
					if (page > 1) {
						setPage(page - 1);
					}
				}}
			>
				Previous Page
			</button>
		</>
	);
}

export default TopRatedList;
