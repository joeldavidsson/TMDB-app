import SearchMovie from "../components/Search";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function Home() {
	return (
		<div className='flex flex-col w-full h-screen overflow-x-hidden bg-[#3F4E4F]'>
			<header className=' top-0 p-5 bg-[#2C3639] h-2/12'>
				<HeaderComponent />
			</header>

			<main className='flex flex-col justify-center items-center text-white h-full'>
				<section className='flex flex-col items-center justify-start text-center w-full gap-10'>
					<img src='/img/tmdb_logo_big.svg' className='w-80'></img>
					<h1 className='font-bold text-3xl'>
						Welcome to TMDB: The number one movie database!
					</h1>
				</section>
				<section className='w-1/2 mt-10'>
					<div className=' text-black '>
						<SearchMovie />
					</div>
				</section>
			</main>
			<footer className='bottom-0 w-full bg-[#2C3639] h-2/12'>
				<FooterComponent />
			</footer>
		</div>
	);
}

export default Home;
