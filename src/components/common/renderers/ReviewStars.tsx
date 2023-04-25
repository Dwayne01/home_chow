import React from "react";

const ReviewStars = ({
	rating,
	className,
}: {
	rating: number;
	className?: string;
}) => (
	<>
		{Array.from({ length: rating }, (_, i) => (
			<svg
				key={i}
				className={className}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 17.27L18.18 21L16.54 14.35L22 9.24L15.45 8.62L12 2.5L8.55 8.62L2 9.24L7.45 14.35L5.82 21L12 17.27Z"
					fill="#FFC107"
				/>
			</svg>
		))}
	</>
);

export default ReviewStars;
