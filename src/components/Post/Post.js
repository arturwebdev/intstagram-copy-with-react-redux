import { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delPost, usersSelect } from '../../store/featers/users/usersSlice';

import './Post.css'


import IMAGES from '../../img'
import CommentWrapper from '../CommentWrapper/CommentWrapper'
import { delPostFromAll } from '../../store/featers/posts/postsSlice';

function Post({userName, img, id, comments, about}) {
    const user = useSelector(usersSelect).correntUser
    const dispatch = useDispatch()
    const handlerDelete = useCallback(() => {
        if (user && user.username === userName) {
            dispatch(delPost({ id }))
            console.log('test');
        }
        dispatch(delPostFromAll({ id }))
    })
  return (
      <div className="post">
          <div className="info">
              <div className="user">
                  <div className="profile-pic"><img src={IMAGES.cover3} alt="" /></div>
                  <p className="username">{userName}</p>
              </div>
              <img onClick={handlerDelete} src={IMAGES.option} className="options" alt="" />

          </div>
          <img src={img} className="post-image" alt="" />
          <div className="post-content">
              <div className="reaction-wrapper">
                  <img src={IMAGES.like} className="icon" alt="" />
                  <img src={IMAGES.comment} className="icon" alt="" />
                  <img src={IMAGES.send} className="icon" alt="" />
                  <img src={IMAGES.save} className="save icon" alt="" />
              </div>
              <p className="likes">1,012 likes</p>
              <p className="description"><span>{userName}</span> {about}</p>
              <p className="post-time">2 minutes ago</p>
          </div>
          <CommentWrapper id={id} comments={comments} />
          
      </div>
  )
}

export default memo(Post)