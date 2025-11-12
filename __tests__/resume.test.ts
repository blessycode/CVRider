import { Resume, resumeSchema } from "@/types/Resume";
import z from "zod";

describe('Test Zod with minimally configured Resume type object...', () => {
    test("Zod schema parses minimum resume without throwing error", () => {
        const testResume: Resume = {
            name: {
                first: "Justin"
            }
        };

        expect(() => resumeSchema.parse(testResume)).not.toThrow(z.ZodError);
    });
});

describe('Test Zod with incorrectly configured Resume type object...', () => {
    test("Zod schema parse throws error because education array is empty, but present", () => {
        const testResume = { // Not valid Resume type (empty education [])
            name: {
                first: "Justin"
            },
            education: []
        };

        expect(() => resumeSchema.parse(testResume)).toThrow(z.ZodError);
    });
});

describe('Test Zod with incorrectly configured Resume type object...', () => {
    test("Zod schema parse throws error because experience array is empty, but present", () => {
        const testResume = { // Not valid Resume type (empty experience [])
            name: {
                first: "Justin"
            },
            experience: []
        };

        expect(() => resumeSchema.parse(testResume)).toThrow(z.ZodError);
    });
});

describe('Test Zod with incorrectly configured Resume type object...', () => {
    test("Zod schema parse throws error because projects array is empty, but present", () => {
        const testResume = { // Not valid Resume type (empty projects [])
            name: {
                first: "Justin"
            },
            projects: []
        };

        expect(() => resumeSchema.parse(testResume)).toThrow(z.ZodError);
    });
});

describe('Test Zod with incorrectly configured Resume type object...', () => {
    test("Zod schema parse throws error because skills array is empty, but present", () => {
        const testResume = { // Not valid Resume type (empty skills [])
            name: {
                first: "Justin"
            },
            skills: []
        };

        expect(() => resumeSchema.parse(testResume)).toThrow(z.ZodError);
    });
});