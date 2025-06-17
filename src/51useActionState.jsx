import { useActionState } from "react"

export default function UseActionState(){

    const handleLogin=(prevData,formData)=>{
        let name=formData.get('name')
        let password=formData.get('password')
        let regex=/^[A-Z0-9]+$/i;

        if(!name || name.length>5){
            return {error:"Name can not be empty or should not contain more than 5 characters",name,password}
        }else if(!regex.test(password)){
            return {error:"Password can contain only numbers and alphabets",name,password}
        }else{
            return {message:"Login done",name,password}
        }
    }
    const [data,action,pending]=useActionState(handleLogin)
    return(
        <div>
            <h1>Validation with UseActionState</h1>
            {
                data?.message && <span>{data.message}</span>
            }
            {
                data?.error && <span>{data.error}</span>
            }
            <form action={action}>
                <input type="text" defaultValue={data?.name} name="name" placeholder="enter name"/><br />
                <input type="text" defaultValue={data?.password} name="password" placeholder="enter password"/><br />
                <button>login</button>
            </form>
        </div>
    )
}