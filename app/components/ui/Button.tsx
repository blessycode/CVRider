
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
    size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-2xl font-bold transition-all focus:outline-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest text-[11px]";

    const variants = {
        primary: "bg-gray-900 text-white hover:bg-black shadow-lg shadow-gray-200",
        secondary: "bg-blue-50 text-blue-700 hover:bg-blue-100",
        outline: "border-2 border-gray-100 bg-white text-gray-500 hover:border-gray-900 hover:text-gray-900",
        ghost: "bg-transparent text-gray-400 hover:text-gray-900",
        destructive: "bg-red-50 text-red-600 hover:bg-red-100",
    };

    const sizes = {
        sm: "h-9 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[12px]",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
