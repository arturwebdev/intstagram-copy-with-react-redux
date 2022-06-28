import React, { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import IMAGES from '../../img'
import { addComment } from '../../store/featers/posts/postsSlice'


function CommentWrapper({comments, id}) {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        if (formRef.current[0].value.trim() !== '') {
            dispatch(addComment({ id: id, comment: formRef.current[0].value }))
        }

        formRef.current[0].value = ''
    }, [])
  return (
    <>
        <div style={{paddingTop: 0}} className='post-content'>
            {
                  comments.map(el => <p key={el.id} className="description"><span>{el.name}</span> {el.body}</p>)
            }
        </div>
        <form onSubmit={handleSubmit} ref={formRef} >
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt="" />
                <input type="text" className="comment-box" placeholder="Add a comment" />
                <button className="comment-btn">post</button>
            </div>
        </form>
    </>
  )
}

export default CommentWrapper