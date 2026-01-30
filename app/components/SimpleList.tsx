
import React from 'react';
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Plus, Trash2, X, Sparkles } from "lucide-react";

interface SimpleListProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    items: string[];
    placeholder: string;
    onChange: (items: string[]) => void;
}

export const SimpleList: React.FC<SimpleListProps> = ({ title, description, icon, items, placeholder, onChange }) => {
    const addItem = () => {
        onChange([...items, ""]);
    };

    const updateItem = (index: number, value: string) => {
        const newItems = [...items];
        newItems[index] = value;
        onChange(newItems);
    };

    const removeItem = (index: number) => {
        onChange(items.filter((_, i) => i !== index));
    };

    return (
        <Card title={title} description={description} icon={icon}>
            <div className="flex flex-col gap-6">
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="group relative flex items-center gap-4 animate-in slide-in-from-left-4 duration-300">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={item}
                                    onChange={(e) => updateItem(index, e.target.value)}
                                    placeholder={placeholder}
                                    className="w-full rounded-2xl border-2 border-transparent bg-gray-50 px-6 py-4 text-sm font-bold text-gray-900 outline-none transition-all placeholder:text-gray-400 placeholder:font-medium focus:border-blue-600 focus:bg-white shadow-sm hover:bg-gray-100/50"
                                />
                                {index === 0 && (
                                    <div className="absolute -top-3 right-4 px-2 py-0.5 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                                        Primary
                                    </div>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => removeItem(index)}
                                className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                {items.length === 0 && (
                    <div className="text-center py-20 rounded-[2.5rem] border-2 border-dashed border-gray-100 text-gray-400 font-medium font-serif italic text-lg opacity-60">
                        {title} details will appear here once added.
                    </div>
                )}

                <div className="flex flex-col items-center gap-6 mt-4">
                    <Button variant="outline" onClick={addItem} className="gap-2 group border-dashed hover:border-solid py-8 px-12" type="button">
                        <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                        <span>Add New Entry</span>
                    </Button>

                    <div className="flex items-center gap-2 opacity-30 grayscale saturate-0">
                        <Sparkles size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">A-Grade Formatting Guaranteed</span>
                    </div>
                </div>
            </div>
        </Card>
    );
};
