import devpic from './pics/IMG_1774.JPG'

import './Dev.css';

export default function MainContact(){
    return(
        <div className='row'>
            <div className='col-6 mw'>
                <h3 className='skilldev'>CONTACT</h3>
                <h2 className='whatdev'>Get in touch</h2>
            </div>
            <div className='col-12 inputform'>
                <form>
                    <p className='inputhead m'>FIRST NAME</p>
                    <input className='inputspace' type='text' placeholder='First Name'></input>
                    <p className='inputhead'>LAST NAME</p>
                    <input className='inputspace' type='text' placeholder='Last Name'></input>
                    <p className='inputhead'>EMAIL</p>
                    <input className='inputspace' type='email' placeholder='Email Address'></input>
                    <p className='inputhead'>SUBJECT</p>
                    <input className='inputspace' type='text' placeholder='Subject'></input>
                    <p className='inputhead'>MESSAGE</p>
                    <textarea className='inputspace' type='text' placeholder='Message'></textarea>
                    <div className='center'><button className='submitdevform'>Send Message</button></div>
                </form>
            </div>
            <div className='col-12'>
                    <p className='copyrightdev'>©RabinTY 2023 All rights reserved</p>
                </div>
        </div>
    )
}