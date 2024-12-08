import College from "./17college"

function Nested(){
    const collegeData=[
        {
            name:"iet",
            city:"alwar",
            website:"www.iet.com",
            student:[
                {
                    name:"anil",
                    age:20,
                    email:"a@g"
                },
                {
                    name:"hari",
                    age:24,
                    email:"ad@g"
                },
                {
                    name:"uuil",
                    age:25,
                    email:"a@gg"
                },
                {
                    name:"agnil",
                    age:230,
                    email:"arr@g"
                }

            ]
        },
        {
            name:"iet",
            city:"alwar",
            website:"www.iet.com",
            student:[
                {
                    name:"anil",
                    age:20,
                    email:"a@g"
                },
                {
                    name:"hari",
                    age:24,
                    email:"ad@g"
                },
                {
                    name:"uuil",
                    age:25,
                    email:"a@gg"
                },
                {
                    name:"agnil",
                    age:230,
                    email:"arr@g"
                }

            ]
        },
        {
            name:"iit",
            city:"delhi",
            website:"www.iit.com",
            student:[
                {
                    name:"df",
                    age:20,
                    email:"a@g"
                },
                {
                    name:"ssi",
                    age:24,
                    email:"ad@g"
                },
                {
                    name:"gs",
                    age:25,
                    email:"a@gg"
                },
                {
                    name:"eff",
                    age:230,
                    email:"arr@g"
                }

            ]
        },
        {
            name:"iim",
            city:"mumbai",
            website:"www.iim.com",
            student:[
                {
                    name:"df",
                    age:20,
                    email:"a@g"
                },
                {
                    name:"ssi",
                    age:24,
                    email:"ad@g"
                },
                {
                    name:"gs",
                    age:25,
                    email:"a@gg"
                },
                {
                    name:"eff",
                    age:230,
                    email:"arr@g"
                }

            ]
        }
    ]
    return(
        <div>
            <h1>
                Nested Looping with component
            </h1>
            {
                collegeData.map((college,index)=>(
                    <div key={index}>
                        <College college={college}/>
                    </div>

                ))
            }
        </div>
    )
}

export default Nested