
import React from 'react';
import { Skill } from "@/types/Resume";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Wrench, Plus, Trash2, X, Sparkles } from "lucide-react";

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
        // Prevent duplicates
        if (group.stack.includes(tag.trim())) return;
        const newStack = [...group.stack, tag.trim()];
        updateSkillGroup(groupIndex, { ...group, stack: newStack });
    };

    const removeSkillTag = (groupIndex: number, tagIndex: number) => {
        const group = skillList[groupIndex];
        const newStack = group.stack.filter((_, i) => i !== tagIndex);
        updateSkillGroup(groupIndex, { ...group, stack: newStack });
    };

    return (
        <Card title="Skills & Competencies" description="Highlight your technical stack and specialized knowledge." icon={<Wrench size={20} />}>
            <div className="flex flex-col gap-10">
                {skillList.map((skill, index) => (
                    <div key={index} className="relative group p-10 rounded-[2.5rem] border-2 border-gray-50 bg-white hover:border-blue-100 transition-all duration-300">
                        {/* Remove Action */}
                        <button
                            onClick={() => removeSkillGroup(index)}
                            className="absolute top-8 right-8 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                            <Trash2 size={20} />
                        </button>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                {index + 1}
                            </div>
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Skill Group</span>
                        </div>

                        <div className="flex flex-col gap-8">
                            <Input
                                label="Group Category Name"
                                value={skill.category}
                                onChange={(e) => updateSkillGroup(index, { ...skill, category: e.target.value })}
                                placeholder="e.g. Technical Stack, Project Management, Soft Skills"
                            />

                            <div className="space-y-4">
                                <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">Expertise Tags</label>
                                <div className="flex flex-wrap gap-3 rounded-2xl border-2 border-dashed border-gray-100 bg-gray-50/50 p-6 min-h-[100px] transition-all group-focus-within:border-blue-600 group-focus-within:bg-white group-focus-within:shadow-inner">
                                    {skill.stack.map((tag, tagIdx) => (
                                        <div key={tagIdx} className="flex items-center gap-2 rounded-xl bg-white border-2 border-gray-100 px-4 py-2 text-sm font-bold text-gray-700 shadow-sm animate-in zoom-in-95 duration-200">
                                            <span>{tag}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeSkillTag(index, tagIdx)}
                                                className="text-gray-300 hover:text-red-500 transition-colors"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))}
                                    <input
                                        type="text"
                                        className="min-w-[180px] flex-1 bg-transparent text-sm font-bold outline-none placeholder:text-gray-400 placeholder:font-medium"
                                        placeholder="Type skill & press Enter..."
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                addSkillTag(index, e.currentTarget.value);
                                                e.currentTarget.value = '';
                                            }
                                        }}
                                    />
                                </div>
                                <div className="flex items-center justify-between px-2">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Press Enter to Add</p>
                                    <div className="flex items-center gap-1.5 grayscale opacity-50">
                                        <Sparkles size={12} />
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expert Suggested</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {skillList.length === 0 && (
                    <div className="text-center py-20 rounded-[2.5rem] border-2 border-dashed border-gray-100 text-gray-400 font-medium font-serif italic text-lg">
                        Define your toolkit. Add your first set of professional skills.
                    </div>
                )}

                <Button variant="outline" onClick={addSkillGroup} className="self-center gap-2 group border-dashed hover:border-solid py-8 px-12" type="button">
                    <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                    <span>Create New Skill Cluster</span>
                </Button>
            </div>
        </Card>
    );
};
