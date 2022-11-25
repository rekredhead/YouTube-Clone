export default function VideoCard(props) {
    let {title, duration, channel_name, isVerified, viewCount,
        time_released, thumbnail_link, pfp_link, link} = props.data;

    viewCount = (viewCount > 1000000) ? (viewCount/1000000)+'M' :
        (viewCount > 1000) ? (viewCount/1000)+'K' : viewCount;

    function openVideo() { window.open(link); }
    return (
        <div onClick={openVideo} className="w-[22rem] h-80 cursor-pointer hover:bg-gray-100 rounded-xl">
            <div className="flex relative rounded-xl overflow-hidden">
                <img className="h-52 w-full" src={thumbnail_link+'.png'} alt="Video Unavailable"/>
                <div className="flex absolute bg-black text-[0.8rem] font-semibold
                    text-white px-1 bottom-1 right-1 rounded-md">{duration}</div>
            </div>
            <div className="flex pt-2 gap-3">
                <div className="pt-1">
                    <img className="w-9 rounded-full" src={pfp_link+'.png'} alt="?"/>
                </div>
                <div>
                    <div className="max-h-[3.4rem] overflow-hidden pb-1">
                        <h1 className="text-base font-semibold">{title}</h1>
                    </div>
                    <div className="text-[0.84rem] text-gray-600">
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