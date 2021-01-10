import React from 'react'
import './Forms.scss'

const Forms = () => {



    return (
        <>
            <div className="contact container">
                <div className="box text">
                    <h2>Let's <br /> get in touch</h2>
                </div>
                <div className="box contact-form">
                    <form action="" autoComplete='false'>
                        <div className="form-grp">
                            <input type="text" name='name' required autoComplete='off' />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-grp">
                            <input type="email" name='email' required autoComplete='off' />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-grp">
                            <textarea name="message" id="" cols="30" rows="3" required autoComplete='off'></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button type='submit'>submit</button>
                    </form>
                </div>

            </div>



        </>
    )
}

export default Forms
