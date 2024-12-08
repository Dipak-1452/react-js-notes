import style from './css/useerProfile.module.css'

function UserProfile(){
    return(
        <div>
            <h1 className={style.heading}> User profile</h1>
            <div className={style.card}>
                <img className={style.img} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div className={style.textWrap}>
                    <h4>anil sidhu</h4>
                    <p>software developer</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile