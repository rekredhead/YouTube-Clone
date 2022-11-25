export default function SideBarButton(props) {
    const sidebarButtonCss = "flex text-sm px-2 py-2 w-full hover:bg-gray-200 "+
        "focus:bg-gray-300 rounded-md items-center";
    const iconsCss = "material-icons mr-6";
    const { icon, text } = props;

    return (
        <button className={sidebarButtonCss}>
            <span className={iconsCss}>{icon}</span>
            <p>{text}</p>
        </button>
    );
}