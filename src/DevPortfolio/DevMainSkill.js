import twitter from './pics/twitter.png';
import tiktok from './pics/tiktok.png';
import facebook from './pics/facebook.png';
import whatsapp from './pics/whatsapp.png';
import './Dev.css';

export default function MainAbout(){
    return(
        <div className='row'>
            <div className='col-6 mw'>
                <h3 className='skilldev'>SKILLS</h3>
                <h2 className='whatdev'>What Can I do</h2>
            </div>
            <div className='col-12 sicon flex'>
                <div className='skillbtn'>
                    <img className='iconpic' src={twitter}></img>
                    <h4 className='sk'>HTML5</h4>
                </div>
                <div className='skillbtn'>
                    <img className='iconpic' src={tiktok}></img>
                    <h4 className='sk'>CSS</h4>
                </div>
                <div className='skillbtn'>
                    <img className='iconpic' src={whatsapp}></img>
                    <h4 className='sk'>React</h4>
                </div>
                <div className='skillbtn'>
                    <img className='iconpic' src={facebook}></img>
                    <h4 className='sk'>Django</h4>
                </div>
                <div className='skillbtn'>
                    <img className='iconpic' src={tiktok}></img>
                    <h4 className='sk'>Ruby</h4>
                </div>
            </div>
        </div>
    )
}