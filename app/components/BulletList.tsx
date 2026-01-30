
import React from 'react';
import { Button } from "./ui/Button";
import { Plus, X, GripVertical } from "lucide-react";

interface BulletListProps {
    items: string[];
    onChange: (items: string[]) => void;
    title?: string;
}

export const BulletList: React.FC<BulletListProps> = ({ items, onChange, title = "Highlights" }) => {
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
        <div className="flex flex-col gap-4">
            <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">{title}</label>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex gap-3 items-center group/item">
                        <div className="text-gray-300 group-hover/item:text-gray-400 transition-colors">
                            <GripVertical size={16} />
                        </div>
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => updateItem(index, e.target.value)}
                            className="flex-1 rounded-xl border-2 border-transparent bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-gray-400"
                            placeholder="e.g. Achieved 20% growth in..."
                        />
                        <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                            <X size={18} />
                        </button>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={addItem}
                className="self-start flex items-center gap-2 px-4 py-2 text-[11px] font-bold text-blue-600 uppercase tracking-widest hover:bg-blue-50 rounded-xl transition-all ml-7"
            >
                <Plus size={14} />
                Add New Highlight
            </button>
        </div>
    );
};
