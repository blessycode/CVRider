
import React from 'react';
import { Resume } from "@/types/Resume";
import { Input } from "./ui/Input";
import { Card } from "./ui/Card";
import { User } from "lucide-react";

interface PersonalDetailsProps {
    name: Resume['name'];
    tagline?: string;
    onChange: (data: { name: Resume['name'], tagline?: string }) => void;
}

export const PersonalDetails: React.FC<PersonalDetailsProps> = ({ name, tagline, onChange }) => {
    const handleNameChange = (field: keyof Resume['name'], value: string) => {
        onChange({ name: { ...name, [field]: value }, tagline });
    };

    return (
        <Card title="Personal Details" description="Your professional identification." icon={<User size={20} />}>
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input
                        label="First Name"
                        value={name.first}
                        onChange={(e) => handleNameChange('first', e.target.value)}
                        placeholder="e.g. John"
                        required
                    />
                    <Input
                        label="Last Name"
                        value={name.last || ''}
                        onChange={(e) => handleNameChange('last', e.target.value)}
                        placeholder="e.g. Doe"
                    />
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <Input
                        label="Professional Title / Tagline"
                        value={tagline || ''}
                        onChange={(e) => onChange({ name, tagline: e.target.value })}
                        placeholder="e.g. Senior Software Engineer"
                    />
                </div>
            </div>
        </Card>
    );
};
