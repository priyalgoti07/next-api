import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const studentDetails = params.id?.join("/") || "No ID provided";
    console.log(studentDetails);

    return NextResponse.json({ result: studentDetails }, { status: 200 });
}