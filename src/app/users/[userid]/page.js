import React from 'react'

async function getUser(params = "") {
    let data = await fetch(`http://localhost:3000/api/users/${params}`)
    data = await data.json()
    return data
}

const page = async ({ params }) => {
    const Fetchdata = await getUser(params.userid)
    console.log("Fetchdata", Fetchdata.users)
    return (
        <div>
            {!Fetchdata.users ? <h1>User Not Found</h1> :
                <>
                    <h1>User Details</h1>
                    <h2>User Name:{Fetchdata.users.name}</h2>
                    <h3>User Name:{Fetchdata.users.age}</h3>
                    <h4>User Name:{Fetchdata.users.email}</h4>
                </>}

        </div>
    )
}

export default page