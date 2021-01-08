import React from 'react'
import './Forms.scss'

const Forms = () => {



    return (
        <>
            <form action="">
                <div className="form-grp">
                    <input type="text" name='name' required />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-grp">
                    <input type="email" name='email' required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-grp">
                    <textarea name="message" id="" cols="30" rows="3" required></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <input type="submit" className='submit' />
            </form>



        </>
    )
}

export default Forms
