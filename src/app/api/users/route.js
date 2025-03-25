import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET() {
    const data = user;
    return NextResponse.json(data, { status: 200 })
}

// POST request - Example API response
export async function POST(request) {
    let payload = await request.json()
    console.log(payload.name)
    if (!payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: "required file not found", success: false }, { status: 400 });

    }
    return NextResponse.json({ result: "new User created", success: true }, { status: 200 });
}