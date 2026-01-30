
import React from 'react';
import { Project } from "@/types/Resume";
import { BulletList } from "./BulletList";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { FolderGit2, Plus, Trash2, Calendar, Link as LinkIcon } from "lucide-react";

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
        <Card title="Key Projects" description="Demonstrate your practical expertise through concrete examples of your work." icon={<FolderGit2 size={20} />}>
            <div className="flex flex-col gap-10">
                {projectList.map((proj, index) => (
                    <div key={index} className="relative group p-10 rounded-[2.5rem] border-2 border-gray-50 bg-white hover:border-blue-100 transition-all duration-300">
                        {/* Remove Action */}
                        <button
                            onClick={() => removeProject(index)}
                            className="absolute top-8 right-8 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                            <Trash2 size={20} />
                        </button>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                {index + 1}
                            </div>
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Project Profile</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <Input
                                label="Project Name"
                                value={proj.name}
                                onChange={(e) => updateProject(index, { ...proj, name: e.target.value })}
                                placeholder="e.g. Enterprise Analytics Dashboard"
                            />
                            <div className="relative">
                                <div className="absolute left-4 top-[50px] text-gray-400">
                                    <LinkIcon size={16} />
                                </div>
                                <Input
                                    label="Project URL"
                                    value={proj.url || ""}
                                    onChange={(e) => updateProject(index, { ...proj, url: e.target.value })}
                                    placeholder="https://"
                                    className="!pl-12"
                                />
                            </div>

                            <div className="space-y-2.5">
                                <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">Start Date</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Calendar size={16} />
                                    </div>
                                    <input
                                        type="text"
                                        value={proj.dateRange?.start || ""}
                                        onChange={(e) => updateProject(index, { ...proj, dateRange: { ...proj.dateRange, start: e.target.value } })}
                                        className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-transparent bg-gray-50 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-all"
                                        placeholder="MM / YYYY"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">Completion</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Calendar size={16} />
                                    </div>
                                    <input
                                        type="text"
                                        value={proj.dateRange?.end || ""}
                                        onChange={(e) => updateProject(index, { ...proj, dateRange: { ...proj.dateRange!, end: e.target.value } })}
                                        className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-transparent bg-gray-50 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-all"
                                        placeholder="Present"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <Input
                                    label="Technology Stack (e.g. React, Node.js)"
                                    value={proj.stack?.join(", ") || ""}
                                    onChange={(e) => handleStackChange(index, e.target.value)}
                                    placeholder="Comma separated: Python, TensorFlow, Azure, PostgreSQL"
                                />
                            </div>
                        </div>

                        <BulletList
                            items={proj.highlights || []}
                            onChange={(newHighlights) => updateProject(index, { ...proj, highlights: newHighlights })}
                            title="Key Features & Technical Challenges Overcome"
                        />
                    </div>
                ))}

                {projectList.length === 0 && (
                    <div className="text-center py-20 rounded-[2.5rem] border-2 border-dashed border-gray-100 text-gray-400 font-medium font-serif italic text-lg">
                        Build your portfolio. Add a major project or open-source contribution.
                    </div>
                )}

                <Button variant="outline" onClick={addProject} className="self-center gap-2 group border-dashed hover:border-solid py-8 px-12" type="button">
                    <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                    <span>Incorporate New Project</span>
                </Button>
            </div>
        </Card>
    );
};
