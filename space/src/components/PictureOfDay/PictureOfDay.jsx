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
            setError(error.response.data)
        }
        
    }, [dispatch])
    return(
        
        <div>
            {pic?(
                <div>
                    <h1>{pic.date}</h1>
                    <h1>{pic.title}</h1>
                    <img src={pic.url} alt="" />
                    <h3>Copyright: {pic.copyright}</h3>
                    <p>{pic.explanation}</p> 
                </div>
            ):(
                <div>
                    Loading...
                </div>
            )}
            
        </div>
    )
}

export default PictureOfDay