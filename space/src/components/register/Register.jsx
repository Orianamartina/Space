import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { registerUser } from "../../redux/actions"
import { useDispatch} from "react-redux"

export default function Register () {
    const [form, setForm] = useState({})
    const [error, setError] = useState({"completed": false})
    const [registerStatus, setRegisterStatus] = useState()
   
    const dispatch = useDispatch()
    const validateForm = (form) => {
        
        const errors = {}
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  
        if (!form.name || !form.lastname || !form.email || !form.username || !form.password || !form.repeatpassword){
            errors.completed = "All fields are required"
        }
        if (!emailRegex.test(form.email)) {
            errors.email = "invalid email address"
        }
        const minLength = 8;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        if (!form.password || form.password.length < minLength ) {
            errors.password = 'Password must be at least 8 characters long'
        }
        
        if (!uppercaseRegex.test(form.password)) {
            errors.password = 'Password must contain at least one uppercase letter'
        }
        
        if (!lowercaseRegex.test(form.password)) {
            errors.password = 'Password must contain at least one lowercase letter'
        }
        
        if (!digitRegex.test(form.password)) {
            errors.password = "Password must contain at least one digit"
        
        }
        if(form.password != form.repeatpassword){
            errors.repeatpassword = 'Passwords must be identical'
        }
        return errors
    
    }

    const handleChange = (e) => {
        setForm({
           ...form,
           [e.target.name] : e.target.value 
       });
       console.log(form)
       
    }
    const hasNoErrors = Object.entries(error).length === 0
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError(validateForm(form))
        if (hasNoErrors){
            try {
                await dispatch(registerUser(form));
                window.location.href = '/';
            } catch (error) {
                await setRegisterStatus(error.response.data.message);
            }
             
        }
        
    }
    return (

        <div>
          
            <form id="register" onSubmit={(e) => handleSubmit(e)}>    
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Name" name="name" onChange={(e) => handleChange(e)} />
                    <label>Last name</label>
                    <input type="text" placeholder="Last Name" name= "lastname" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Username" name="username" onChange={(e) => handleChange(e)} />
                    <label>Email</label>
                    <input type="text" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
                </div>
                <div>   
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />
                    <label>Repeat Password</label>
                    <input type="password" placeholder="Repeat Password" name="repeatpassword" onChange={(e) => handleChange(e)} />
                </div>
                <button type="submit" form="register">Register</button>
                <h3>{Object.entries(error)[0]? Object.entries(error)[0][1]: registerStatus? registerStatus: " "}</h3>
                
            </form>
        </div>

    )


}