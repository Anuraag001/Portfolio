import { Link } from 'react-router-dom';
import '../App.css'
const SideBar=()=>{
    return (<>
    <div className="flex w-1/14 shrink-0 flex-col items-center p-3 gap-y-2 main-explain justify-center">
        <a className=" flex bg-slate-100 w-8 h-8 rounded-full border-2 opacity-20 hover:opacity-90 justify-center items-center" href='https://github.com/Anuraag001'><img className="w-6 h-6 overflow-visible object-fit" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img></a>
        <a className="flex opacity-20 hover:opacity-90 justify-center items-center" href='https://www.instagram.com/anuraagbv1/'><img className="w-6 h-6 overflow-visible object-fit" src={`${process.env.PUBLIC_URL}/instagram.png`} alt="github"></img></a>
        <a className=" flex opacity-20 hover:opacity-90 justify-center items-center" href='https://www.linkedin.com/in/anuraag-bv-34ba8a287/'><img className="w-6 h-6 overflow-visible object-fit" src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="github"></img></a>
    </div>
    </>)
}

export default SideBar;