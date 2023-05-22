import logo from './pics/6.png'

import './Dev.css'

export default function NavBar(){
    return(
        <div className='row'>
            <div className='col-12'>
                    <img className='logo_1' src={logo}></img>
                <div className='navbardev'>
                    <h1 className='home_1'>HOME</h1>
                    <h1 className='about_1'>ABOUT</h1>
                    <h1 className='skills_1'>SKILLS</h1>
                    <h1 className='blog_1'>BLOG</h1>
                    <h1 className='contact_1'>CONTACT</h1>
                </div>
            </div>
        </div>
    )
}