import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let success = true;
    let data = []
    try {
        await mongoose.connect(connectionStr)
        data = await Product.find()
    } catch (error) {
        data = { result: "Error" }
        success = false;
    }
    return NextResponse.json({ result: data ,success})
}

export async function POST(request) {
    let payload = await request.json()
    await mongoose.connect(connectionStr)
    if (!payload.name || !payload.price || !payload.company || !payload.category || !payload.color) {
        return NextResponse.json({ result: "required file not found", success: false }, { status: 400 })
    }
    let product = new Product(payload)
    let result = await product.save();
    return NextResponse.json({ result, success: true })
}