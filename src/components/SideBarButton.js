export default function SideBarButton(props) {
    let { onClick, icon, text, darkMode } = props;
    const sidebarButtonCss =
        `flex text-sm px-2 py-2 w-full rounded-md items-center h-10
        ${darkMode ? "focus:bg-gray-800 hover:bg-gray-900" :
        "focus:bg-gray-300 hover:bg-gray-200"}`;
    let iconsCss = "material-icons mr-5 ";
    
    if (text.length > 17) { text = text.slice(0, 15) + "..."; }

    return (
        <button onClick={onClick} className={sidebarButtonCss}>
            <span className={iconsCss}>{icon}</span>
            <p>{text}</p>
        </button>
    );
}