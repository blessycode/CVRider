import { supabase } from './supabaseClient';
import { CVData } from '@/types/cv';

export const CVService = {
    async getCV(id: string) {
        const { data, error } = await supabase
            .from('cvs')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as CVData;
    },

    async getUserCVs(userId: string) {
        const { data, error } = await supabase
            .from('cvs')
            .select('*')
            .eq('user_id', userId)
            .order('updated_at', { ascending: false });

        if (error) throw error;
        return data as CVData[];
    },

    async createCV(cv: Omit<CVData, 'id'>) {
        const { data, error } = await supabase
            .from('cvs')
            .insert(cv)
            .select()
            .single();

        if (error) throw error;
        return data as CVData;
    },

    async updateCV(id: string, updates: Partial<CVData>) {
        const { data, error } = await supabase
            .from('cvs')
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as CVData;
    },

    async deleteCV(id: string) {
        const { error } = await supabase
            .from('cvs')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return true;
    }
};
