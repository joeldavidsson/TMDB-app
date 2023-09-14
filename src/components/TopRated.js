import { useState, useEffect } from "react";
import { fetchMovieTopRated, fetchImage } from "../api/api";

function TopRated({ source }) {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetchMovieTopRated(source, (data) => {
			const itemsWithPosters = data.map((item) => ({
				...item,
				poster_path: fetchImage(item.poster_path),
			}));
			setList(itemsWithPosters);
		});
	}, [source]);

	return (
		<>
			{list.map((item) => (
				<div key={item.id}>
					<span>{item.title}</span>
					<span>{item.id}</span>
					<img src={item.poster_path} alt={item.title} />
				</div>
			))}
		</>
	);
}

export default TopRated;
