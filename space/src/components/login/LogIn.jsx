
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logInUser } from "../../redux/actions"


export default function Login () {

    const dispatch = useDispatch()
 
    const user = useSelector((state) => state.user) 
    const storageUser =  localStorage.getItem("user")
   
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

        } catch (error) {
            setLoginStatus(error.response.data)
        }
    }    
    
        
    const setUser = (user) => {
        localStorage.setItem("token", JSON.stringify(user.token))
        //user data should be filtered bc includes password and other data not useful
        localStorage.setItem("user", JSON.stringify(user.user))
        window.location.href = '/';
    }
       
   
    const handleChange = (e) => {
        setForm({
           ...form,
           [e.target.name] : e.target.value 
       });
   
    }
    return (

        <div>
            
            {//hardcoded?
            user.token ? setUser(user):storageUser? window.location.href = '/':(
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
            )}
           
            
        </div>
    )





}