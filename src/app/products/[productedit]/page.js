'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const params = useParams();
    const id = params.productedit
    console.log(id)
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");

    const getProductDetails = async (id) => {
        let record = await fetch(`http://localhost:3000/api/products/${id}`)
        let data = await record.json()
        if (data.success) {
            const { result } = data;
            console.log(result)
            setName(result.name);
            setPrice(result.price);
            setCompany(result.company);
            setCategory(result.category);
            setColor(result.color);
        }
    }


    useEffect(() => {
        getProductDetails(id)
    }, [])

    const handleUpdate = async () => {
        //Basic validation
        if (!name.trim() || !price.trim() || !company.trim() | !category.trim() || !color.trim()) {
            alert("All fileds are required");
            return
        }
        let result = await fetch(`http://localhost:3000/api/products/${id}`, { method: "PUT", body: JSON.stringify({ name, price, company, category, color }) })
        let data = await result.json()
        console.log("updateProductdata", data)
        if (data.success) {
            alert("Product has been update successfuly");
        } else {
            alert("Please try with valid Input")
        }
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f4f4f4'
        }}>
            <h1 style={{ marginBottom: '20px', color: '#333', fontSize: '24px' }}>Update Products</h1>

            <input
                type='text'
                placeholder='Enter Product Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    width: '300px',
                    padding: '10px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />

            <input
                type='text'
                placeholder='Enter Product Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{
                    width: '300px',
                    padding: '10px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />

            <input
                type='text'
                placeholder='Enter Product Company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={{
                    width: '300px',
                    padding: '10px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />

            <input
                type='text'
                placeholder='Enter Product Category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                    width: '300px',
                    padding: '10px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />

            <input
                type='text'
                placeholder='Enter Product Color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                    width: '300px',
                    padding: '10px',
                    marginBottom: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />

            <button
                onClick={handleUpdate}
                style={{
                    width: '320px',
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Update Product
            </button>
            <br />
            <Link
                href={"/products"}
                style={{
                    width: '320px',
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    textAlign: 'center'
                }}
            >
                Product List
            </Link>
        </div>
    );
};

export default Page;
