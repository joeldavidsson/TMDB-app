import { useState, useEffect } from "react";
import { fetchPopular } from "../api/api";
import { PageHandler, GetPoster } from "../components/Utilities";
import { ScrollToTopLink } from "../components/Utilities";

function PopularList() {
	const [list, setList] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);

	useEffect(() => {
		fetchPopular(page, (data) => {
			setList(data.results);
			setPage(data.page);
		});
		console.log(page);
	}, [page]);

	return (
		<>
			<div className='flex flex-col justify-center items-center w-full p-10'>
				<h1 className='text-4xl font-semibold my-5 uppercase'>
					Popular movies
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
								<h2 className='font-semibold'>{item.title}</h2>
								Rating: {item.vote_average}
							</li>
						</ScrollToTopLink>
					))}
				</ul>
			</div>
			<div className='flex justify-center items-center mb-6'>
				<PageHandler page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</>
	);
}

export default PopularList;
