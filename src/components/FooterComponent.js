
const FooterComponent = () => {
	return (
		<footer className='flex  text-white font-semibold p-5 w-full items-center'>
			<img src='/img/tmdb_logo_short.svg' className='w-1/4'></img>
			<p className='text-center w-2/4 mr-5 '>
				This product uses the TMDB API but is not endorsed or certified by TMDB.
			</p>
		</footer>
	);
};

export default FooterComponent;
