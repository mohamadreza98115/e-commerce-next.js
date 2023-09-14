import {NextResponse} from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import Product from "../../../../backend/models/Product";

export async function GET({params}) {
    const {id} = params;
    await dbConnect();
    // const body = request.json();
    const product = await Product.findById(id);
    // await Product.findByIdAndUpdate(id, {body});
    return NextResponse.json({...product})
}