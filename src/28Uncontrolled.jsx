import { useRef } from "react";

function Uncon(){

    const userref=useRef();
    const passwordref=useRef();

    const handleForm=(event)=>{
        event.preventDefault();
        const user=document.querySelector('#user').value;
        const password=document.querySelector('#password').value;
        console.log(user,password);
    }
    const handleFormRef=(event)=>{
        event.preventDefault();
        const user=userref.current.value;
        const password=passwordref.current.value;
        console.log(user,password);
    }
    return(
        <div>
            <h1>Uncontrolled component</h1>
            <form action="" method="post" onSubmit={handleForm}>
                <input type="text" id="user" placeholder="enter user name"/><br />
                <input type="password" id="password" placeholder="enter user password"/><br />
                <button>submit</button>
            </form>
            <hr />
            <h1>Uncontrolled component with useRef</h1>
            <form action="" method="post" onSubmit={handleFormRef}>
                <input type="text" ref={userref} id="userref" placeholder="enter user name"/><br />
                <input type="password" ref={passwordref} id="passwordref" placeholder="enter user password"/><br />
                <button>submit with ref</button>
            </form>
        </div>
    )
}

export default Uncon