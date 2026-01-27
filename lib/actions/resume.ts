"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function saveResume(content: any, title: string = "My Resume") {
    const session = await auth()

    if (!session?.user?.id) {
        throw new Error("Unauthorized")
    }

    const resume = await prisma.resume.create({
        data: {
            userId: session.user.id,
            title,
            content,
        }
    })

    revalidatePath("/editor")
    return resume
}

export async function getResumes() {
    const session = await auth()

    if (!session?.user?.id) {
        return []
    }

    return await prisma.resume.findMany({
        where: {
            userId: session.user.id
        },
        orderBy: {
            updatedAt: 'desc'
        }
    })
}
