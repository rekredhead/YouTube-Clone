export default function Header(props) {
    const { toggle, darkMode } = props;
    let textColor = darkMode ? "text-gray-300" : "text-black" ;
    let svgColor = "material-icons " + textColor;

    return (
        <header className={`${darkMode ? "bg-black" : "bg-white"} fixed flex top-0 right-0 left-0 justify-between h-14 z-10 px-2`}>
            <div className="flex items-center">
                <div className="flex items-center justify-center pr-3">
                    <button
                        className = {`flex p-2 rounded-full
                            ${darkMode ? "hover:bg-gray-800 active:bg-gray-700" :
                            "hover:bg-gray-200 active:bg-gray-300"}`}>
                        <span className={svgColor}>menu</span>
                    </button>
                </div>
                <img className="w-9 h-9" src="./images/youtube.svg" alt=""/>
                <p className={`font-bold text-[1.4rem] ${textColor}`}>YouTube</p>
            </div>
            <div className="w-1/3 flex items-center gap-2">
                <div
                    className={`border flex h-10 w-full rounded-full overflow-hidden
                    ${darkMode ? "border-gray-700" : "border-gray-400"}`}>
                    <input
                        className={`w-full px-5
                            ${darkMode ? "bg-black text-gray-300" : "bg-white"}`}
                        placeholder="Search"/>
                    <button
                        className={`flex border-l px-4 items-center
                        ${darkMode ? "bg-gray-800 border-l-gray-700" : "bg-gray-100 border-l-gray-400"}`}>
                        <span className={svgColor}>search</span>
                    </button>
                </div>
                <button className={`flex rounded-full p-1 items-center
                    ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                    <span className={svgColor}>mic</span>
                </button>
            </div>
            <div className="flex px-5 gap-5 items-center">
                <button onClick={toggle}>
                    <span className={svgColor}>dark_mode</span>
                </button>
                <button>
                    <span className={svgColor}>video_call</span>
                </button>
                <button>
                    <span className={svgColor}>notifications</span>
                </button>
                <button className="flex bg-fuchsia-700 rounded-full px-3 py-[0.3rem] mb-1">
                    <p className="text-white">K</p>
                </button>
            </div>
        </header>
    );
}