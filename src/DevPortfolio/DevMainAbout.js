import devpic from './pics/IMG_1774.JPG'

import './Dev.css';

export default function MainAbout(){
    return(
        <div className='row'>
            <div className='col-6'>
                <h3 className='aboutdev'>ABOUT</h3>
                <h2 className='whodev'>Who I'm I?</h2>
                <p className='pdev'>I am a certified full stack developer with a passion for building innovative and impactful applications. My expertise lies in utilizing HTML, CSS, JavaScript, Jest, React, Nextjs, Postgresql, Ruby, Rspec, and Rails to bring ideas to life. With a certification from Moringa School and Microverse, I have honed my skills and gained valuable experience in software development. I am always eager to learn and grow, and I thrive when working with a team of diverse individuals from around the world. I believe that collaboration is key to creating amazing products, and I am committed to constantly improving my skills and contributing to the development community.</p>
            </div>
            <div className='col-6 mw'>
                <img className='aboutpic' src={devpic}></img>
            </div>
        </div>
    )
}