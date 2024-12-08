function In() {
    const sty={
        border: "1px solid #cccccc3b",
        width: "200px",
        boxShadow: "1px 2px 3px 0px black"
    }
    return (
        <div>
            <h1 style={{ color: "red" }}>Inline style in react js</h1>
            <div style={{display:"flex",flexWrap:'wrap'}}>
            <div style={sty}>
                <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div style={{padding:'5px'}}>
                    <h4>anil</h4>
                    <p>software devveloper</p>
                </div>
            </div>
            <div style={sty}>
                <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div style={{padding:'5px'}}>
                    <h4>anil</h4>
                    <p>software devveloper</p>
                </div>
            </div>
            <div style={sty}>
                <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div>
                    <h4>anil</h4>
                    <p>software devveloper</p>
                </div>
            </div>
            <div style={sty}>
                <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div>
                    <h4>anil</h4>
                    <p>software devveloper</p>
                </div>
            </div>
            <div style={sty}>
                <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div>
                    <h4>anil</h4>
                    <p>software devveloper</p>
                </div>
            </div>
            <div style={sty}>
                <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div>
                    <h4>anil</h4>
                    <p>software devveloper</p>
                </div>
            </div>
            <div style={sty}>
                <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div>
                    <h4>anil</h4>
                    <p>software devveloper</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default In