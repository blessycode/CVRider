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