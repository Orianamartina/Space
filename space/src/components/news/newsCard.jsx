import { Link } from "react-router-dom"



export default function NewsCard(props){
    return(
        <div>
           <Link to={props.link}>
                <h1>{props.title}</h1>
           </Link>
           <img src={props.imgsrc} alt="" />
           <p>{props.summary}</p>

        </div>
    )
}