import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

import { getPosts } from "../../redux/actions"
import NewsCard from "./newsCard"

export default function News(){

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    const [offset, setOffset] = useState(0)
   
    useEffect(() => {
        dispatch(getPosts(offset))
    }, [dispatch])

    function handlenextpage()  {
        
        setOffset(offset + 10)
        dispatch(getPosts(offset))
    }
    function handlePreviousPage(){
        if (offset >= 10){
            setOffset(offset - 10)
            dispatch(getPosts(offset))
        }
    }
    return(
        <div>
            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handlenextpage}>Next</button>
            
            {posts.map(post => {
                return (
                    <NewsCard
                        key = {post.id}
                        link = {post.url}
                        title = {post.title}
                        imgsrc = {post.image_url}
                        summary = {post.summary}
                    ></NewsCard>
                )
            })}
        </div>
    )
}

