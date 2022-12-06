import SideBarButton from "./SideBarButton";
import SideBarSubscriptionButton from "./SideBarSubscriptionButton";
import playlistData from "../data_files/playlistData";
import subscriptionData from "../data_files/subscriptionData";
import { useState } from "react";

export default function SideBar(props) {
    const { darkMode } = props;

    let sideBarSectionsCss = "border px-2 py-2 ";
    sideBarSectionsCss += darkMode ? "border-black border-b-gray-700 text-gray-200" :
        "border-white border-b-gray-300";

    const footerText = "text-[0.78rem] text-justify font-semibold mb-2";
    const sectionHeadingsCss = "mb-2";

    const [playlists] = useState(playlistData);
    const [subscriptions] = useState(subscriptionData);
    const [showPlaylists, setShowPlaylists] = useState(false);
    
    const playlistElements = playlists.map(item => {
        return <SideBarButton darkMode={darkMode} key={item.id} icon="playlist_play" text={item.title}/>
    });
    const subscriptionElements = subscriptions.map(item => {
        return <SideBarSubscriptionButton darkMode={darkMode} key={item.id} data={item}/>
    });

    function toggleShowPlaylists() { setShowPlaylists(prevState => !prevState); }

    return (
        <div className="fixed flex flex-col top-14 bottom-0 left-0 w-56 overflow-scroll">
            <div className={sideBarSectionsCss}>
                <SideBarButton darkMode={darkMode} icon="home" text="Home"/>
                <SideBarButton darkMode={darkMode} icon="star" text="Shorts"/>
                <SideBarButton darkMode={darkMode} icon="subscriptions" text="Subscriptions"/>
            </div>
            <div className={sideBarSectionsCss}>
                <SideBarButton darkMode={darkMode} icon="video_library" text="Library"/>
                <SideBarButton darkMode={darkMode} icon="history" text="History"/>
                <SideBarButton darkMode={darkMode} icon="schedule" text="Watch Later"/>
                <SideBarButton darkMode={darkMode} icon="thumb_up" text="Liked Videos"/>
                {showPlaylists ? playlistElements : ''}
                <SideBarButton
                    onClick={toggleShowPlaylists}
                    darkMode={darkMode}
                    icon={showPlaylists ? "expand_less" : "expand_more"}
                    text={showPlaylists ? "Show less" : "Show more"}/>
            </div>
            <div className={sideBarSectionsCss}>
                <h1 className={sectionHeadingsCss}>Subscriptions</h1>
                {subscriptionElements}
            </div>
            <div className={sideBarSectionsCss}>
                <h1 className={sectionHeadingsCss}>Explore</h1>
                <SideBarButton icon="subscriptions" text="Subscriptions"/>
            </div>
            <div className={sideBarSectionsCss}>
                <h1 className={sectionHeadingsCss}>More from YouTube</h1>
                <SideBarButton darkMode={darkMode} icon="subscriptions" text="Subscriptions"/>
            </div>
            <div className={sideBarSectionsCss}>
                <SideBarButton darkMode={darkMode} icon="settings" text="Settings"/>
                <SideBarButton darkMode={darkMode} icon="flag" text="Report history"/>
                <SideBarButton darkMode={darkMode} icon="help" text="Help"/>
                <SideBarButton darkMode={darkMode} icon="sms_failed" text="Send feedback"/>
            </div>
            <footer className={sideBarSectionsCss + " px-[1.1rem] text-gray-500"}>
                <p className={footerText}>
                    About Press Copyright Contact us Creators Advertise Developers
                </p>
                <p className={footerText}>
                    Terms Privacy Policy & Safety How YouTube works Test new features
                </p>
                <p className="text-xs">
                    &copy; 2022 Google LLC
                </p>
            </footer>
        </div>
    );
}