import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPictureOfDay } from "../../redux/actions"




const PictureOfDay = () => {
    
    const dispatch = useDispatch()
    const pic = useSelector(state => state.picOfDay)
    const [error, setError] = useState()
    useEffect(() => {
        try {
            dispatch(getPictureOfDay())
        } catch (error) {
            setError(error.response)
        }
        
    })
    return(
        <div>
            <h1>{pic.date}</h1>
            <h1>{pic.title}</h1>
            <img src={pic.url} alt="" />
            <p>{pic.explanation}</p>
        </div>
    )
}

export default PictureOfDay