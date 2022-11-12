import { useState } from "react";
import VideoCard from "./VideoCard";
import videosData from "./videosData";

export default function Body() {
    const [videos] = useState(videosData);

    const videoElements = videos.map(item => {
        return <VideoCard key={item.id} data={item}/>
    });

    return (
        <div className="grid 2columns:grid-cols-2 3columns:grid-cols-3 4columns:grid-cols-4 5columns:grid-cols-5
            mt-[8.5rem] ml-24 mr-5 gap-4 z-0">
            {videoElements}
        </div>
    );
}