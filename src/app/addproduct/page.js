'use client'
import React, { useState } from 'react';

const Page = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");

    const handleSave = async () => {
        //Basic validation
        if (!name.trim() || !name.price || !name.company | !name.category || !name.color) {
            alert("All fileds are required");
            return
        }
        console.log(name, price, company, category, color);
        let response = await fetch('http://localhost:3000/api/products', { method: "Post", body: JSON.stringify({ name, price, company, category, color }) })
        let data = await response.json()
        console.log(data.result)
        if (data.success) {
            alert("Product add Successfuly")
            setName('');
            setPrice('');
            setCompany('');
            setCategory('');
            setColor('');
        } else {
            alert("some error with data please check and try again")
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f4f4f4'
        }}>
            <h1 style={{ marginBottom: '20px', color: '#333', fontSize: '24px' }}>Add Products</h1>

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
                onClick={handleSave}
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
                Add Product
            </button>
        </div>
    );
};

export default Page;
