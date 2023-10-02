import { useState, useEffect } from "react";
import { fetchTopRated } from "../api/api";
import { ScrollToTopLink } from "../components/Utilities";
import { PageHandler, GetPoster } from "../components/Utilities";

function TopRatedList() {
	const [list, setList] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);

	useEffect(() => {
		fetchTopRated(page, (data) => {
			setList(data.results);
			setPage(data.page);
		});
		console.log(page);
	}, [page]);

	return (
		<div>
			<div className='flex flex-col justify-center items-center w-full p-10'>
				<h1 className='text-4xl font-semibold my-5 uppercase'>
					Top rated movies
				</h1>
				<ul className='flex flex-row flex-wrap w-full self-center justify-center text-center p-10 gap-10'>
					{list.map((item) => (
						<ScrollToTopLink to={`../details/${item.id}`}>
							<li
								className='flex w-32 h-48 my-4 border-2 border-black hover:opacity-80 shadow-2xl'
								key={item.id}
							>
								<GetPoster movie={item} />
							</li>
							<li className='w-32 text-center hover:overflow-visible hover:whitespace-normal'>
								<p className='font-semibold'>{item.title}</p>
								<p>Rating: {item.vote_average}</p>
							</li>
						</ScrollToTopLink>
					))}
				</ul>
			</div>
			<div className='flex justify-center items-center mb-6'>
				<PageHandler page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
}

export default TopRatedList;
