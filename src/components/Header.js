export default function Header() {
    return (
        <header className="bg-white fixed flex top-0 right-0 left-[4.5rem] justify-between h-14 z-10">
            <div className="flex items-center">
                <img className="w-9 h-9" src="./images/youtube.svg" alt=""/>
                <p className="font-bold text-[1.4rem]">YouTube</p>
            </div>
            <div className="w-1/3 flex items-center gap-2">
                <div className="border border-gray-400 flex h-10 w-full rounded-full overflow-hidden">
                    <input className="w-full px-5" placeholder="Search"/>
                    <button className="flex bg-gray-100 border-l border-gray-400 px-4 items-center">
                        <span className="material-icons">search</span>
                    </button>
                </div>
                <button className="flex bg-gray-200 rounded-full p-1 items-center">
                    <span className="material-icons">mic</span>
                </button>
            </div>
            <div className="flex px-5 gap-5 items-center">
                <button>
                    <span className="material-icons">dark_mode</span>
                </button>
                <button>
                    <span className="material-icons">video_call</span>
                </button>
                <button>
                    <span className="material-icons">notifications</span>
                </button>
                <button className="bg-fuchsia-700 rounded-full w-8 h-8">
                    <p className="text-white">K</p>
                </button>
            </div>
        </header>
    );
}