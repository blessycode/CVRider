
import React from 'react';
import { Contact } from "@/types/Resume";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Copy, Plus, Trash2, Mail, Phone, Linkedin, Github, Globe, MapPin, Link as LinkIcon, ChevronDown } from "lucide-react";

interface ContactListProps {
    contacts: Contact[];
    onChange: (contacts: Contact[]) => void;
}

export const ContactList: React.FC<ContactListProps> = ({ contacts, onChange }) => {
    const addContact = () => {
        onChange([...contacts, { text: '', url: '', type: 'other' }]);
    };

    const updateContact = (index: number, updatedContact: Contact) => {
        const newContacts = [...contacts];
        newContacts[index] = updatedContact;
        onChange(newContacts);
    };

    const removeContact = (index: number) => {
        const newContacts = contacts.filter((_, i) => i !== index);
        onChange(newContacts);
    };

    const getIcon = (type: string | undefined) => {
        switch (type) {
            case 'email': return <Mail size={18} />;
            case 'phone': return <Phone size={18} />;
            case 'linkedin': return <Linkedin size={18} />;
            case 'github': return <Github size={18} />;
            case 'website': return <Globe size={18} />;
            case 'location': return <MapPin size={18} />;
            default: return <LinkIcon size={18} />;
        }
    };

    return (
        <Card title="Contact Channels" description="Help recruiters reach out to you through multiple platforms." icon={<Copy size={20} />}>
            <div className="flex flex-col gap-8">
                {contacts.map((contact, index) => (
                    <div key={index} className="group relative flex flex-col gap-6 p-8 rounded-[2rem] border-2 border-gray-50 bg-white hover:border-blue-100 transition-all duration-300">
                        {/* Remove Button */}
                        <button
                            onClick={() => removeContact(index)}
                            className="absolute top-6 right-6 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                            title="Remove Contact"
                        >
                            <Trash2 size={20} />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                            {/* Type Selector */}
                            <div className="md:col-span-4 space-y-2.5">
                                <label className="text-[13px] font-bold text-gray-700 ml-1 uppercase tracking-wider">Plateform</label>
                                <div className="relative group/select">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/select:text-blue-600 transition-colors pointer-events-none">
                                        {getIcon(contact.type)}
                                    </div>
                                    <select
                                        value={contact.type || 'other'}
                                        onChange={(e) => updateContact(index, { ...contact, type: e.target.value as any })}
                                        className="w-full h-[54px] rounded-2xl border-2 border-transparent bg-gray-50 pl-12 pr-10 text-sm text-gray-900 font-bold outline-none cursor-pointer focus:border-blue-600 focus:bg-white transition-all appearance-none"
                                    >
                                        <option value="email">Email</option>
                                        <option value="phone">Phone</option>
                                        <option value="linkedin">LinkedIn</option>
                                        <option value="github">GitHub</option>
                                        <option value="website">Website</option>
                                        <option value="location">Location</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                            </div>

                            {/* Value Input */}
                            <div className="md:col-span-8">
                                <Input
                                    label="Display Text"
                                    value={contact.text}
                                    onChange={(e) => updateContact(index, { ...contact, text: e.target.value })}
                                    placeholder={contact.type === 'email' ? 'john@example.com' : 'e.g. linkedin.com/in/johndoe'}
                                />
                            </div>
                        </div>

                        {/* URL Field (Secondary) */}
                        <div className="max-w-md">
                            <Input
                                label="Direct Link (URL)"
                                value={contact.url || ''}
                                onChange={(e) => updateContact(index, { ...contact, url: e.target.value })}
                                placeholder="https://..."
                                className="!py-2.5 !rounded-xl !bg-white border-gray-100"
                            />
                        </div>
                    </div>
                ))}

                {contacts.length === 0 && (
                    <div className="text-center py-12 rounded-[2rem] border-2 border-dashed border-gray-100 text-gray-400 font-medium">
                        No contact methods added. Recruiters won't be able to reach you!
                    </div>
                )}

                <Button variant="outline" onClick={addContact} className="self-center gap-2 group border-dashed hover:border-solid py-8 px-12" type="button">
                    <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                    <span>Add New Contact Method</span>
                </Button>
            </div>
        </Card>
    );
};
