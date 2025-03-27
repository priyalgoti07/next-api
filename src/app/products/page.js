// 'use client'
import DeleteProduct from '@/util/DeleteProduct';
import Link from 'next/link';
import React from 'react'
const getProducts = async () => {
    try {
        let result = await fetch('http://localhost:3000/api/products');
        result = await result.json()
        return result
    } catch (error) {

    }
}

const page = async () => {
    let products = await getProducts()

    return (
        <div>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <h1 style={{ textAlign: "center", color: "#333" }}>Product List</h1>
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px", border: "1px solid #ddd" }}>
                    <thead>
                        <tr style={{ background: "#f4f4f4", textAlign: "left" }}>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Price</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Company</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Category</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Color</th>
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.result?.map((product, index) => (
                            <tr key={product._id} style={{ background: "#fff", borderBottom: "1px solid #ddd" }}>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{index + 1}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.name}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.price}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.company}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.category}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.color}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd", display: "flex", gap: 10 }}>
                                    <Link href={`products/${product._id}`} >Edit</Link>
                                    <DeleteProduct id={product._id}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page