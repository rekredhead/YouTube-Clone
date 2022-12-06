export default function SideBarButton(props) {
    let { onClick, icon, text } = props;
    const sidebarButtonCss = "flex text-sm px-2 py-2 w-full hover:bg-gray-200 "+
        "focus:bg-gray-300 rounded-md items-center h-10";
    let iconsCss = "material-icons mr-5 ";
    
    if (text.length > 17) { text = text.slice(0, 15) + "..."; }

    return (
        <button onClick={onClick} className={sidebarButtonCss}>
            <span className={iconsCss}>{icon}</span>
            <p>{text}</p>
        </button>
    );
}