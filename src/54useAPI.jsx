import { use } from "react";
import { Suspense } from "react";

const fetData = () => fetch('https://dummyjson.com/users').then((response) => response.json());
const userResource = fetData();

export default function UseAPI() {
    return (
        <div>
            <h1>use API in React js</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <Users userResource={userResource} />
            </Suspense>
        </div>
    )
}

const Users = ({ userResource }) => {
    const userData = use(userResource);
    return (
        <div>
            <h1>Users List</h1>
            {
                userData?.users.map((user)=>(<h1 key={user.id}>{user.firstName}</h1>))
            }
        </div>
    )
}