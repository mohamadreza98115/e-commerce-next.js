import {NextRequest, NextResponse} from "next/server";
import {z} from 'zod';
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

//  Create schema for validating user data.
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const POST = async (request: NextRequest) => {

    // Get the passed data from body of request in async
    const body = await request.json();

    // Validation Data
    const validation = schema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, {status: 400})

    // Get a specific user from database
    const user = await prisma.user.findUnique({where: {email: body.email}})

    // Check user is existing in database or not.
    if (user) return NextResponse.json({error: 'User already exists'}, {status: 400})

    //  Encrypt password with Bcrypt library
    const hashedPassword = await bcrypt.hash(body.password, 10);

    //  If the user is not exist create a new user and store in database
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword
        }
    });

    return NextResponse.json({email: newUser.email})

}