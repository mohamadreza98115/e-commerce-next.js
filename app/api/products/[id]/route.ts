import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";

interface Props {
    params: { id: string }
}

export const GET = async (request: NextRequest, {params}: Props) => {
    try {
        const product = prisma.product.findUnique({where: {id: params.id}})
        if (!product) {
            return NextResponse.json({error: 'Product not found'}, {status: 404})
        }
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json({message: "Failed to fetch", error}, {status: 500})
    }
}

export async function DELETE(request: Request, {params}: { params: { id: string } }) {
    try {
        const id = params.id;

        const deletedUser = await prisma.product.delete({
            where: {id: params.id},
        });

        return NextResponse.json(deletedUser);
    } catch (error) {
        console.log('error');
    }
}