import Header from "./components/Header";
import SideBar from "./components/SideBar";
import RecommedationBar from "./components/RecommendationBar";
import Body from "./components/Body";
import { useState } from "react";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    let bodyCss = darkMode ? "bg-black" : "bg-white";
    bodyCss += " h-screen";

    function toggleDarkmode() {
        setDarkMode(prevState => !prevState);
        console.log(darkMode ? "Dark mode on" : "Dark mode off");
    }

    return (
        <div className={bodyCss}>
            <Header toggle={toggleDarkmode} darkMode={darkMode}/>
            <RecommedationBar darkMode={darkMode}/>
            <SideBar darkMode={darkMode}/>
            <Body darkMode={darkMode}/>
        </div>
    );
}