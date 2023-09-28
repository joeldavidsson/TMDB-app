import { useState, useEffect } from "react";
import { fetchImage, fetchPopular } from "../api/api";
import { useRecoilState } from "recoil";
import { movieIdState } from "../states/recoil";
import { Link } from "react-router-dom";
import { HandleItemClick, PageHandler} from "./Utilities";

function PopularList() {
	const [list, setList] = useState([]);
	const [movieId, setMovieId] = useRecoilState(movieIdState);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);

	useEffect(() => {
		fetchPopular(page, (data) => {
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
		<>
			<div className='flex flex-col justify-center items-center w-full p-10'>
				<h1 className='text-4xl'>Popular movies</h1>
				<ul className='flex flex-row flex-wrap gap-24 justify-center p-10'>
					{list.map((item) => (
						<Link to='./pages/detailsView'>
							<li
								className='text-center w-40'
								key={item.id}
								onClick={() => HandleItemClick({ item, setMovieId })}
							>
								<img src={item.poster_path} alt={item.title} />
								<h2>{item.title}</h2>
								Rating: {item.vote_average}
							</li>
						</Link>
					))}
				</ul>
			</div>
			<div className='flex justify-center items-center'>
				<PageHandler page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</>
	);
}

export default PopularList;
