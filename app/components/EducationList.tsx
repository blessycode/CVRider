
import React from 'react';
import { Education } from "@/types/Resume";
import { BulletList } from "./BulletList";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { GraduationCap, Plus, Trash2 } from "lucide-react";

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
        <Card title="Education" description="Your academic background." icon={<GraduationCap size={20} />}>
            <div className="flex flex-col gap-8">
                {educationList.map((edu, index) => (
                    <div key={index} className="flex flex-col gap-4 rounded-xl border border-zinc-100 bg-zinc-50/50 p-6">
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-2 mb-2">
                            <h4 className="font-semibold text-zinc-700">School #{index + 1}</h4>
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => removeEducation(index)}
                                type="button"
                            >
                                <Trash2 size={14} />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Input
                                label="Institution"
                                value={edu.institution}
                                onChange={(e) => updateEducation(index, { ...edu, institution: e.target.value })}
                                placeholder="University of Examples"
                            />
                            <Input
                                label="Degree / Credential"
                                value={edu.credential}
                                onChange={(e) => updateEducation(index, { ...edu, credential: e.target.value })}
                                placeholder="B.S. Computer Science"
                            />
                            <Input
                                label="Start Date"
                                value={edu.dateRange?.start || ""}
                                onChange={(e) => updateEducation(index, { ...edu, dateRange: { ...edu.dateRange, start: e.target.value } })}
                                placeholder="mm-yyyy"
                            />
                            <Input
                                label="End Date"
                                value={edu.dateRange?.end || ""}
                                onChange={(e) => updateEducation(index, { ...edu, dateRange: { ...edu.dateRange!, end: e.target.value } })}
                                placeholder="Present"
                            />
                            <div className="md:col-span-2">
                                <Input
                                    label="Location (Optional)"
                                    value={edu.location || ""}
                                    onChange={(e) => updateEducation(index, { ...edu, location: e.target.value })}
                                    placeholder="City, State"
                                />
                            </div>
                        </div>

                        <BulletList
                            items={edu.highlights || []}
                            onChange={(newHighlights) => updateEducation(index, { ...edu, highlights: newHighlights })}
                            title="Achievements / Highlights"
                        />
                    </div>
                ))}

                {educationList.length === 0 && (
                    <div className="text-center py-4 text-zinc-500 text-sm">
                        No education entries yet.
                    </div>
                )}

                <Button variant="secondary" onClick={addEducation} className="self-start gap-2" type="button">
                    <Plus size={16} />
                    Add Education
                </Button>
            </div>
        </Card>
    );
};
