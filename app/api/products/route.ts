import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import schema from "@/app/api/products/schema";


export const GET = async (request: NextRequest) => {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const validation = schema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(validation.error.errors, {status: 400})
        }

        const productTitle = await prisma.product.findUnique({
            where: {
                title: body.title
            }
        });
        if (productTitle) return NextResponse.json({error: 'Product already exists'}, {status: 400})
        const product = await prisma.product.create({
            data: {
                title: body.title,
                description: body.description,
                price: body.price,
                discountPercentage: body.discountPercentage,
                rating: body.rating,
                stock: body.stock,
                brand: body.brand,
                category: body.category,
                thumbnail: body.thumbnail,
                images: body.images
            },
        });

        return new NextResponse(JSON.stringify(product), {
            status: 201,
            headers: {"Content-Type": "application/json"},
        });
    } catch
        (error: any) {
        return new NextResponse(error.message, {status: 500});
    }
}