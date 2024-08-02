import { Link } from 'react-router-dom';
import '../App.css'
const Header=()=>{
    return (<>
    <div className='flex flex-row gap-x-2 items-center'>
        <img src={`${process.env.PUBLIC_URL}/Anuraag.jpg`} className='object-fit h-8 w-4 md:h-8 w-8 rounded-full'></img>
        <div className='hidden md:block'>Portfolio</div>
    </div>
    <div className='flex flex-row gap-x-8 py-1 md:p-0'>
        <Link to="/Portfolio" className='link-underline text-sm md:text-base'>Main</Link>
        <Link to="/Portfolio/skills" className='link-underline text-sm md:text-base'>Skills</Link>
        <Link to="/Portfolio/projects" className='link-underline text-sm md:text-base'>Projects</Link>
        <div>
        </div>
    </div>
    <Link to='/Portfolio/contact' className='link-underline text-sm md:text-base py-1 md:p-0'>Lets talk</Link>
    </>);
}

export default Header;