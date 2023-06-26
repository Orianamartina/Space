

import { Link } from "react-router-dom"


export default function NavBar () {

    let user = null

    try {
        user = JSON.parse(localStorage.getItem("user"));
      } catch (error) {
        user = null
      }
  
      const logOutUser = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token")
        window.location.href = '/';
      }
      
    return (

        <div>

            <Link to="/marsrover"><button>Mars Rover images</button></Link>
            <Link to="/see-you-from-space"><button>See your location from space </button></Link>
            <Link to= "/pic-of-day"><button>Nasa Picture of the day</button></Link>
            <Link to="/news"><button>Spaceflight news</button></Link>
            {user? <Link><button onClick={logOutUser}>Log Out</button></Link>:<Link to="/login"><button>Log In</button></Link> }
        </div>
    )

}