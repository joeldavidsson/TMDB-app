
const FooterComponent = () => {
	return (
		<footer className='flex text-white font-semibold p-5 w-full items-center'>
			<img src='/img/tmdb_logo_short.svg' className='w-1/6'></img>
			<p className='text-center w-4/6 mr-5 '>
				This product uses the TMDB API but is not endorsed or certified by TMDB.
			</p>
		</footer>
	);
};

export default FooterComponent;
