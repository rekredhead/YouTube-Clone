import Header from "./components/Header";
import SideBar from "./components/SideBar";
import RecommedationBar from "./components/RecommendationBar";
import Body from "./components/Body";
import { useState } from "react";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    let bodyCss = darkMode ? "bg-black" : "bg-white";
    bodyCss += " pt-1"

    function toggleDarkmode() {
        setDarkMode(prevState => !prevState);
    }

    /**Current Issue
     * Images load well on the remote site (github pages)
     * Images won't load on the live server (vscode)
     */

    return (window.innerWidth > 900) ?
    (
        <div className={bodyCss}>
            <Header toggle={toggleDarkmode} darkMode={darkMode}/>
            <RecommedationBar darkMode={darkMode}/>
            <SideBar darkMode={darkMode}/>
            <Body darkMode={darkMode}/>
        </div>
    ) : (
        <div>There is a reason</div>
    );
    /*
    (
        <h1 className="text-center text-xl font-bold">Sorry! Currently only supports Desktop</h1>
    );
    */
}