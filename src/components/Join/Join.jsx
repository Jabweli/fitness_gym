import React from 'react'
import "./join.css"

const Join = () => {
  return (
    <section id="join" className="join">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>ready to</span>
                <span> level up</span>
            </div>

            <div>
                <span>your body</span>
                <span className='stroke-text'> with us?</span>
            </div>
            
        </div>

        <div className="right-j">
            <form>
                <input type="text" name='user_email' placeholder='Enter your email address here'/>

                <button className="btn btn-j">Join now</button>
            </form>
        </div>
    </section>
  )
}

export default Join