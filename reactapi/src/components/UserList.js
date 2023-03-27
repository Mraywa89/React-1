import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(
        ()=>{
            const getUsers = () =>{
                axios.get("https://jsonplaceholder.typicode.com/users")
                .then((response) => setUsers(response.data))
                .catch((err) => console.log(err))
            }
            getUsers();
        },[]
    )

    
    
    return (
        <>
        {
        users.map(
            (el,index) => (
                <div key = {index}>
                    <p>{el.name}</p>
                    <p>{el.username}</p>
                    <hr></hr>
                </div>
            )
        )
        }
        </>
    )
};

export default UserList;