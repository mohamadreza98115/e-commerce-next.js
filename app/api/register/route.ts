import bcrypt from 'bcrypt'
import {NextRequest, NextResponse} from 'next/server'
import prisma from "@/prisma/client";
import {z} from "zod";

// Create schema with zod and validate data
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const {email, password} = body;

    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400});
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (exist) {
        return NextResponse.json({error: 'Email already exists'}, {status: 400})
    }

    // hash the password with bcrypt library
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            hashedPassword
        }
    });

    return NextResponse.json(user)
}