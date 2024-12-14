import { useFormStatus } from "react-dom"

function Form(){

    const handleSubmit=async ()=>{
        await new Promise(res=>setTimeout(res,2000))
        console.log("submit")
    }

    const CustomerForm=()=>{
        const {pending} =useFormStatus()
        console.log(pending)
        return(
            <div>
                <input type="text" placeholder="name"/><br />
                <input type="text" placeholder="password"/>
                <button disabled={pending}>{pending?'submitting...':'submit'}</button>
            </div>
        )
    }
    return(
        <div>
            <h1>useFormStatus Hook in React js</h1>
            <form action={handleSubmit}>
                <CustomerForm/>
            </form>
        </div>
    )
}

export default Form