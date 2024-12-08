function Cli(){
    function fruits(){
        alert("hello")
    }
    function frui(name){
        alert(name)
    }
    return(
        <div>
            <h1>Event and funtion call</h1>
            <button onClick={function fruit(){alert("hello")}}>Click me</button><br />

            <button onClick={fruits}>Click me</button><br />

            <button onClick={()=>frui("apple")}>Apple</button>
            <button onClick={()=>frui("banana")}>Banana</button>
        </div>
    )
}

export default Cli

// On click it search within the local scope if it is 
// not available then search at the global scope.

// html onclick need function call and react js onClick need function defenition