import React from "react";

const Button = ({ children, ...props }) => {
	return (
		<div>
			<button
				className='px-4 py-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
				{...props}>
				{children}
			</button>
		</div>
	);
};

export default Button;
