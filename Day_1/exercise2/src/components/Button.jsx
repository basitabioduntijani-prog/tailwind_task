import React from "react";


const Button = ({ children, variant = "primary", size = "medium" }) => {
const baseStyles = "font-semibold rounded-xl transition duration-200 inline-block";


const sizeStyles = {
large: "px-8 py-4 text-lg",
medium: "px-6 py-3 text-base",
small: "px-4 py-2 text-sm",
};


const variantStyles = {
primary: "bg-green-600 text-white hover:bg-green-700",
secondary:
"bg-white text-green-600 border border-green-600 hover:bg-green-50",
danger: "bg-red-600 text-white hover:bg-red-700",
success: "bg-emerald-600 text-white hover:bg-emerald-700",
};


return (
<button className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}>
{children}
</button>
);
};


export default Button;