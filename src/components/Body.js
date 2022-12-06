import { useState } from "react";
import VideoCard from "./VideoCard";
import videosData from "../data_files/videosData";

export default function Body(props) {
    const { darkMode } = props;
    const [videos] = useState(videosData);

    const videoElements = videos.map(item => {
        return <VideoCard key={item.id} data={item}/>
    });

    // Add warning when user screen is mobile size

    return (
        <div className="grid 2columns:grid-cols-1 3columns:grid-cols-2
            4columns:grid-cols-3 5columns:grid-cols-4 mt-[8.5rem] ml-80
            mr-24 gap-4 z-0">
            {videoElements}
        </div>
    );
}