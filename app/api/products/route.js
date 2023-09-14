import {NextResponse} from "next/server";
import dbConnect from "../../../backend/config/dbConnect";
import Product from "../../../backend/models/Product";

export const POST = async (request) => {
    await dbConnect();
    const body = await request.json();
    await Product.create(body);
    return NextResponse.json({message: "Product created"}, {status: 201});
};

export const GET = async () => {
    await dbConnect();
    const products = await Product.find();
    return NextResponse.json(products);
};

export const DELETE = async (request) => {
    const id = request.nextUrl.searchParams.get("id");
    await dbConnect();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({message: "Product deleted"}, {status: 200});
};
