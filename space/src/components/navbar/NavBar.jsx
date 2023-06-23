

import { Link } from "react-router-dom"


export default function NavBar () {

    let user = null

    try {
        user = JSON.parse(localStorage.getItem("user"));
      } catch (error) {
        user = null
      }
  

    
    return (

        <div>

            <Link to="/marsrover"><button>Mars Rover images</button></Link>
            <Link to="/seeyoufromspace"><button>See your location from space </button></Link>
            <Link to= "/pictureofday"><button>Nasa Picture of the dat</button></Link>
            <Link to="/news"><button>Spaceflight news</button></Link>
        </div>
    )





}