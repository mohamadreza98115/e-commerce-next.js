import {NextRequest, NextResponse} from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import Product from "../../../../backend/models/Product";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, {params: {id}}: Props) {
    await dbConnect();
    const product = await Product.findById(id)
    return NextResponse.json(product);
};