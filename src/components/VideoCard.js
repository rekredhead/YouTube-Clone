export default function VideoCard(props) {
    let {title, duration, channel_name, isVerified, viewCount,
        time_released, thumbnail_link, pfp_link, link} = props.data;
    let { darkMode } = props;

    let cardCss = `w-[22rem] h-80 cursor-pointer rounded-xl`;
    viewCount = (viewCount > 1000000) ? (viewCount/1000000)+'M' :
        (viewCount > 1000) ? (viewCount/1000)+'K' : viewCount;

    function openVideo() { window.open(link); }
    return (
        <div onClick={openVideo} className={cardCss}>
            <div className="flex relative rounded-xl overflow-hidden">
                <img
                    className="bg-gray-400 text-center h-52 w-full text-white
                    hover:scale-110 transition duration-300 ease-in-out"
                    src={thumbnail_link+'.png'} alt="Video Unavailable"/>
                <div className="flex absolute bg-black text-[0.8rem] font-semibold
                    text-white px-1 bottom-1 right-1 rounded-md">{duration}</div>
            </div>
            <div className="flex pt-2 gap-3">
                <div className="pt-1">
                    <img className="w-9 rounded-full" src={pfp_link+'.png'} alt="?"/>
                </div>
                <div>
                    <div className="max-h-[3.4rem] overflow-hidden pb-1">
                        <h1 className={`${darkMode ? "text-white" : "text-black"}
                            text-base font-semibold`}>{title}</h1>
                    </div>
                    <div
                        className={`${darkMode ? "text-gray-400" : "text-gray-500"}
                            text-[0.85rem] font-semibold`}>
                        <div className="flex items-center">
                            <p className="pr-1">{channel_name}</p>
                            {isVerified && <span className="material-icons text-[0.85rem]">check_circle</span>}
                        </div>
                        <p>{viewCount} views &middot; {time_released} ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}