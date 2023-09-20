import { ReactComponent as FooterLogo } from "../img/tmdb_logo_short.svg";

const FooterComponent = () => {
	return (
		<footer className='flex bg-[#0d253f] text-white font-semibold'>
			<FooterLogo className='w-1/4' />
			<p>
				This product uses the TMDB API but is not endorsed or certified by TMDB.
			</p>
		</footer>
	);
};

export default FooterComponent;
