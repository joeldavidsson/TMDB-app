import { useRecoilState } from "recoil";
import { savedListsState } from "../states/recoil";
import { GetPoster } from "../components/Utilities";
import { ScrollToTopLink } from "../components/Utilities";
import { loadFromLocalStorage } from "../storage/movieStorage";
import { useEffect } from "react";

function CreatedTopListView() {
	const [savedList, setSavedList] = useRecoilState(savedListsState);

	useEffect(() => {
		const savedListFromLocalStorage = loadFromLocalStorage("lists") || [];
		setSavedList(savedListFromLocalStorage);
	}, [setSavedList]);

	return (
		<section className='flex flex-col items-center w-full max-h-fit p-5'>
			<div className='flex flex-col w-full'>
				{savedList.map((list) => (
					<div key={list.title} className='flex flex-col items-center'>
						<h2 className='text-3xl font-semibold text-center my-10'>
							{list.title}
						</h2>
						<ul className='flex flex-row flex-wrap self-center w-full gap-5 justify-center'>
							{list.list.map((movie, index) => (
								<ScrollToTopLink to={`../details/${movie.id}`}>
									<div
										className='flex flex-col items-center text-center'
										key={index}
									>
										<li className='font-bold text-2xl mb-5'>{index + 1}</li>
										<li className='w-[160px] border-[black] border-4'>
											<GetPoster movie={movie} />
										</li>
										<li className='max-w-[160px] font-semibold p-3 text-l'>
											{movie.title}
										</li>
									</div>
								</ScrollToTopLink>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}

export default CreatedTopListView;
