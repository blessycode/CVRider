import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const createPrismaClient = () => {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        console.error("DATABASE_URL is missing in environment variables!");
        throw new Error("DATABASE_URL is not defined");
    }

    // Improved Pool configuration for serverless environments (like Vercel)
    const pool = new Pool({
        connectionString,
        max: 10, // Limit connections to prevent Supabase saturation
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 5000,
    });

    const adapter = new PrismaPg(pool);

    return new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error", "warn"],
    });
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
