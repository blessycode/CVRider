
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
        <div className={`rounded-2xl bg-white p-6 shadow-sm border border-zinc-100 ${className}`}>
            {(title || icon) && (
                <div className="mb-6 flex items-center gap-3 border-b border-zinc-100 pb-4">
                    {icon && <div className="text-blue-600">{icon}</div>}
                    <div>
                        {title && <h2 className="text-xl font-bold text-zinc-900">{title}</h2>}
                        {description && <p className="text-sm text-zinc-500">{description}</p>}
                    </div>
                </div>
            )}
            {children}
        </div>
    );
};
