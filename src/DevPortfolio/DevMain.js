import DevMainHead from './DevMainHead';
import DevMainBtn from './DevMainBtn';
import DevMainAbout from './DevMainAbout';
import DevMainSkill from './DevMainSkill';
import DevMainProjects from './DevMainProject';
import DevMainBlog from './DevMainBlog';
import DevMainContact from './DevMainContact';

import './Dev.css';

export default function Main(){
    return(
        <>
        <DevMainHead/>
        <DevMainBtn/>
        <DevMainAbout/>
        <DevMainSkill />
        <DevMainProjects/>
        <DevMainBlog/>
        <DevMainContact/>
        </>
    )
}