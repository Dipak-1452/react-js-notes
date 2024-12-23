// let count=0

function Pure(){
    return(
        <div>
            <h1>Keeping components Pure</h1>
            {/* <Counter/>
            <Counter/> */}
            <Counter count={1}/>
            <Counter count={2}/>
            <Counter count={3}/>
        </div>
    )
}

// impure component
// function Counter(){
//     count=count+1;
//     return(
//         <h1>counter {count}</h1>
//     )
// }

// pure component
function Counter({count}){
    return(
        <h1>counter {count}</h1>
    )
}



export default Pure