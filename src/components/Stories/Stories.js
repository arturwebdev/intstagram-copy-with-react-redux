import './Stories.css'

import IMAGES from '../../img'

export default function Stories() {
  return (
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    <div className="status-wrapper">
                        <div className="status-card">
                            <div className="profile-pic"><img src={IMAGES.cover1} alt="" /></div>
                                <p className="username">user_name_1</p>
                            </div>
                        <div className="status-card">
                            <div className="profile-pic"><img src={IMAGES.cover2} alt="" /></div>
                            <p className="username">user_name_2</p>
                        </div>
                        <div className="status-card">
                            <div className="profile-pic"><img src={IMAGES.cover3} alt="" /></div>
                            <p className="username">user_name_3</p>
                        </div>
                        <div className="status-card">
                            <div className="profile-pic"><img src={IMAGES.cover4} alt="" /></div>
                            <p className="username">user_name_4</p>
                        </div>
                        <div className="status-card">
                            <div className="profile-pic"><img src={IMAGES.cover5} alt="" /></div>
                            <p className="username">user_name_5</p>
                        </div>
                        <div className="status-card">
                            <div className="profile-pic"><img src={IMAGES.cover6} alt="" /></div>
                            <p className="username">user_name_6</p>
                        </div>
                        <div className="status-card">
                            <div className="profile-pic"><img src={IMAGES.cover7} alt="" /></div>
                            <p className="username">user_name_7</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
