import { ReactElement, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Slider = ({
	slides,
	description,
}: {
	slides: any[];
	description: ReactElement;
}) => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);

	const nextSlide = () => {
		setCurrentSlide((currentSlide + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
	};

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="overflow-hidden flex justify-center">
				{slides[currentSlide]}
			</div>

			{description}

			<div className="w-full justify-center flex">
				<button
					className="text-primary-color text-2xl p-2 rounded-r-md focus:outline-none"
					onClick={prevSlide}
				>
					<FiChevronLeft />
				</button>
				<div className="w-[50%] items-center flex justify-center space-x-2 pb-2">
					{slides.map((_, index) => (
						// eslint-disable-next-line jsx-a11y/control-has-associated-label
						<button
							key={index}
							className={`w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-500 focus:outline-none transition-all duration-200 ${
								currentSlide === index ? "bg-primary-color" : ""
							}`}
							onClick={() => setCurrentSlide(index)}
						/>
					))}
				</div>
				<button
					className="text-primary-color text-2xl p-2 rounded-l-md focus:outline-none"
					onClick={nextSlide}
				>
					<FiChevronRight />
				</button>
			</div>
		</div>
	);
};

export default Slider;
