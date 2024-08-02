import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';
import '../App.css'

const Skills = () => {
  const [per, setPer] = useState(0);
  const skillSetdev = ['HTML', 'CSS', 'ReactJS', 'ExpressJS','NodeJS','Django','Flutter'];
  const skillSetdatabase=['MongoDB', 'MySql'];
  const skillSetprog=['C', 'C++', 'Javascript','Python', 'Java'];
  const skillSetml=['Tensorflow','Keras','Scikit','OpenCV'];
  const percentageDev= [80, 75, 70, 65,50,80,60];
  const percentageDatabase=[70,65];
  const percentageProg=[ 80, 80, 70, 70, 55];
  const percentageML=[60,50,40,50];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPer(per => {
        if (per >= 100) {
          clearInterval(intervalId);
          return per;
        }
        return per + 5;
      });
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-wrap flex-row gap-x-10 gap-y-5 justify-center grow mx-10 h-9/10 overflow-auto hide-scrollbar md:overflow-hidden md:h-fit">
      <div className='flex text-white justify-center basis-3/4 text-xl'>My Skills</div>
      <div className='flex flex-col gap-y-5 skill-trans delay-1'>
      <div className='text-white flex flex-row justify-center text-lg'>Development</div>
      <div className='flex flex-wrap flex-row text-white justify-center w-full p-2 gap-x-2'>
      {skillSetdev.map((skill, index) => (
        <div key={skill} className="flex flex-col flex-wrap w-fit items-center group">
          <div className="relative  w-12 h-12 mx-4 my-2 md:w-16 md:h-16 md:mx-6 md:my-2">
            <CircularProgressbar
              value={Math.min(percentageDev[index], per)}
              text={`${Math.min(percentageDev[index], per)}%`}
              styles={buildStyles({
                strokeWidth: 2, // Set to a thin width
                textColor: 'transparent', // Hide the default percentage text
                pathColor: '#4caf50',
                trailColor: '#d6d6d6',
                strokeLinecap: 'round'
              })}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/${skill.toLowerCase()}.png`}
                alt={skill}
                className="w-8 h-8 rounded-full opacity-20 group-hover:opacity-60"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xs md:text-sm group-hover:opacity-0">
                {Math.min(percentageDev[index], per)}%
              </div>
            </div>
          </div>
          <div className="text-sm text-white mt-2">{skill}</div>
        </div>
      ))}
      </div>
      </div>

      <div className='flex flex-col gap-y-5 skill-trans delay-2'>
      <div className='text-white flex flex-row justify-center text-lg'>Programming languages</div>
      <div className='flex flex-wrap flex-row text-white justify-center w-full p-2'>
      {skillSetprog.map((skill, index) => (
        <div key={skill} className="flex flex-col flex-wrap w-fit items-center group">
          <div className="relative  w-12 h-12 mx-4 my-2 md:w-16 md:h-16 md:mx-6 md:my-2">
            <CircularProgressbar
              value={Math.min(percentageProg[index], per)}
              text={`${Math.min(percentageProg[index], per)}%`}
              styles={buildStyles({
                strokeWidth: 2, // Set to a thin width
                textColor: 'transparent', // Hide the default percentage text
                pathColor: '#00FFFF',
                trailColor: '#d6d6d6',
                strokeLinecap: 'round'
              })}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/${skill.toLowerCase()}.png`}
                alt={skill}
                className="w-8 h-8 rounded-full opacity-20 group-hover:opacity-60"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xs md:text-sm group-hover:opacity-0">
                {Math.min(percentageProg[index], per)}%
              </div>
            </div>
          </div>
          <div className="text-sm text-white mt-2">{skill}</div>
        </div>
      ))}
      </div>
      </div>

      <div className='flex flex-col gap-y-5 skill-trans delay-3'>
      <div className='text-white flex flex-row justify-center text-lg'>AL and ML frameworks</div>
      <div className='flex flex-wrap flex-row text-white justify-center w-full p-2'>
      {skillSetml.map((skill, index) => (
        <div key={skill} className="flex flex-col flex-wrap w-fit items-center group">
          <div className="relative  w-12 h-12 mx-4 my-2 md:w-16 md:h-16 md:mx-6 md:my-2">
            <CircularProgressbar
              value={Math.min(percentageML[index], per)}
              text={`${Math.min(percentageML[index], per)}%`}
              styles={buildStyles({
                strokeWidth: 2, // Set to a thin width
                textColor: 'transparent', // Hide the default percentage text
                pathColor: '#FF0000',
                trailColor: '#d6d6d6',
                strokeLinecap: 'round'
              })}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/${skill.toLowerCase()}.png`}
                alt={skill}
                className="w-8 h-8 rounded-full opacity-20 group-hover:opacity-60"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xs md:text-sm group-hover:opacity-0">
                {Math.min(percentageML[index], per)}%
              </div>
            </div>
          </div>
          <div className="text-sm text-white mt-2">{skill}</div>
        </div>
      ))}
      </div>
      </div>
      

      <div className='flex flex-col gap-y-5 skill-trans delay-4'>
      <div className='text-white flex flex-row justify-center text-lg'>Database</div>
      <div className='flex flex-wrap flex-row text-white justify-center w-full p-2'>
      {skillSetdatabase.map((skill, index) => (
        <div key={skill} className="flex flex-col flex-wrap w-fit items-center group">
          <div className="relative  w-12 h-12 mx-4 my-2 md:w-16 md:h-16 md:mx-6 md:my-2">
            <CircularProgressbar
              value={Math.min(percentageDatabase[index], per)}
              text={`${Math.min(percentageDatabase[index], per)}%`}
              styles={buildStyles({
                strokeWidth: 2, // Set to a thin width
                textColor: 'transparent', // Hide the default percentage text
                pathColor: '#FFFF00',
                trailColor: '#d6d6d6',
                strokeLinecap: 'round'
              })}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/${skill.toLowerCase()}.png`}
                alt={skill}
                className="w-8 h-8 rounded-full opacity-20 group-hover:opacity-60"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xs md:text-sm group-hover:opacity-0">
                {Math.min(percentageDatabase[index], per)}%
              </div>
            </div>
          </div>
          <div className="text-sm text-white mt-2">{skill}</div>
        </div>
      ))}
      </div>
      </div>
      
    </div>
  );
};

export default Skills;
