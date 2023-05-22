import head1 from './pics/App.png'
import head2 from './pics/IMG-20220926-WA0027.jpg'
import head3 from './pics/oasis.jpg'

import './Dev.css';

export default function MainBlog(){
    return(
        <div className='row'>
            <div className='col-6 mw'>
            <h3 className='skilldev'>BLOGS</h3>
                <h2 className='whatdev'>My recent blogs</h2>
            </div>
            <div className='col-12 pr flex'>
                <div className='col-4 devblog'>
                    <img className='blogpic' src={head1}></img>
                    <p className='bloghead'>Form Validation in JS</p>
                    <p className='blogp'>In this article, lorem ipsum dorem lorem ipusm dorem lorem ipsum dorem lorem ipsum</p>
                    <div className='tags'>
                        <p className='tag'>#React #JS</p>
                    </div>
                    <button className='readblog'>Read More</button>
                </div>
                <div className='col-4 devblog'>
                    <img className='blogpic' src={head2}></img>
                    <p className='bloghead'>Hooks in React</p>
                    <p className='blogp'>In this article, lorem ipsum dorem lorem ipusm dorem lorem ipsum dorem lorem ipsum</p>
                    <div className='tags'>
                    <p className='tag'>#Hooks #JS</p>
                    </div>
                    <button className='readblog'>Read More</button>
                </div>
                <div className='col-4 devblog'>
                    <img className='blogpic' src={head3}></img>
                    <p className='bloghead'>Props & States</p>
                    <p className='blogp'>In this article, lorem ipsum dorem lorem ipusm dorem lorem ipsum dorem lorem ipsum</p>
                    <div className='tags'>
                    <p className='tag'>#Props #JS</p>
                    </div>
                    <button className='readblog'>Read More</button>
                </div>
            </div>
        </div>
    )
}