export default function SideBarSubscriptionButton(props) {
    let { profile_pic, channel, hasNewVideo } = props.data;

    const sidebarButtonCss = "flex relative text-sm px-2 py-2 w-full hover:bg-gray-200 "+
        "focus:bg-gray-300 rounded-md items-center h-10";
    let iconsCss = "w-7 rounded-full mr-4";

    if (channel.length > 17) { channel = channel.slice(0, 15) + "..."; }

    return (
        <button className={sidebarButtonCss}>
            <img className={iconsCss} src={profile_pic} alt="?"/>
            <p>{channel}</p>
            {hasNewVideo ? <div className="absolute bg-blue-500 w-1 h-1 rounded-full right-3"></div> : ''}
        </button>
    );
}