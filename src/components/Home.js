import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from "./SideBar";
import Main from "./Main";
import Header from "./Header";
import Skills from "./Skills";
import Projects from './Projects';
import Contact from './Contact';
const Homepage = () => {
  return (
    <div className="flex flex-col h-screen w-screen grow">
      <div className="flex text-white flex-row p-5 justify-between gap-x-2 main-explain">
        <Header />
      </div>
      <div className="flex flex-row grow overflow-hidden">
        <SideBar />
          <Routes>
            <Route path="/Portfolio" element={<Main />} />
            <Route path="/Portfolio/skills" element={<Skills />} />
            <Route path="/Portfolio/projects" element={<Projects />} />
            <Route path='/Portfolio/contact' element={<Contact />} />
          </Routes>
      </div>
    </div>
  );
};

export default Homepage;
