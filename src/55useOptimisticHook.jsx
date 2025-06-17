import { useOptimistic } from "react";
import { useEffect, useState } from "react"

export default function UseOptimistic() {

    const [skills, setSkills] = useState([]);
    const [name, setName] = useState([]);
    const [optSkills, setOptSkills] = useOptimistic(skills)
    useEffect(() => {
        getSkills()
    }, []);

    const getSkills = async () => {
        let resp = await fetch("http://localhost:3000/skills");
        resp = await resp.json();
        setSkills(resp)
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const addSkill = async (event) => {
        const id = Math.random() * 100000
        setOptSkills((prev) => [...prev , { name, id }])
        let resp = await fetch('http://localhost:3000/skills', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, id })
        });
        await sleep(3000)
        resp = await resp.json();
        if (resp) {
            getSkills()
        }
    }
    return (
        <div>
            <h1>useOptimistic Hook</h1>
            <form action={addSkill}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter skill" />
                <button>Add</button>
            </form>

            {
                optSkills.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    )
}