import React, {useEffect, useRef, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fatchingUsers, logIn, usersSelect } from '../../store/featers/users/usersSlice';
import './LogIn.css'

function LogIn() {
    const { from } = useParams()
    const navigate = useNavigate()
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const users = useSelector(usersSelect)
    useEffect(() => {
        dispatch(fatchingUsers())
    }, []);
    useEffect(() => {
        if (users.correntUser) {
            navigate(`/${from}`)
            // if (from === 'add') {
            //     navigate('/add')
            // } else if (from === 'single') {
            //     navigate('/single')
            // }
            // } else if (from === 'single') {
            //     navigate('/single')
            // }
        }
    })
    const hendlerSubmit = useCallback((e)=> {
        e.preventDefault()
        dispatch(logIn({
            username: formRef.current[0].value,
            password: formRef.current[1].value
        }))
        formRef.current[0].value = ''
        formRef.current[1].value = ''

        
    },[])
  return (
      <div id="wrapper">
          <div className="main-content">
              <div className="header">
                  <img src="https://i.imgur.com/zqpwkLQ.png" alt='' />
              </div>
              <div className="l-part">
                <form onSubmit={hendlerSubmit} ref={formRef}>
                  <input type="text" placeholder="Username" className="input-1" />
                  <input type="password" placeholder="Password" className="input-2" />
                  <input type="submit" value="Log in" className="btn" />
                </form>
              </div>
          </div>
      </div>

  )
}

export default LogIn