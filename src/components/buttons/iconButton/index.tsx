import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const IconButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <button
    {...rest}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
    {children}
    </button>
);

export default IconButton;
