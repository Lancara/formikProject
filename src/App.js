import './App.css';
import React from "react";
import AnnouncementSecondContainer from "./components/announcementSecond/announcementSecondContainer";
import AnnouncementFirstContainer from "./components/announcementFirst/announcementFirstContainer";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import DisplayAnnContainer from "./components/DisplayAnnouncement/displayAnnouncementContainer";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route  path="/announcementFirst/"
                            element = {<AnnouncementFirstContainer/>} />
                    <Route  path="/announcementSecond/"
                            element = {<AnnouncementSecondContainer/>} />
                    <Route  path="/displayAnnouncement/"
                            element = {<DisplayAnnContainer/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;



