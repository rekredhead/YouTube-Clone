import { useState } from "react";
import recommendationsData from "./recommendationsData";

export default function RecommedationBar() {
    const buttonCss = "bg-gray-100 px-3 py-1 text-sm rounded-md"+
        " mx-2 hover:bg-gray-200 focus:bg-black focus:text-white focus:border-none";
    
    const [recommendations] = useState(recommendationsData);
    const recommendationsElements = recommendations.map(item => {
        return <button key={item.id} className={buttonCss}>{item.text}</button>;
    });
    
    return (
        <div className="bg-white fixed flex top-14 left-[4.5rem]
            right-0 h-12 items-center justify-center z-10">
            {recommendationsElements}
        </div>
    );
}