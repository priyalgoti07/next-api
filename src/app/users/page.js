import DeleteUser from "@/util/DeleteUser"
import Link from "next/link"

async function getUser() {
    let data = await fetch('http://localhost:3000/api/users')
    data = await data.json()
    return data
}

export default async function page() {
    let Users = await getUser()
    console.log(Users)
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#333" }}>Users List</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" }}>
                {Users.map((item) => {
                    return (
                        <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", background: "#f9f9f9" }}>
                            <Link href={`users/${item.id}`} style={{ textDecoration: "none", color: "#0070f3", fontSize: "16px" }}>
                                {item.name}
                            </Link>
                            <span>
                                <Link href={`users/${item.id}/update`} style={{ textDecoration: "none", color: "#ff9800", fontSize: "14px" }}>
                                    Edit
                                </Link>
                            </span>
                            <DeleteUser id={item.id}/>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}