function User(props){
    return(
        <div>
            <h1>user component</h1>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </div>
    )
}

export default User

export function User2({name,age}){
    return(
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </div>
    )

}

export function User3({user}){
    return(
        <div>
            <h1>Name:{user.name}</h1>
            <h2>Age:{user.age}</h2>
            <h3>Email:{user.email}</h3>
        </div>
    )

}

export function User4({name}){
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )

}

export function Student({name}){
    return(
        <div>
            <h1>student name:{name}</h1>
        </div>
    )
}

// default props
export function User5({name="user"}){
    return(
        <div>
            <h1>hi {name}</h1>
        </div>
    )

}

