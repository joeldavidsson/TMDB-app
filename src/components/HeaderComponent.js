import { ReactComponent as HeaderLogo } from "../img/tmdb_logo_long.svg";
import SearchMovie from "./Search";

const HeaderComponent = () => {
	return (
		<header className='flex bg-[#0d253f] text-white font-semibold'>
			<HeaderLogo className='flex w-1/3 p-5 justify-start' />
			<nav className='flex w-2/3 p-5 justify-evenly'>
				<a>Home</a>
				<a>Top rated movies</a>
				<a>Discover</a>
				<a>Create your own top list</a>
			</nav>
		</header>
	);
};

export default HeaderComponent;
