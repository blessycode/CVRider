
import React from 'react';
import { Button } from "./ui/Button";
import { Plus, X } from "lucide-react";

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
        <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-zinc-700">{title}</label>
            {items.map((item, index) => (
                <div key={index} className="flex gap-2">
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => updateItem(index, e.target.value)}
                        className="flex-1 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 placeholder:text-zinc-400"
                        placeholder="e.g. Achieved 20% growth in..."
                    />
                    <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="text-zinc-400 hover:text-red-500 transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>
            ))}
            <Button
                variant="ghost"
                size="sm"
                onClick={addItem}
                className="self-start gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                type="button"
            >
                <Plus size={14} />
                Add Highlight
            </Button>
        </div>
    );
};
