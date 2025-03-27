import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose, { mongo } from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, context) {
    const { params } = context; // Ensure we extract `params` properly

    console.log(params); // Check if params exist
    const filterData = params?.productid; // Extract product ID safely
    const filterID = { _id: filterData }
    const payload = await request.json()
    await mongoose.connect(connectionStr);
    const result = await Product.findOneAndUpdate(filterID, payload); // Your logic goes here

    return NextResponse.json({ result, success: true });
}
