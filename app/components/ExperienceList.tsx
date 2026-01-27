
import React from 'react';
import { Experience } from "@/types/Resume";
import { BulletList } from "./BulletList";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Briefcase, Plus, Trash2 } from "lucide-react";

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
        <Card title="Work Experience" description="Your professional history." icon={<Briefcase size={20} />}>
            <div className="flex flex-col gap-8">
                {experienceList.map((exp, index) => (
                    <div key={index} className="flex flex-col gap-4 rounded-xl border border-zinc-100 bg-zinc-50/50 p-6">
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-2 mb-2">
                            <h4 className="font-semibold text-zinc-700">Role #{index + 1}</h4>
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => removeExperience(index)}
                                type="button"
                            >
                                <Trash2 size={14} />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Input
                                label="Company"
                                value={exp.company}
                                onChange={(e) => updateExperience(index, { ...exp, company: e.target.value })}
                                placeholder="e.g. Acme Corp"
                            />
                            <Input
                                label="Role / Title"
                                value={exp.credential}
                                onChange={(e) => updateExperience(index, { ...exp, credential: e.target.value })}
                                placeholder="e.g. Senior Software Engineer"
                            />
                            <Input
                                label="Start Date"
                                value={exp.dateRange?.start || ""}
                                onChange={(e) => updateExperience(index, { ...exp, dateRange: { ...exp.dateRange, start: e.target.value } })}
                                placeholder="mm-yyyy"
                            />
                            <Input
                                label="End Date"
                                value={exp.dateRange?.end || ""}
                                onChange={(e) => updateExperience(index, { ...exp, dateRange: { ...exp.dateRange!, end: e.target.value } })}
                                placeholder="Present"
                            />
                            <div className="md:col-span-2">
                                <Input
                                    label="Location (Optional)"
                                    value={exp.location || ""}
                                    onChange={(e) => updateExperience(index, { ...exp, location: e.target.value })}
                                    placeholder="City, State"
                                />
                            </div>
                        </div>

                        <BulletList
                            items={exp.highlights || []}
                            onChange={(newHighlights) => updateExperience(index, { ...exp, highlights: newHighlights })}
                            title="Key Responsibilities & Achievements"
                        />

                        <BulletList
                            items={exp.references || []}
                            onChange={(newReferences) => updateExperience(index, { ...exp, references: newReferences })}
                            title="References"
                        />
                    </div>
                ))}

                {experienceList.length === 0 && (
                    <div className="text-center py-4 text-zinc-500 text-sm">
                        No work experience added yet.
                    </div>
                )}

                <Button variant="secondary" onClick={addExperience} className="self-start gap-2" type="button">
                    <Plus size={16} />
                    Add Experience
                </Button>
            </div>
        </Card>
    );
};
