'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";

const page = () => {
    const params = useParams(); // Correct way to get URL params in Next.js 14+
    const id = params.userid; // Extract user ID
    console.log(id)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const handleUpdate = async () => {
        console.log(name, age, email)
        let result = await fetch(`http://localhost:3000/api/users/${id}`, { method: 'PUT', body: JSON.stringify({ name, age, email }) })
        let data = await result.json()
        console.log("Updatedata", data)
        if (data.success) {
            alert("User updated successfuly");
            setName('');
            setAge('');
            setEmail('');
        } else {
            alert("please try with valid input")
        }
    }
    useEffect(() => {
        getUserDetails(id)
    }, [])

    const getUserDetails = async (id) => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`)
        data = await data.json()
        setName(data.users.name)
        setEmail(data.users.email)
        setAge(data.users.age)
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
            <h1 style={{ marginBottom: '20px', color: '#333' }}>Update New User</h1>

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
                onClick={handleUpdate}
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
                Update User
            </button>
        </div>
    )
}

export default page