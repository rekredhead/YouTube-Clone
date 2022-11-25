import SideBarButton from "./SideBarButton";

export default function SideBar() {
    const sideBarSectionsCss = "border border-b-gray-300 px-2 py-2";
    const footerText = "text-[0.78rem] text-justify font-semibold mb-2";

    return (
        <div className="fixed flex flex-col top-14 bottom-0 left-0 w-56 overflow-scroll">
            <div className={sideBarSectionsCss}>
                <SideBarButton icon="home" text="Home"/>
                <SideBarButton icon="star" text="Shorts"/>
                <SideBarButton icon="subscriptions" text="Subscriptions"/>
            </div>
            <div className={sideBarSectionsCss}>
                <SideBarButton icon="video_library" text="Library"/>
                <SideBarButton icon="history" text="History"/>
                <SideBarButton icon="schedule" text="Watch Later"/>
                <SideBarButton icon="thumb_up" text="Liked Videos"/>
                <SideBarButton icon="expand_more" text="Show more"/>
            </div>
            <div className={sideBarSectionsCss}>
                <h1>Subscriptions</h1>
                <SideBarButton icon="subscriptions" text="Subscriptions"/>
            </div>
            <div className={sideBarSectionsCss}>
                <h1>Explore</h1>
                <SideBarButton icon="subscriptions" text="Subscriptions"/>
            </div>
            <div className={sideBarSectionsCss}>
                <h1>More from YouTube</h1>
                <SideBarButton icon="subscriptions" text="Subscriptions"/>
            </div>
            <div className={sideBarSectionsCss}>
                <SideBarButton icon="settings" text="Settings"/>
                <SideBarButton icon="flag" text="Report history"/>
                <SideBarButton icon="help" text="Help"/>
                <SideBarButton icon="sms_failed" text="Send feedback"/>
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