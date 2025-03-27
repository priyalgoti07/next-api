import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose, { mongo } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    const { params } = content;
    const recorddata = params.productid;
    const record = { _id: recorddata }
    await mongoose.connect(connectionStr);
    const result = await Product.findById(record)
    return NextResponse.json({ result, success: true })
}

export async function PUT(request, content) {
    const { params } = content; // Ensure we extract `params` properly

    console.log(params); // Check if params exist
    const filterData = params?.productid; // Extract product ID safely
    const filterID = { _id: filterData }
    const payload = await request.json()
    await mongoose.connect(connectionStr);
    const result = await Product.findOneAndUpdate(filterID, payload); // Your logic goes here

    return NextResponse.json({ result, success: true });
}
export async function DELETE(request, content) {
    const { params } = content;
    const recordata = params.productid;
    const recordDelete = { _id: recordata }
    await mongoose.connect(connectionStr);
    const result = await Product.deleteOne(recordDelete)
    return NextResponse.json({ result, success: true })
}
