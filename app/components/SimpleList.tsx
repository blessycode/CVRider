import React from 'react';
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Plus, Trash2, X } from "lucide-react";

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
            <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => updateItem(index, e.target.value)}
                            placeholder={placeholder}
                            className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-blue-500 focus:outline-none transition-all"
                        />
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeItem(index)}
                            title="Remove"
                            type="button"
                        >
                            <Trash2 size={14} />
                        </Button>
                    </div>
                ))}

                {items.length === 0 && (
                    <div className="flex flex-col items-center justify-center gap-2 py-8 text-zinc-500">
                        <div className="opacity-20">{icon}</div>
                        <p className="text-sm">No items added yet.</p>
                    </div>
                )}

                <Button variant="secondary" onClick={addItem} className="self-start gap-2" type="button">
                    <Plus size={16} />
                    Add Item
                </Button>
            </div>
        </Card>
    );
};
