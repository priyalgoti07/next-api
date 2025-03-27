'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteProduct = ({ id }) => {
    const router = useRouter()
    const handleDelete = async () => {
        let result = await fetch(`http://localhost:3000/api/products/${id}`, { method: 'delete' })
        let deletedData = await result.json();
        if (deletedData.success) {
            alert("Product is Delete")
            router.push('/products')
        }
    }
    return (
        <button onClick={handleDelete} style={{ border: "none" }}>Delete</button>
    )
}

export default DeleteProduct