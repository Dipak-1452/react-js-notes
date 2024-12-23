import { useActionState } from "react"

function Acti(){

    const handleSubmit=async(previousData,formData)=>{
        let name=formData.get("name")
        let password=formData.get("password")

        await new Promise(res=>setTimeout(res,2000))
        console.log("handleSubmit called")
        if(name && password){
            return {message:'data submitted',name,password}
        }else{
            return {error:'failed to submit.Enter proper data',name,password}
        }
    }
    const [data,action,pending]=useActionState(handleSubmit,undefined)
    return(
        <div>
            <h1>useActionState Hook in React js</h1>
            <form action={action}>
                <input defaultValue={data?.name} type="text" placeholder="enter name" name="name" /><br /><br />
                <input defaultValue={data?.password} type="text" placeholder="enter password" name="password"/><br /><br />
                <button disabled={pending}>Submit data</button><br />
                {data?.error && <span style={{color:'red'}}>{data?.error}</span>}
                {data?.message && <span style={{color:'green'}}>{data?.message}</span>}

            </form>
            <h3>Name:{data?.name}</h3>
            <h3>Password:{data?.password}</h3>
        </div>
    )
}

export default Acti