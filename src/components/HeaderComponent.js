import { ScrollToTopLink } from "./Utilities";
import { SearchTitleState } from "../states/recoil";
import { useRecoilState } from "recoil";

const HeaderComponent = () => {
	const [searchTitle, setSearchTitle] = useRecoilState(SearchTitleState);

	return (
		<header className='flex w-full text-white font-semibold items-center justify-center ml-10'>
			<span className='w-1/3'>
				<ScrollToTopLink to='/'>
					<img
						src='/img/tmdb_logo_long.svg'
						className='h-20 '
						onClick={() => {
							setSearchTitle("");
						}}
					></img>
				</ScrollToTopLink>
			</span>

			<nav className='flex w-2/3 gap-28 justify-center uppercase'>
				<ScrollToTopLink to='/' className='hover:text-slate-300'>
					<p
						onClick={() => {
							setSearchTitle("");
						}}
					>
						Home
					</p>
				</ScrollToTopLink>
				<ScrollToTopLink to='popular' className='hover:text-slate-300'>
					<p onClick={() => setSearchTitle("")}>Popular</p>
				</ScrollToTopLink>
				<ScrollToTopLink to='toprated' className='hover:text-slate-300'>
					<p onClick={() => setSearchTitle("")}>Top rated</p>
				</ScrollToTopLink>
				<ScrollToTopLink to='discover' className='hover:text-slate-300'>
					<p onClick={() => setSearchTitle("")}>Discover</p>
				</ScrollToTopLink>
				<ScrollToTopLink to='toplist' className='hover:text-slate-300'>
					<p onClick={() => setSearchTitle("")}>Create top list</p>
				</ScrollToTopLink>
			</nav>
		</header>
	);
};

export default HeaderComponent;
