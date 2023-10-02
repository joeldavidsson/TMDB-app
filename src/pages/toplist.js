import { useState } from "react";
import { useEffect } from "react";
import { fetchSearch } from "../api/api";
import { GetPoster } from "../components/Utilities";
import { HoverButtons } from "../components/Utilities";
import { useRecoilState } from "recoil";
import { savedListsState } from "../states/recoil";
import { ScrollToTopLink } from "../components/Utilities";
import {
	saveToLocalStorage,
	loadFromLocalStorage,
} from "../storage/movieStorage";
import { HiChevronDoubleRight } from "react-icons/hi2";

function TopList() {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [topListSearchTitle, setTopListSearchTitle] = useState("");
	const [topList, setTopList] = useState([]);

	const [listTitle, setListTitle] = useState([]);

	const [hovered, setHovered] = useState(null);

	const [savedList, setSavedList] = useRecoilState(savedListsState);

	useEffect(() => {
		const savedListFromLocalStorage = loadFromLocalStorage("lists") || [];
		setSavedList(savedListFromLocalStorage);
	}, [setSavedList]);

	useEffect(() => {
		fetchSearch(topListSearchTitle, page, (data) => {
			setMovies(data.results);
		});
	}, [topListSearchTitle]);

	const addToTopList = (movie) => {
		setTopList([...topList, movie]);
		setTopListSearchTitle("");
		console.log(topList);
	};

	const removeItem = (index) => {
		const updatedList = [...topList];
		updatedList.splice(index, 1);
		setTopList(updatedList);
	};

	const saveTopList = () => {
		const saveNewList = [...topList];
		const saveNewListTitle = listTitle;

		const newListObject = {
			title: saveNewListTitle,
			list: saveNewList,
		};
		setSavedList([...savedList, newListObject]);
		saveToLocalStorage("lists", [...savedList, newListObject]);
		setListTitle("");
		console.log(savedList);
	};

	const moveItemUp = (index) => {
		if (index > 0) {
			const updatedList = [...topList];
			const temp = updatedList[index - 1];
			updatedList[index - 1] = updatedList[index];
			updatedList[index] = temp;
			setTopList(updatedList);
		}
	};

	const moveItemDown = (index) => {
		if (index < topList.length - 1) {
			const updatedList = [...topList];
			const temp = updatedList[index + 1];
			updatedList[index + 1] = updatedList[index];
			updatedList[index] = temp;
			setTopList(updatedList);
		}
	};

	const handleTitleInput = (e) => {
		setListTitle(e.target.value);
	};

	return (
		<div className='flex flex-col items-center w-full p-5 gap-10 my-5'>
			<h1 className='text-4xl font-semibold'>Create your own toplist!</h1>
			<h2 className='text-xl'>See below how it works!</h2>
			<section className='flex text-center text-xl font-semibold gap-12 w-4/8'>
				<p className='w-1/4'>1. Name your list</p>
				<p>
					<HiChevronDoubleRight />
				</p>
				<p className='w-1/4'>2. Search for movies</p>
				<p>
					<HiChevronDoubleRight />
				</p>
				<p className='w-1/4'>3. Save your list</p>
				<p>
					<HiChevronDoubleRight />
				</p>
				<p className='w-1/4'>4. Share it with your friends</p>
			</section>

			<section className='flex flex-col w-full'>
				<input
					type='text'
					placeholder='Add movies to your list...'
					value={topListSearchTitle}
					onChange={(e) => setTopListSearchTitle(e.target.value)}
					className='self-center text-white w-1/4 text-center text-lg p-1 rounded-2xl  outline-none bg-[#DCD7C9]  focus:text-black hover:placeholder-white absolute z-20 '
				/>
				<ul className='flex flex-row flex-wrap w-full self-center justify-center bg-[#2C3639] absolute z-10 rounded-xl gap-4 shadow-2xl'>
					{movies.map((result) => (
						<div
							className='items-center py-10'
							onClick={() => addToTopList(result)}
							key={result.id}
						>
							<li className='flex w-28 h-44 border-2 border-black hover:opacity-80 shadow-2xl z-10 relative'>
								<GetPoster movie={result} />
							</li>
							<li className='w-28 whitespace-nowrap overflow-hidden text-ellipsis text-center font-semibold hover:bg-[#0000009d] hover:whitespace-normal rounded-b-lg absolute z-20 p-1'>
								{result.title}
							</li>
						</div>
					))}
				</ul>
			</section>

			<section className='flex flex-col w-full p-5 h-auto'>
				<ul className='flex flex-row flex-wrap self-center justify-center w-full gap-5'>
					{topList.map((list, index) => (
						<div
							className='flex flex-col items-center relative'
							onMouseEnter={() => setHovered(index)}
							onMouseLeave={() => setHovered(null)}
							key={list.id}
						>
							<li className='font-bold text-2xl mb-5'>{index + 1}</li>
							<li
								className='flex w-40 h-56 border-black border-4'
								style={{ opacity: hovered === index ? 0.7 : 1 }}
							>
								<GetPoster movie={list} />
							</li>
							<li className='max-w-[160px] '>
								<p className='text-center font-semibold text-l p-3'>
									{list.title}
								</p>
							</li>
							{hovered === index && (
								<HoverButtons
									moveItemUp={() => moveItemUp(index)}
									moveItemDown={() => moveItemDown(index)}
									removeItem={() => removeItem(index)}
								/>
							)}
						</div>
					))}
				</ul>
			</section>

			<section className='flex flex-col justify-self-end '>
				<input
					type='text'
					placeholder='Give your list a name!'
					value={listTitle}
					onChange={handleTitleInput}
					className='flex justify-self-end text-lg self-center text-black w-1/8 text-center p-1 m-5 rounded-md bg-[#2C3639] border-[#A27B5C] outline-none hover:placeholder-white focus:bg-[#DCD7C9] focus:text-black mt-7 '
				></input>
				<span className='flex flex-row'>
					<button
						onClick={saveTopList}
						className='bg-[#A27B5C] rounded-md font-semibold p-1 w-28 m-5  self-center hover:bg-opacity-80'
					>
						SAVE
					</button>
					<button
						className=' bg-[#A27B5C] rounded-md font-semibold p-1 w-32 m-5  self-center hover:bg-opacity-80'
						onClick={() => setTopList([])}
					>
						CLEAR LIST
					</button>
				</span>

				<p className='text-center my-5 font-semibold text-xl'>Your lists: </p>

				<div className='text-center mb-5 text-l hover:text-black'>
					{savedList.map((item) => (
						<ScrollToTopLink to={`../toplist/${item.title}`}>
							<p key={item.title}>{item.title}</p>
						</ScrollToTopLink>
					))}
				</div>
			</section>
		</div>
	);
}

export default TopList;
