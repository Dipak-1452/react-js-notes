import { useState } from "react"

function Dy() {
    const [sty,setsty]=useState({
        border: "1px solid #cccccc3b",
        width: "200px",
        boxShadow: "1px 2px 3px 0px black"
    })
    const [textclr,settextclr]=useState('black')
    const [grid,setgrid]=useState(true)

    const updateTheme=(color,textcl)=>{
        setsty({...sty,backgroundColor:color})
        settextclr(textcl)
    }
    return (
        <div>
            <h1 style={{ color: "red" }}>Inline style in react js</h1>
            <button onClick={()=>updateTheme('#ccc','red')}>gray them</button>
            <button onClick={()=>updateTheme('white','black')}>default them</button>
            <button onClick={()=>setgrid(!grid)}>toggle grid</button>
            <div style={{ display: grid?"flex":"block", flexWrap: 'wrap' }}>
                <div style={sty}>
                    <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div style={{ padding: '5px',color:textclr }}>
                        <h4>anil</h4>
                        <p>software devveloper</p>
                    </div>
                </div>
                <div style={sty}>
                    <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div style={{ padding: '5px',color:textclr }}>
                        <h4>anil</h4>
                        <p>software devveloper</p>
                    </div>
                </div>
                <div style={sty}>
                    <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div style={{ padding: '5px',color:textclr }}>
                        <h4>anil</h4>
                        <p>software devveloper</p>
                    </div>
                </div>
                <div style={sty}>
                    <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div style={{ padding: '5px',color:textclr }}>
                        <h4>anil</h4>
                        <p>software devveloper</p>
                    </div>
                </div>
                <div style={sty}>
                    <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div style={{ padding: '5px',color:textclr }}>
                        <h4>anil</h4>
                        <p>software devveloper</p>
                    </div>
                </div>
            </div>
        </div>)
}

export default Dy