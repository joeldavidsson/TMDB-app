import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export function DropdownSort({ setSort }) {
	const RatingAsc = "vote_average.asc";

	const RatingDesc = "vote_average.desc";

	const PopularityAsc = "popularity.asc";

	const PopularityDesc = "popularity.desc";

	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#A27B5C] px-3 py-2 text-md font-semibold text-[white] shadow-sm  hover:opacity-80'>
					Sort
					<ChevronDownIcon
						className='-mr-1 h-5 w-5 text-[white]'
						aria-hidden='true'
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-[#A27B5C] shadow-lg focus:outline-none'>
					<div className='py-1'>
						<Menu.Item>
							{({ active }) => (
								<a
									onClick={() => {
										setSort(RatingDesc);
									}}
									href='#'
									className={classNames(
										active ? "bg-[#DCD7C9] text-black" : "text-white",
										"block px-4 py-2 text-sm"
									)}
								>
									Rating (High - Low)
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									onClick={() => {
										setSort(RatingAsc);
									}}
									href='#'
									className={classNames(
										active ? "bg-[#DCD7C9] text-black" : "text-white",
										"block px-4 py-2 text-sm"
									)}
								>
									Rating (Low - High)
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									onClick={() => {
										setSort(PopularityDesc);
									}}
									href='#'
									className={classNames(
										active ? "bg-[#DCD7C9] text-black" : "text-white",
										"block px-4 py-2 text-sm"
									)}
								>
									Popularity (High - Low)
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									onClick={() => {
										setSort(PopularityAsc);
									}}
									href='#'
									className={classNames(
										active ? "bg-[#DCD7C9] text-black" : "text-white",
										"block px-4 py-2 text-sm"
									)}
								>
									Popularity (Low - High)
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export default DropdownSort;
