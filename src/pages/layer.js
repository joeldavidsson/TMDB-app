import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SearchMovie from "../components/Search";

function Layer() {
	return (
		<div className='flex flex-col max-w-full overflow-hidden '>
			<div className=' top-0 p-5 bg-[#2C3639]'>
				<HeaderComponent />
				<SearchMovie />
			</div>

			<div className='min-h-screen text-white bg-[#3F4E4F]'>
				<Outlet />
			</div>
			<div className=' bottom-0 bg-[#2C3639]'>
				<FooterComponent />
			</div>
		</div>
	);
}

export default Layer;
