import React, { useEffect, useState } from "react";
import axios from "axios"
const Users = () => {
    const [users, setUsers] = useState([])

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="users">
        {users.map(
            (el,index) => (
            <div key={index} className="user">
                <p>{el.name}</p>
                <p>{el.username}</p>
                <p>{el.email}</p>
            </div>
            )
        )}
        </div>
    )
}

export default Users;