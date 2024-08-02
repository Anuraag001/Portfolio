import { useState, useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
const Main = () => {
    const [show, setShow] = useState(false);
    const [skill, setSkill] = useState('');
    const arr = ['Web Developer', 'Programmer', 'AI Developer', 'Game Enthusiast'];

    useEffect(() => {
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        const skillAnimate = async () => {
            let idx = 0;
            while (true) {
                let s = arr[idx];
                let present = '';
                for (let i = 0; i < s.length; i++) {
                    present += s[i];
                    setSkill(present);
                    await sleep(100);
                }
                await sleep(200);

                for (let i = s.length - 1; i > 0; i--) {
                    present = s.slice(0, i - 1);
                    setSkill(present);
                    await sleep(100);
                }
                await sleep(200);
                setSkill('');
                idx = (idx + 1) % 4;
            }
        };
        skillAnimate();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShow(prevShow => !prevShow);
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
    <div 
        className="relative flex px-5 md:py-5 md:px-5 grow flex-col md:flex-row justify-start  md:justify-around items-center text-white border-slate overflow-hidden w-11/12"
    >
        <div 
            className="absolute inset-y-0 mt-12 bg-cover bg-center opacity-30 w-full md:w-1/2 right-0 -bottom-60 main-image delay-2" 
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/Abg.png)`
            }}
        />
        <div className="relative w-full md:w-2/3 flex flex-col gap-y-2 main-explain delay-1 bg-none justify-center md:justify-start">
            <div className="text-base sm:text-xl md:text-xl px-1">I Am </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-mono">Anuraag Bandaru Venkata</div>
            <div className="flex flex-row text-sm sm:text-base md:text-lg">
                <div className="text-green-200 font-serif">I am a {skill}</div>
                {show ? <div className='text-green-200 text-sm'>|</div> : <></>}
            </div>
            <div className='flex flex-row sm:flex-row gap-x-20 gap-y-2 sm:gap-y-0 sm:gap-x-5 md:gap-x-10 my-4'>
                <Link className='flex w-fit sm:w-28 justify-center bg-yellow-300 rounded box-shadow-all hover:scale-105 duration-300 text-xs sm:text-base lg:text-lg' to='/Portfolio/contact'>Contact Me</Link>
                <a className='flex w-fit sm:w-40 justify-center box-shadow-green bg-green-600 rounded hover:scale-105 duration-300 transition text-xs sm:text-base lg:text-lg' href='https://drive.google.com/file/d/1dIEde_drgDfjM9r-xq0B31HgflEuUfGt/view?usp=drive_link'>Download Resume</a>
            </div>

        </div>
        <div className="relative w-1/3">
            {false &&<img className="overflow-hidden h-40 w-40 rounded-full" src={`${process.env.PUBLIC_URL}/Anuraag.jpg`} alt="Example" />}
        </div>
    </div>
</>

    );
}

export default Main;


/*
<div className='flex flex-row gap-x-10 my-4'>
                    <button className='flex w-28 justify-center outline outline-offset-2 hover:outline-offset-4 hover:bg-yellow-400 outline-yellow-200 bg-yellow-300 rounded'>Contact Me</button>
                    <button className='flex w-40 justify-center outline outline-offset-2 hover:outline-offset-4 hover:bg-green-800 outline-green-200 bg-green-600 rounded'>Download Resume</button>
                    </div>
*/
