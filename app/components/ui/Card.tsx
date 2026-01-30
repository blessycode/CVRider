
import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    description?: string;
    icon?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = "", title, description, icon }) => {
    return (
        <div className={`rounded-[2.5rem] bg-white p-10 shadow-xl shadow-gray-100 border border-gray-100 ${className}`}>
            {(title || icon) && (
                <div className="mb-10">
                    <div className="flex items-center gap-4 mb-3">
                        {icon && <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">{icon}</div>}
                        {title && <h2 className="text-2xl font-serif font-bold text-gray-900">{title}</h2>}
                    </div>
                    {description && <p className="text-gray-500 font-medium ml-[60px]">{description}</p>}
                </div>
            )}
            <div className={`${(title || icon) ? 'ml-0 lg:ml-[60px]' : ''}`}>
                {children}
            </div>
        </div>
    );
};
