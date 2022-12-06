import { useState } from "react";
import recommendationsData from "../data_files/recommendationsData";

export default function RecommedationBar(props) {
    const { darkMode } = props;
    const buttonCss =
        `${darkMode ?
        "bg-gray-700 hover:bg-gray-600 text-white focus:bg-white focus:text-black" :
        "bg-gray-100 hover:bg-gray-200 focus:bg-black focus:text-white"}`+
        " px-3 py-1 text-sm rounded-md mx-2 focus:border-none";
    
    const [recommendations] = useState(recommendationsData);
    const recommendationsElements = recommendations.map(item => {
        return <button key={item.id} className={buttonCss}>{item.text}</button>;
    });
    
    return (
        <div className={`${darkMode ? "bg-black": "bg-white"} fixed flex top-14 left-56
            right-0 h-12 items-center justify-center z-10`}>
            {recommendationsElements}
        </div>
    );
}