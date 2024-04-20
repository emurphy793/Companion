import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const categories = await prisma.task.findMany({
            select: {
                category: true,
            },
            distinct: ['category']
        });
        return NextResponse.json(categories);
    } catch (error) {
        console.error("ERROR FETCHING CATEGORIES: ", error);
        return NextResponse.json({ error: "Error fetching categories", status: 500 });
    }
}