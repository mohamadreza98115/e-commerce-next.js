import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";


export const GET = async (request: NextRequest) => {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
};

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        const newData = await prisma.product.create({
            data: {
                ...body
            }
        })

        return NextResponse.json(newData);
    } catch (err) {
        return NextResponse.json({message: "Failed to post product", err}, {status: 500})
    }
}