import ppic1 from './pics/App.png';
import ppic2 from './pics/Portfolio.png';


import './Dev.css';

export default function MainProjects(){
    return(
        <div className='row'>
            <div className='col-7 mw'>
            <h3 className='skilldev'>PROJECTS</h3>
                <h2 className='whatdev'>Browse my projects</h2>
            </div>
            <div className='col-12 pr'>
                <div className='col-6 mw'>
                <a href='https://bit.ly/ivoryafrica'><img className='ppic' src={ppic1}></img></a>
                </div>
                <div className='col-6 mw'>
                <a href='https://bit.ly/tendengo'><img className='ppic' src={ppic2}></img></a>
                </div>
            </div>
            <div className='col-12 center'>
            <a href='https://github.com/CalicanX'><button className='devmore'>See all my projects</button></a>
            </div>
        </div>
    )
}