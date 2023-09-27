import { Link } from "react-router-dom";
import { SearchTitleState } from "../states/recoil";
import { useRecoilState } from "recoil";

const HeaderComponent = () => {
	const [searchTitle, setSearchTitle] = useRecoilState(SearchTitleState);

	return (
		<header className='flex bg-[#0d253f] text-white font-semibold items-center'>
			<span className='flex p-5 justify-center w-1/4'>
				<Link to='/'>
					<img
						src='/img/tmdb_logo_long.svg'
						className='w-full'
						onClick={() => {
							setSearchTitle("");
						}}
					></img>
				</Link>
			</span>

			<nav className='flex w-3/4 p-5 justify-evenly'>
				<p>Home</p>
				<p>Top rated movies</p>
				<Link to='./pages/discover'>
					<p>Discover</p>
				</Link>
				<p>Create your own top list</p>
			</nav>
		</header>
	);
};

export default HeaderComponent;
