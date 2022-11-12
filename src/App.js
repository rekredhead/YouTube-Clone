import Header from "./components/Header";
import SideBar from "./components/SideBar";
import RecommedationBar from "./components/RecommendationBar";
import Body from "./components/Body";

export default function App() {
    return (
        <div className="bg-white h-screen">
            <Header/>
            <RecommedationBar/>
            <SideBar/>
            <Body />
        </div>
    );
}