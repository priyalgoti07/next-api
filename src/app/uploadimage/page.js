'use client'
import React, { useState } from 'react'

const page = () => {

    const [file, setFile] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(file)
        const data = new FormData();
        data.set('file', file);
        let result = await fetch('api/upload/', {
            method: "POST",
            body: data,
        })
        result = await result.json()
        if (result.success) {
            alert("file uploaded Successfully")
        }
    }
    return (
        <div>
            <h1>Upload Image</h1>
            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={(e) => setFile(e.target.files?.[0])} />
                <button type='submit'>Upload Image</button>
            </form>
        </div>
    )
}

export default page