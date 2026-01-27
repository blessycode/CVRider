
import React from 'react';
import { Skill } from "@/types/Resume";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Wrench, Plus, Trash2, X } from "lucide-react";

interface SkillListProps {
    skillList: Skill[];
    onChange: (skillList: Skill[]) => void;
}

export const SkillList: React.FC<SkillListProps> = ({ skillList, onChange }) => {
    const addSkillGroup = () => {
        onChange([
            ...skillList,
            {
                category: "",
                stack: []
            }
        ]);
    };

    const updateSkillGroup = (index: number, updatedItem: Skill) => {
        const newSkills = [...skillList];
        newSkills[index] = updatedItem;
        onChange(newSkills);
    };

    const removeSkillGroup = (index: number) => {
        onChange(skillList.filter((_, i) => i !== index));
    };

    const addSkillTag = (groupIndex: number, tag: string) => {
        if (!tag.trim()) return;
        const group = skillList[groupIndex];
        const newStack = [...group.stack, tag];
        updateSkillGroup(groupIndex, { ...group, stack: newStack });
    };

    const removeSkillTag = (groupIndex: number, tagIndex: number) => {
        const group = skillList[groupIndex];
        const newStack = group.stack.filter((_, i) => i !== tagIndex);
        updateSkillGroup(groupIndex, { ...group, stack: newStack });
    };

    return (
        <Card title="Skills" description="Showcase your technical expertise." icon={<Wrench size={20} />}>
            <div className="flex flex-col gap-8">
                {skillList.map((skill, index) => (
                    <div key={index} className="flex flex-col gap-4 rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                            <h4 className="font-semibold text-zinc-900">Skill Group #{index + 1}</h4>
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => removeSkillGroup(index)}
                                type="button"
                                title="Remove Group"
                            >
                                <Trash2 size={14} />
                            </Button>
                        </div>

                        <div className="flex flex-col gap-6">
                            <Input
                                label="Category Name"
                                value={skill.category}
                                onChange={(e) => updateSkillGroup(index, { ...skill, category: e.target.value })}
                                placeholder="e.g. Languages, Frameworks, Tools"
                            />

                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-semibold text-zinc-700">Skills List</label>
                                <div className="flex flex-wrap gap-2 rounded-lg border border-zinc-200 bg-zinc-50 p-3 min-h-[60px]">
                                    {skill.stack.map((tag, tagIdx) => (
                                        <div key={tagIdx} className="flex items-center gap-1 rounded-md bg-white border border-zinc-200 px-2 py-1 text-sm text-zinc-800 shadow-sm">
                                            <span>{tag}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeSkillTag(index, tagIdx)}
                                                className="text-zinc-400 hover:text-red-500 transition-colors"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <input
                                        type="text"
                                        className="min-w-[120px] flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
                                        placeholder="Type skill & hit Enter..."
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                addSkillTag(index, e.currentTarget.value);
                                                e.currentTarget.value = '';
                                            }
                                        }}
                                    />
                                </div>
                                <p className="text-xs text-zinc-500">Press <strong>Enter</strong> to add a skill.</p>
                            </div>
                        </div>
                    </div>
                ))}

                {skillList.length === 0 && (
                    <div className="flex flex-col items-center justify-center gap-2 py-8 text-zinc-500">
                        <Wrench className="opacity-20" size={48} />
                        <p className="text-sm">No skill groups added yet.</p>
                    </div>
                )}

                <Button variant="secondary" onClick={addSkillGroup} className="self-start gap-2" type="button">
                    <Plus size={16} />
                    Add Skill Group
                </Button>
            </div>
        </Card>
    );
};
