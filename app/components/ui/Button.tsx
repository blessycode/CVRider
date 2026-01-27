
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
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[#1e3a8a] text-white hover:bg-blue-900 shadow-md hover:shadow-lg focus:ring-blue-900", // Deep blue
        secondary: "bg-blue-50 text-blue-700 hover:bg-blue-100 focus:ring-blue-500",
        outline: "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900",
        ghost: "bg-transparent text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
        destructive: "bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500",
    };

    const sizes = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
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
