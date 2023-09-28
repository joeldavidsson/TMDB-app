import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SearchMovie from "../components/Search";

function Layer() {
	return (
		<div className='flex flex-wrap w-full min-h-screen'>
			<div className='w-screen top-0 sticky'>
				<HeaderComponent />
				<SearchMovie className='flex w-full h-fit' />
				</div>
		
			<div className='w-full min-h-screen bg-[#0d253ff6] text-white'>
				<Outlet />
			</div>
			<div className='w-screen bottom-0'>
				<FooterComponent />
			</div>
		</div>
	);
}

export default Layer;
