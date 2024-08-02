import '../App.css';

const Projects = () => {

  return (
    <div className="flex flex-row flex-wrap p-2 gap-5 justify-center overflow-auto hide-scrollbar text-white" style={{height:'90%'}}>
      <div className="flex flex-col w-full h-fit lg:w-1/4 lg:h-1/2 bg-blue-950 p-5 gap-y-5 hover:scale-105 transition rounded main-explain delay-1 justify-between">
      <div className="flex flex-row justify-between px-2">
      <a href='https://github.com/Anuraag001/ytally'><img className="w-6 h-6 overflow-visible object-fit opacity-20 hover:opacity-70" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img></a>
      </div>
      <div className="text-xl font-mono font-bold">Ytally</div>
      <div className='font-serif'>A website made where content creators can segregate authority for access and edit seperately for various
      videos and providing better safety and security</div>
      <div className="flex flex-row gap-2 text-gray-600 text-xs md:text-base">
        <div>Youtube API</div><div>React JS</div><div>Express JS</div><div> MongoDB</div>
      </div>
      </div>

      <div className="flex flex-col w-full h-fit lg:w-1/4 lg:h-1/2 bg-blue-950 p-5 gap-y-5 hover:scale-105 transition rounded main-explain delay-1 justify-between">
      <div className="flex flex-row justify-between px-2">
      <img src={`${process.env.PUBLIC_URL}/web.png`} className='object-fit h-8 w-8 opacity-40' alt="github"></img>
      <a href='https://github.com/Anuraag001/HackAI_230523'><img className="w-6 h-6 overflow-visible object-fit opacity-20 hover:opacity-70" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img></a>
      </div>
      <div className="text-xl font-mono font-bold">Convert notify</div>
      <div className='font-serif'>A Foreign currency exchange Notifier where agents send mail when currency out of threshold through mail.</div>
      <div className="flex flex-row gap-2 text-gray-600">
        <div>Uagents</div><div>Django</div><div>Rapid API</div>
      </div>
      </div>

      <div className="flex flex-col w-full h-fit lg:w-1/4 lg:h-1/2 bg-blue-950 p-5 gap-y-5 hover:scale-105 transition rounded main-explain delay-1 justify-between">
      <div className="flex flex-row justify-between px-2">
      <img src={`${process.env.PUBLIC_URL}/ai.png`} className='object-fit h-8 w-8 opacity-40' alt="github"></img>
      <a href='https://github.com/Anuraag001/Hand_Cricket_mediapipe'><img className="w-6 h-6 overflow-visible object-fit opacity-20 hover:opacity-70" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img></a>
      </div>
      <div className="text-xl font-mono font-bold">Hand cricket game</div>
      <div className='font-serif'>Personally made a game which is made using computer vision using Python which recognises hand gestures from 1 to 5 including toss and 2 innings.</div>
      <div className="flex flex-row gap-2 text-gray-600">
      <div>OpenCV</div><div>Mediapipe</div><div>Python</div>
      </div>
      </div>

      <div className="flex flex-col w-full h-fit lg:w-1/4 lg:h-1/2 bg-blue-950 p-5 gap-y-5 hover:scale-105 transition rounded main-explain delay-2 justify-between">
      <div className="flex flex-row justify-between px-2">
      <img src={`${process.env.PUBLIC_URL}/web.png`} className='object-fit h-8 w-8 opacity-40' alt="github"></img>
      <a href='https://github.com/Anuraag001/Tuneblaze_WEB'><img className="w-6 h-6 overflow-visible object-fit opacity-20 hover:opacity-70" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img></a>
      </div>
      <div className="text-xl font-mono font-bold">Tuneblaze</div>
      <div className='font-serif'>Personally developed a website for users to listen music and make playlists from wide range of options such as genre,language,etc.. using Spotify API.</div>
      <div className="flex flex-row gap-2 text-gray-600">
      <div>Django</div><div>Spotify API</div>
      </div>
      </div>

      <div className="flex flex-col w-full h-fit lg:w-1/4 lg:h-1/2 bg-blue-950 p-5 gap-y-5 hover:scale-105 transition rounded main-explain delay-2 justify-between">
      <div className="flex flex-row justify-between px-2">
      <img src={`${process.env.PUBLIC_URL}/ai.png`} className='object-fit h-8 w-8 opacity-40' alt="github"></img>
      <a href='https://github.com/Anuraag001/Quizogen'><img className="w-6 h-6 overflow-visible object-fit opacity-20 hover:opacity-70" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img></a>
      </div>
      <div className="text-xl font-mono font-bold">Quizogen</div>
      <div className='font-serif'>Personally made a website which takes paragraph as input and generates questions with answers as a Quiz.</div>
      <div className="flex flex-row gap-2 text-gray-600">
      <div>Django</div><div>Hugging face</div><div>Spacy</div>
      </div>
      </div>

      <div className="flex flex-col w-full h-fit lg:w-1/4 lg:h-1/2 bg-blue-950 p-5 gap-y-5 hover:scale-105 transition rounded main-explain delay-2 justify-between">
      <div className="flex flex-row justify-between px-2">
      <img src={`${process.env.PUBLIC_URL}/web.png`} className='object-fit h-8 w-8 opacity-40' alt="github"></img>
      <a href='https://github.com/Anuraag001/Eventizer'><img className="w-6 h-6 overflow-visible object-fit opacity-20 hover:opacity-70" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img></a>
      </div>
      <div className="text-xl font-mono font-bold">Eventizer</div>
      <div className='font-serif'>Personally developed a website for Organisers to schedule events and acquire necessary infrastructure online where participants can register for various events.</div>
      <div className="flex flex-row gap-2 text-gray-600">
        <div>Django</div>
      </div>
      </div>

      <div className="flex flex-col w-full h-fit lg:w-1/4 lg:h-1/2  bg-blue-950 p-5 gap-y-5 hover:scale-105 transition rounded main-explain delay-3 justify-center">
      <div className="flex flex-row justify-between px-2">
      <img src={`${process.env.PUBLIC_URL}/web.png`} className='object-fit h-8 w-8 opacity-40' alt="github"></img>
      <a href='https://github.com/Anuraag001/Maitri'><img className="w-6 h-6 overflow-visible object-fit opacity-20 hover:opacity-70" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img></a>
      </div>
      <div className="text-xl font-mono font-bold">Maitri</div>
      <div className='font-serif'>Contributed to the development of a social interactive website developed for the students to write blogs, text messages, chat anonymously, have academic forums and video calling facilities.</div>
      <div className="flex flex-row gap-2 text-gray-600">
        <div>Ruby on rails</div>
      </div>
      </div>

      <div className="flex flex-col w-full h-fit lg:w-1/4 lg:h-1/2 bg-blue-950 p-5 gap-y-5 hover:scale-105 transition rounded main-explain delay-3 justify-between">
      <div className="flex flex-row justify-between px-2">
      <img src={`${process.env.PUBLIC_URL}/game.png`} className='object-fit h-8 w-8 opacity-40' alt="github"></img>
        <img className="w-6 h-6 overflow-visible object-fit opacity-20 hover:opacity-70" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img>
      </div>
      <div className="text-xl font-mono font-bold">Flappy Bird Game</div>
      <div className='font-serif'>Personally Developed a old classic 2D game which randomly spawns pipes(Obstacles) and calculates the score of the player.</div>
      <div className="flex flex-row gap-2 text-gray-600">
        <div>Unity Game Engine</div>
        <div>C#</div>
      </div>
      </div>

      <div className="flex flex-col w-full h-fit lg:w-1/4 lg:h-1/2 bg-blue-950 p-5 gap-y-5 hover:scale-105 transition rounded main-explain delay-3 justify-between">
      <div className="flex flex-row justify-between px-2">
      <img src={`${process.env.PUBLIC_URL}/web.png`} className='object-fit h-8 w-8 opacity-40' alt="github"></img>
      <a href='https://github.com/helios2003/OS-Mini-Simulator'><img className="w-6 h-6 overflow-visible object-fit opacity-20 hover:opacity-70" src={`${process.env.PUBLIC_URL}/github.png`} alt="github"></img></a>
      </div>
      <div className="text-xl font-mono font-bold">OS simulator</div>
      <div className='font-serif'>Contributed to the development of a Operating System simulator website which explains how various parts of OS are handled.</div>
      <div className="flex flex-row gap-2 text-gray-600">
        <div>HTML</div><div>CSS</div><div>JS</div>
      </div>
      </div>

    </div>
  );
}

export default Projects;
//translate-y-11 -translate-x-5
//<div className="flex flex-row rounded-full bg-white h-2 w-2">