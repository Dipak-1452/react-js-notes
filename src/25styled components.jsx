import styled from "styled-components";

function Stcom(){

//     const Heading=styled.h1`
//     color:red;
//     border:1px solid green;
//     border-radius:5px;
//     margin:20px;
//     padding:20px;
//     `

const Heading = styled.h1({
    color: 'red',
    border: '1px solid green',
    borderRadius: '5px',
    margin: '20px',
    padding: '20px'
})
const StyleBtn=styled.button`
color:red
`
return (
    <div>
        <h1>styled component with react js</h1>
        <Heading>hello guys</Heading>
        <StyleBtn>Login</StyleBtn>
    </div>
)
}

export default Stcom