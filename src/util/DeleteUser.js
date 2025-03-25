'use client'
import React from 'react'

const DeleteUser = ({ id }) => {
    const userId = id;
    const handleDelete = async () => {
        console.log("userId", userId)
        let result = await fetch(`http://localhost:3000/api/users/${userId}`, { method: "delete" })
        result = await result.json();
        if(result.success){
            alert("User is Delete")
        }
    }
    return (
        <button
            style={{ textDecoration: "none", color: "red", fontSize: "14px" }}
            onClick={handleDelete}
        >Delete</button>
    )
}

export default DeleteUser