
import React from 'react';
import { Education } from "@/types/Resume";
import { BulletList } from "./BulletList";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { GraduationCap, Plus, Trash2, Calendar, MapPin } from "lucide-react";

interface EducationListProps {
    educationList: Education[];
    onChange: (educationList: Education[]) => void;
}

export const EducationList: React.FC<EducationListProps> = ({ educationList, onChange }) => {
    const addEducation = () => {
        onChange([
            ...educationList,
            {
                credential: "",
                institution: "",
                dateRange: { start: "" },
                highlights: [""]
            }
        ]);
    };

    const updateEducation = (index: number, updatedItem: Education) => {
        const newEducation = [...educationList];
        newEducation[index] = updatedItem;
        onChange(newEducation);
    };

    const removeEducation = (index: number) => {
        onChange(educationList.filter((_, i) => i !== index));
    };

    return (
        <Card title="Education History" description="Your academic journey and institutional background." icon={<GraduationCap size={20} />}>
            <div className="flex flex-col gap-10">
                {educationList.map((edu, index) => (
                    <div key={index} className="relative group p-10 rounded-[2.5rem] border-2 border-gray-50 bg-white hover:border-blue-100 transition-all duration-300">
                        {/* Remove Action */}
                        <button
                            onClick={() => removeEducation(index)}
                            className="absolute top-8 right-8 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                            <Trash2 size={20} />
                        </button>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                {index + 1}
                            </div>
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Education Entry</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <Input
                                label="Institution Name"
                                value={edu.institution}
                                onChange={(e) => updateEducation(index, { ...edu, institution: e.target.value })}
                                placeholder="State University of New York"
                            />
                            <Input
                                label="Degree / Field of Study"
                                value={edu.credential}
                                onChange={(e) => updateEducation(index, { ...edu, credential: e.target.value })}
                                placeholder="B.S. in Computer Science"
                            />

                            <div className="space-y-2.5">
                                <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">Start Date</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Calendar size={16} />
                                    </div>
                                    <input
                                        type="text"
                                        value={edu.dateRange?.start || ""}
                                        onChange={(e) => updateEducation(index, { ...edu, dateRange: { ...edu.dateRange, start: e.target.value } })}
                                        className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-transparent bg-gray-50 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-all"
                                        placeholder="MM / YYYY"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">Graduation Date</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Calendar size={16} />
                                    </div>
                                    <input
                                        type="text"
                                        value={edu.dateRange?.end || ""}
                                        onChange={(e) => updateEducation(index, { ...edu, dateRange: { ...edu.dateRange!, end: e.target.value } })}
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
                                        label="Location"
                                        value={edu.location || ""}
                                        onChange={(e) => updateEducation(index, { ...edu, location: e.target.value })}
                                        placeholder="City, State"
                                        className="!pl-12"
                                    />
                                </div>
                            </div>
                        </div>

                        <BulletList
                            items={edu.highlights || []}
                            onChange={(newHighlights) => updateEducation(index, { ...edu, highlights: newHighlights })}
                            title="Key Achievements & Coursework"
                        />
                    </div>
                ))}

                {educationList.length === 0 && (
                    <div className="text-center py-16 rounded-[2.5rem] border-2 border-dashed border-gray-100 text-gray-400 font-medium font-serif italic text-lg">
                        Build your background. Add your first university or school.
                    </div>
                )}

                <Button variant="outline" onClick={addEducation} className="self-center gap-2 group border-dashed hover:border-solid py-8 px-12" type="button">
                    <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                    <span>Add Educational Milestones</span>
                </Button>
            </div>
        </Card>
    );
};
