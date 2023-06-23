
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


import { logInUser } from "../../redux/actions"


export default function Login () {

    const dispatch = useDispatch()
 
    const user = useSelector((state) => state.user)
    const [form, setForm] = useState({
        "username": "",
        "password": ""
    })
    const [errors, setErrors] = useState({
        "username": "",
        "password": "",
    })
    const [loginStatus, setLoginStatus] = useState()

    const handleSubmit =async (e) => {
        e.preventDefault()
        try {
            await dispatch(logInUser(form))
            localStorage.setItem("token", JSON.stringify(user.token))
            if (user){
                window.location.href = '/';
            }
          

        } catch (error) {
            setLoginStatus(error.response.message)
        }
        
    
        
       
       
    }
    const handleChange = (e) => {
        setForm({
           ...form,
           [e.target.name] : e.target.value 
       });
       console.log(form)
    }
    return (

        <div>
            <form id="Login" onSubmit={handleSubmit}>    
                <div>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" onChange={(e) => handleChange(e)} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                </div>
                <button type="submit" >Log In</button>
                {loginStatus? <h1>{loginStatus}</h1>: <h1></h1>}
            </form>
            
        </div>
    )





}