import React, { useCallback, useRef } from 'react'
import IMAGES from '../../img'
import { addMessage, selectChat } from '../../store/featers/chat/chatSlice'
import { useSelector, useDispatch } from 'react-redux'


import './Chat.css'
import { usersSelect } from '../../store/featers/users/usersSlice'

function Chat() {
  const chatFormRef = useRef(null)
  const chat = useSelector(selectChat).chat
  const dispatch = useDispatch()
  const user = useSelector(usersSelect).correntUser

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    console.log(chatFormRef.current[0].value);
    dispatch(addMessage({ body: chatFormRef.current[0].value }))
    chatFormRef.current[0].value = ''
  }, [])

  return (
      <section className="chatbox">
  <section className="chat-window">
    {
      chat.map(({id, from, body}) => (
        <article key={id} className={`msg-container msg-${from}`} >
          <div className="msg-box">
            <img className="user-img" id="user-0" src={IMAGES.cover3} alt='' />
            <div className="flr">
              <div className="messages">
                <p className="msg">
                  {body}
                </p>
              </div>
              <span className="timestamp"><span className="username">{from === 'remote' ? 'Bot' : user.username}</span>•<span className="posttime">{new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}</span></span>
            </div>
          </div>
        </article>
      ))
    }
    {/* <article className="msg-container msg-remote" >
      <div className="msg-box">
        <img className="user-img" id="user-0" src={IMAGES.cover3} alt='' />
        <div className="flr">
          <div className="messages">
            <p className="msg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius, neque non tristique tincidunt, mauris nunc efficitur erat, elementum semper justo odio id nisi.
            </p>
          </div>
          <span className="timestamp"><span className="username">Name</span>•<span className="posttime">3 minutes ago</span></span>
        </div>
      </div>
    </article> */}

    {/* <article className="msg-container msg-self" >
      <div className="msg-box">
        <div className="flr">
          <div className="messages">
            <p className="msg">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <span className="timestamp"><span className="username">Name</span>•<span className="posttime">2 minutes ago</span></span>
        </div>
                      <img className="user-img" id="user-0" src={IMAGES.cover3} alt='' />
      </div>
    </article> */}
    
  </section>
      <form ref={chatFormRef} onSubmit={(e) => handleSubmit(e)} className="chat-input">
    <input type="text" autoComplete="on" placeholder="Type a message" />
    <button style={{'cursor': 'pointer'}}>
      <svg style={{width: 24, height: 24}} viewBox="0 0 24 24"><path fill="rgba(0,0,0,.38)" d="M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" /></svg>
    </button>
  </form>
</section>

  )
}

export default Chat