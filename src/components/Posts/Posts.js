import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { postsFatching, selectPosts } from '../../store/featers/posts/postsSlice'
import Post from '../Post/Post'
import './Posts.css'

export default function Posts() {
  
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts).initialData
  const isFatched = useSelector(selectPosts).isFatched
  // console.log(posts);
  useEffect(()=> {
    if(!isFatched){
      dispatch(postsFatching())
    }
  }, [isFatched])
  console.log(posts);
  return (

<section style={{marginTop: '-80px'}} className="main" >
    <div className="wrapper">
        <div className="left-col">
            
            {
            posts.map(el => <Post key={el.id} about={el.about} id={el.id} comments={el.comments} userName={el.userName} img={el.img} />)
            }

           

        </div>
    </div>
</section>

  )
}
