import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { usersSelect } from '../../store/featers/users/usersSlice'

import './Navbar.css'

import IMAGES from '../../img'
import { useCallback, useRef } from 'react'
import { searchUserPosts } from '../../store/featers/posts/postsSlice'

export default function Navbar() {
    const user = useSelector(usersSelect).correntUser
    // const searchRef = useRef(null)
    const dispatch = useDispatch()

    

  return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <img src={IMAGES.logo} className="brand-img" alt="" />
              <input onChange={(e) => dispatch(searchUserPosts({text: e.target.value}))} type="text" className="search-box" placeholder="search" /> 
                <div className="nav-items">
                    <Link to={'/'}><img src={IMAGES.home} className="icon" alt="" /></Link>
                    <Link to={user ? 'chat' : '/login/chat'}><img src={IMAGES.messenger} className="icon" alt="" /></Link>
                    <Link to={user ? 'add' : '/login/add'}><img src={IMAGES.add} className="icon" alt="" /></Link>
                    <img src={IMAGES.explore} className="icon" alt="" />
                    <img src={IMAGES.like} className="icon" alt="" />
                    <Link to={user ? 'single' : '/login/single'}><div className="icon user-profile"></div></Link>
                </div>
            </div>
        </nav>
  )
}
