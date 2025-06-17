import { useState } from "react";
import { useEffect } from "react";

export default function Fet(){
    const [userData,setuserData]=useState([]);

    useEffect(()=>{
        getUsersData();
    },[])
    async function getUsersData(){
        const url="https://dummyjson.com/users";
        let response=await fetch(url);
        response=await response.json();
        console.log(response);
        setuserData(response.users);
    }
    return(
        <>
        <h1>fetch data from API</h1>
        {userData && userData.map((user)=>(
            <h1>{user.firstName}</h1>
        ))}
        </>
    )
}