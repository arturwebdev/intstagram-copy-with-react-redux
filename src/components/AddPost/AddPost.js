import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPostInAll } from '../../store/featers/posts/postsSlice'
import { addPost, usersSelect } from '../../store/featers/users/usersSlice'

function AddPost() {
  const addFormRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(usersSelect).correntUser

  return (
    <div style={{textAlign: 'center'}}>
        <br/><br/><br/><br/>
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log(addFormRef.current[0].value);
          console.log(addFormRef.current[1].value);

          if (addFormRef.current[0].value.trim()) {
            let id = new Date().getTime().toString()
            dispatch(addPost({
              id: id,
              img: addFormRef.current[0].value
            }))
            dispatch(addPostInAll({
              id: id,
              img: addFormRef.current[0].value,
              about: addFormRef.current[1].value,
              userName: user.username
            }))
            navigate('/')
          }

          addFormRef.current[0].value = ''
          addFormRef.current[1].value = ''
        }} ref={addFormRef}>
            <input type="text" placeholder='img' /><br /><br/>
            <input type="text" placeholder='comment' /><br/><br/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddPost