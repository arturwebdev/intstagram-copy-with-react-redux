import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delPost, usersSelect } from '../../store/featers/users/usersSlice'

import './Single.css'

import IMAGES from '../../img'

function Single() {
    const user = useSelector(usersSelect).correntUser
    const dispatch = useDispatch()
    useEffect(() => {
       console.log(user);
    });
    return (
        <>
        <div>
        <div className="container">
            <div className="profile">
            <div className="profile-image">
                <img style={{width: '200px'}} src={IMAGES.cover3} alt='' />
            </div>
            <div className="profile-user-settings">
                <h1 className="profile-user-name">{user.username}</h1>
                <button className="btn profile-edit-btn">Edit Profile</button>
                <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true" /></button>
            </div>
            <div className="profile-stats">
                <ul>
                <li><span className="profile-stat-count">{user.posts.length}</span> posts</li>
                <li><span className="profile-stat-count">188</span> followers</li>
                <li><span className="profile-stat-count">206</span> following</li>
                </ul>
            </div>
            <div className="profile-bio">
                <p><span className="profile-real-name">{user.name}</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            </div>
            </div>
            {/* End of profile section */}
        </div>
        {/* End of container */}
            <div className="container">
            <div className="gallery">
                
                {
                    user.posts.map(post => (
                        <div key={post.id} className="gallery-item">
                            <img src={post.url} className="gallery-image" alt='' />
                            <div className="gallery-item-info">
                                <b><span onClick={() => dispatch(delPost({id: post.id, obj: post}))} style={{ color: 'white', position: 'absolute', top: '5%', left: '95%' }}>X</span></b>
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span> 56</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span> 2</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
{/* 
                <div className="gallery-item">
                <img src={IMAGES.cover12} className="gallery-image" alt='' />
                <div className="gallery-item-info">
                    <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span> 56</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span> 2</li>
                    </ul>
                </div>
                </div> */}
                
            </div>
            {/* End of gallery */}
            </div>
            {/* End of container */}
        </div>

        </>
    )
}

export default Single