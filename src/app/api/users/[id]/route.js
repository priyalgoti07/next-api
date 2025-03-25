import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    console.log("Received Params:", params); // Debugging

    // Ensure params exist and have an 'id'
    if (!params?.id) {
        return NextResponse.json({ message: "ID parameter missing" }, { status: 400 });
    }

    // Convert ID to number and find the user
    const useres = user.filter((user) => user.id === parseInt(params.id, 10));

    if (!useres) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ users: useres[0], success: true }, { status: 200 });
}

// export default function POST(){
//     return NextResponse.json({result:"hello"})
// }

// POST request - Example API response
export async function PUT(request, content) {
    let payload = await request.json();
    payload.id = content.params.id;

    console.log("userId", payload)
    if (!payload.id || !payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: 'request data is not valid', success: false }, { status: 400 })
    }
    return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(request, content) {
    let id = content.params.id;
    if (id) {
        return NextResponse.json({ result: "User Deleted", success: true }, { status: 200 })
    } else {
        return NextResponse.json({ result: "Internal error, please try after some item", success: false }, { status: 400 })
    }
}