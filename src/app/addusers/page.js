'use client'
import React, { useState } from 'react';

const page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const handleSubmit = async () => {
        console.log(name, email, age)
        let response = await fetch('http://localhost:3000/api/users', { method: "Post", body: JSON.stringify({ name, age, email }) })
        let data = await response.json()
        console.log(data)
      
        if (data.success) {
            alert("User add successfuly")
            setName('')
            setAge('')
            setEmail('')
        } else {
            alert("some error with data please check and try again")
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
            <h1 style={{ marginBottom: '20px', color: '#333' }}>Add New User</h1>

            <input
                type='text'
                placeholder='Name'
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
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder='Age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={{
                    width: '300px',
                    padding: '10px',
                    marginBottom: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />

            <button
                onClick={handleSubmit}
                style={{
                    width: '320px',
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Add User
            </button>
        </div>
    );
};

export default page;
