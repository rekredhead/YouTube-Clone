export default function SideBar() {
    const sidebarButtonCss = "text-[0.6em] py-4 w-full hover:bg-gray-200 focus:bg-gray-100 rounded-md";

    return (
        <div className="fixed flex flex-col top-0 bottom-0 left-0 w-[4.5rem]">
            <div className="flex h-14 w-full items-center justify-center">
                <button className="">
                    <span className="material-icons">menu</span>
                </button>
            </div>
            <div className="p-1">
                <button className={sidebarButtonCss}>
                    <span className="material-icons">home</span>
                    <p>Home</p>
                </button>
            
                <button className={sidebarButtonCss}>
                    <span className="material-icons">explore</span>
                    <p>Explore</p>
                </button>
            
                <button className={sidebarButtonCss}>
                    <span className="material-icons">star</span>
                    <p>Shorts</p>
                </button>
            
                <button className={sidebarButtonCss}>
                    <span className="material-icons">subscriptions</span>
                    <p>Subscriptions</p>
                </button>
                
                <button className={sidebarButtonCss}>
                    <span className="material-icons">video_library</span>
                    <p>Library</p>
                </button>
            </div>
        </div>
    );
}