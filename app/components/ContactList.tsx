
import React from 'react';
import { Contact } from "@/types/Resume";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Copy, Plus, Trash2, Mail, Phone, Linkedin, Github, Globe, MapPin, Link as LinkIcon } from "lucide-react";

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
            case 'email': return <Mail size={16} />;
            case 'phone': return <Phone size={16} />;
            case 'linkedin': return <Linkedin size={16} />;
            case 'github': return <Github size={16} />;
            case 'website': return <Globe size={16} />;
            case 'location': return <MapPin size={16} />;
            default: return <LinkIcon size={16} />;
        }
    };

    return (
        <Card title="Contact Information" description="How recruiters can reach you." icon={<Copy size={20} />}>
            <div className="flex flex-col gap-6">
                {contacts.map((contact, index) => (
                    <div key={index} className="flex gap-4 items-start rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-12">
                            <div className="sm:col-span-4 flex flex-col gap-2">
                                <label className="text-sm font-semibold text-zinc-700">Type</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-3 text-zinc-400">
                                        {getIcon(contact.type)}
                                    </div>
                                    <select
                                        value={contact.type || 'other'}
                                        onChange={(e) => updateContact(index, { ...contact, type: e.target.value as any })}
                                        className="w-full rounded-lg border border-zinc-200 bg-white pl-10 pr-4 py-3 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none"
                                    >
                                        <option value="email">Email</option>
                                        <option value="phone">Phone</option>
                                        <option value="linkedin">LinkedIn</option>
                                        <option value="github">GitHub</option>
                                        <option value="website">Website</option>
                                        <option value="location">Location</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <Input
                                    label="Value"
                                    value={contact.text}
                                    onChange={(e) => updateContact(index, { ...contact, text: e.target.value })}
                                    placeholder={contact.type === 'email' ? 'john@example.com' : 'Value'}
                                />
                            </div>
                            <div className="sm:col-span-4">
                                <Input
                                    label="URL (Optional)"
                                    value={contact.url || ''}
                                    onChange={(e) => updateContact(index, { ...contact, url: e.target.value })}
                                    placeholder="https://"
                                />
                            </div>
                        </div>
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeContact(index)}
                            className="mt-8"
                            type="button"
                        >
                            <Trash2 size={16} />
                        </Button>
                    </div>
                ))}

                {contacts.length === 0 && (
                    <div className="text-center py-4 text-zinc-500 text-sm">
                        No contacts added yet.
                    </div>
                )}

                <Button variant="secondary" onClick={addContact} className="self-start gap-2" type="button">
                    <Plus size={16} />
                    Add Contact
                </Button>
            </div>
        </Card>
    );
};
