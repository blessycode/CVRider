
import React from 'react';
import { Experience } from "@/types/Resume";
import { BulletList } from "./BulletList";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Briefcase, Plus, Trash2, Calendar, MapPin } from "lucide-react";

interface ExperienceListProps {
    experienceList: Experience[];
    onChange: (experienceList: Experience[]) => void;
}

export const ExperienceList: React.FC<ExperienceListProps> = ({ experienceList, onChange }) => {
    const addExperience = () => {
        onChange([
            ...experienceList,
            {
                credential: "",
                company: "",
                dateRange: { start: "" },
                highlights: [""]
            }
        ]);
    };

    const updateExperience = (index: number, updatedItem: Experience) => {
        const newExperience = [...experienceList];
        newExperience[index] = updatedItem;
        onChange(newExperience);
    };

    const removeExperience = (index: number) => {
        onChange(experienceList.filter((_, i) => i !== index));
    };

    return (
        <Card title="Professional Experience" description="Showcase your career highlights and impactful contributions." icon={<Briefcase size={20} />}>
            <div className="flex flex-col gap-10">
                {experienceList.map((exp, index) => (
                    <div key={index} className="relative group p-10 rounded-[2.5rem] border-2 border-gray-50 bg-white hover:border-blue-100 transition-all duration-300">
                        {/* Remove Action */}
                        <button
                            onClick={() => removeExperience(index)}
                            className="absolute top-8 right-8 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                            <Trash2 size={20} />
                        </button>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                {index + 1}
                            </div>
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Work Experience Entry</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <Input
                                label="Company Name"
                                value={exp.company}
                                onChange={(e) => updateExperience(index, { ...exp, company: e.target.value })}
                                placeholder="e.g. Acme Corporation"
                            />
                            <Input
                                label="Job Title"
                                value={exp.credential}
                                onChange={(e) => updateExperience(index, { ...exp, credential: e.target.value })}
                                placeholder="e.g. Senior Product Manager"
                            />

                            <div className="space-y-2.5">
                                <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">Start Date</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Calendar size={16} />
                                    </div>
                                    <input
                                        type="text"
                                        value={exp.dateRange?.start || ""}
                                        onChange={(e) => updateExperience(index, { ...exp, dateRange: { ...exp.dateRange, start: e.target.value } })}
                                        className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-transparent bg-gray-50 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-all"
                                        placeholder="MM / YYYY"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">End Date</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Calendar size={16} />
                                    </div>
                                    <input
                                        type="text"
                                        value={exp.dateRange?.end || ""}
                                        onChange={(e) => updateExperience(index, { ...exp, dateRange: { ...exp.dateRange!, end: e.target.value } })}
                                        className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-transparent bg-gray-50 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-all"
                                        placeholder="Present"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="relative">
                                    <div className="absolute left-4 top-[50px] text-gray-400">
                                        <MapPin size={16} />
                                    </div>
                                    <Input
                                        label="Office Location"
                                        value={exp.location || ""}
                                        onChange={(e) => updateExperience(index, { ...exp, location: e.target.value })}
                                        placeholder="San Francisco, CA (or Remote)"
                                        className="!pl-12"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <BulletList
                                items={exp.highlights || []}
                                onChange={(newHighlights) => updateExperience(index, { ...exp, highlights: newHighlights })}
                                title="Impact & Responsibilities"
                            />

                            <BulletList
                                items={exp.references || []}
                                onChange={(newReferences) => updateExperience(index, { ...exp, references: newReferences })}
                                title="Project Links or Tools Used"
                            />
                        </div>
                    </div>
                ))}

                {experienceList.length === 0 && (
                    <div className="text-center py-20 rounded-[2.5rem] border-2 border-dashed border-gray-100 text-gray-400 font-medium font-serif italic text-lg">
                        Your professional story starts here. Add your work experience.
                    </div>
                )}

                <Button variant="outline" onClick={addExperience} className="self-center gap-2 group border-dashed hover:border-solid py-8 px-12" type="button">
                    <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                    <span>Add Career Milestone</span>
                </Button>
            </div>
        </Card>
    );
};
