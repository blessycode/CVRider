
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, className = "", ...props }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-zinc-700">
                {label}
            </label>
            <input
                className={`w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 ${className}`}
                {...props}
            />
        </div>
    );
};
