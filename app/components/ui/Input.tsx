
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, className = "", ...props }) => {
    return (
        <div className="flex flex-col gap-2.5">
            <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">
                {label}
            </label>
            <input
                className={`w-full rounded-2xl border-2 border-transparent bg-gray-50 px-5 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-600 focus:bg-white shadow-sm hover:bg-gray-100/50 ${className}`}
                {...props}
            />
        </div>
    );
};
