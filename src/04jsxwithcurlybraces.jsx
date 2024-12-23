function Cur(){
    const name="Dipak R";
    let x=10;
    let y=20;
    const userinfo={
        name:"ham",
        age:16,
        gender:"male"
    }
    const userarray=["hari","ram","dima"]
    let path="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/3/22/0/shutterstock_national-puppy-day-224423782.jpg.rend.hgtvcom.616.462.suffix/1521744674350.jpeg"
    function fruit(){
        return "apple"
    }
    return(
        <div>
            <h1>jsx with curly braces</h1>
            <h1>{name?name:"user not found"}</h1>
            <p>{x+y}</p>
            <p>{fruit()}</p>
            <p>{userinfo.name}</p>
            <p>{userarray[0]}</p>
            <input type="text" value={name} /><br />
            <img src={path} alt="image not found"></img>
           
        </div>
    )
}

export default Cur