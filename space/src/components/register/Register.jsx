import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Register () {


    const validateForm = (form) => {
        let errors = {}
    }

    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        username: "",
        password:"",
        repeatPassword:"",
    })
    const [error, setError] = useState({
        name: "",
        lastname: "",
        email: "",
        username: "",
        password:"",
        repeatPassword:"",
    })
    const handleChange = (e) => {
        setForm({
           ...form,
           [e.target.name] : e.target.value 
       });
        setError(validateForm({
           ...form,
           [e.target.name] : e.target.value
       }))
       
   }
    const handleSubmit = () =>{

    }
    return (

        <div>
          
            <form id="register" onSubmit={handleSubmit}>    
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Name" onChange={(e) => handleChange(e)} />
                    <label>Last name</label>
                    <input type="text" placeholder="Last Name" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Username" onChange={(e) => handleChange(e)} />
                    <label>Email</label>
                    <input type="text" placeholder="Email" onChange={(e) => handleChange(e)} />
                </div>
                <div>   
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                    <label>Repeat Password</label>
                    <input type="password" placeholder="Repeat Password" onChange={(e) => handleChange(e)} />
                </div>
                <button type="submit" form="register">Register</button>

            </form>
        </div>

    )


}