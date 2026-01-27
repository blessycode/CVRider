
import React from 'react';
import { Project } from "@/types/Resume";
import { BulletList } from "./BulletList";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { FolderGit2, Plus, Trash2 } from "lucide-react";

interface ProjectListProps {
    projectList: Project[];
    onChange: (projectList: Project[]) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projectList, onChange }) => {
    const addProject = () => {
        onChange([
            ...projectList,
            {
                name: "",
                highlights: [""]
            }
        ]);
    };

    const updateProject = (index: number, updatedItem: Project) => {
        const newProjects = [...projectList];
        newProjects[index] = updatedItem;
        onChange(newProjects);
    };

    const removeProject = (index: number) => {
        onChange(projectList.filter((_, i) => i !== index));
    };

    const handleStackChange = (index: number, value: string) => {
        const stackArray = value.split(',').map(s => s.trim()).filter(s => s.length > 0);
        updateProject(index, { ...projectList[index], stack: stackArray });
    };

    return (
        <Card title="Projects" description="Showcase your best work." icon={<FolderGit2 size={20} />}>
            <div className="flex flex-col gap-8">
                {projectList.map((proj, index) => (
                    <div key={index} className="flex flex-col gap-4 rounded-xl border border-zinc-100 bg-zinc-50/50 p-6">
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-2 mb-2">
                            <h4 className="font-semibold text-zinc-700">Project #{index + 1}</h4>
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => removeProject(index)}
                                type="button"
                            >
                                <Trash2 size={14} />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Input
                                label="Project Name"
                                value={proj.name}
                                onChange={(e) => updateProject(index, { ...proj, name: e.target.value })}
                                placeholder="e.g. Enterprise Analytics Dashboard"
                            />
                            <Input
                                label="URL (Optional)"
                                value={proj.url || ""}
                                onChange={(e) => updateProject(index, { ...proj, url: e.target.value })}
                                placeholder="https://"
                            />
                            <Input
                                label="Start Date"
                                value={proj.dateRange?.start || ""}
                                onChange={(e) => updateProject(index, { ...proj, dateRange: { ...proj.dateRange, start: e.target.value } })}
                                placeholder="mm-yyyy"
                            />
                            <Input
                                label="End Date"
                                value={proj.dateRange?.end || ""}
                                onChange={(e) => updateProject(index, { ...proj, dateRange: { ...proj.dateRange!, end: e.target.value } })}
                                placeholder="Present"
                            />
                            <div className="md:col-span-2">
                                <Input
                                    label="Tech Stack (Comma separated)"
                                    value={proj.stack?.join(", ") || ""}
                                    onChange={(e) => handleStackChange(index, e.target.value)}
                                    placeholder="e.g. React, Node.js, AWS, PostgreSQL"
                                />
                            </div>
                        </div>

                        <BulletList
                            items={proj.highlights || []}
                            onChange={(newHighlights) => updateProject(index, { ...proj, highlights: newHighlights })}
                            title="Key Contributions"
                        />
                    </div>
                ))}

                <Button variant="secondary" onClick={addProject} className="self-start gap-2" type="button">
                    <Plus size={16} />
                    Add Project
                </Button>
            </div>
        </Card>
    );
};
