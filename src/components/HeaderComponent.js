import { ReactComponent as HeaderLogo } from "../img/tmdb_logo_long.svg";
import { Link } from "react-router-dom";
import { SearchTitleState } from "../states/recoil";
import { useRecoilState } from "recoil";

const HeaderComponent = () => {
	const [searchTitle, setSearchTitle] = useRecoilState(SearchTitleState);

	return (
		<header className='flex bg-[#0d253f] text-white font-semibold items-center'>
			<span className='flex p-5 justify-center w-1/4'>
				<Link to='/'>
					<HeaderLogo
						className='w-full'
						onClick={() => {
							setSearchTitle("");
						}}
					/>
				</Link>
			</span>

			<nav className='flex w-3/4 p-5 justify-evenly'>
				<a>Home</a>
				<a>Top rated movies</a>
				<a>Discover</a>
				<a>Create your own top list</a>
			</nav>
		</header>
	);
};

export default HeaderComponent;
