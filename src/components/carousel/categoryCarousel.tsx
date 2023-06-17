import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CategoryInterface {
	icon: any;
	title: string;
}

const CategoryCarousel = ({
	categories,
}: {
	categories: CategoryInterface[];
}) => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [carouselCategories, setCarouselCategories] =
		useState<CategoryInterface[]>(categories);

	const categoryCount = carouselCategories.length;
	const itemsPerSlide = 8;
	const totalSlides = Math.ceil(categoryCount / itemsPerSlide);

	const nextSlide = () => {
		const updatedCategories = [
			...carouselCategories.slice(1),
			carouselCategories[0], // Move the first element to the end
		];
		setCurrentSlide((currentSlide + 1) % totalSlides);
		setCarouselCategories(updatedCategories);
	};

	const prevSlide = () => {
		const updatedCategories = [
			carouselCategories[categoryCount - 1], // Move the last element to the front
			...carouselCategories.slice(0, categoryCount - 1),
		];
		setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
		setCarouselCategories(updatedCategories);
	};

	const startIndex = currentSlide * itemsPerSlide;
	const endIndex = startIndex + itemsPerSlide;
	const visibleCategories = carouselCategories.slice(startIndex, endIndex);

	const onClickCategory = (category: CategoryInterface) => {
		// eslint-disable-next-line no-console
		console.log(category.title);
	};

	return (
		<div className="w-full justify-center flex gap-10">
			<button
				className="text-primary-color text-2xl p-2 rounded-r-md focus:outline-none"
				onClick={prevSlide}
			>
				<FiChevronLeft />
			</button>

			<div className="flex flex-row justify-center items-center gap-5">
				{visibleCategories.map((category, index) => (
					<button
						key={index}
						className="flex flex-col items-center justify-center gap-5 cursor-pointer"
						onClick={() => onClickCategory(category)}
					>
						<Image alt={category.title} src={category.icon} />
						{category.title}
					</button>
				))}
			</div>

			<button
				className="text-primary-color text-2xl p-2 rounded-l-md focus:outline-none"
				onClick={nextSlide}
			>
				<FiChevronRight />
			</button>
		</div>
	);
};

export default CategoryCarousel;
