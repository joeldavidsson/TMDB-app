import SearchMovie from "../components/Search";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function Home() {
	return (
		<div className='flex flex-col max-w-full overflow-hidden'>
			<header className=' top-0 p-5 bg-[#2C3639]'>
				<HeaderComponent />
			</header>

			<main className='flex flex-col justify-center items-center text-white bg-[#3F4E4F] h-screen'>
				<section className='flex flex-col items-center justify-start text-center w-full gap-10'>
					<img src='/img/tmdb_logo_big.svg' className='w-80'></img>
					<h1 className='font-bold text-3xl'>
						Welcome to TMDB: The number one movie database!
					</h1>
				</section>
				<section className='w-1/2  mt-10'>
					<div className=' text-black mt-10'>
						<SearchMovie />
					</div>
				</section>
			</main>
			<footer className=' bottom-0 bg-[#2C3639]'>
				<FooterComponent />
			</footer>
		</div>
	);
}

export default Home;
