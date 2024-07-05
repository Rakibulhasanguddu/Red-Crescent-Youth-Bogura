import { Helmet } from "react-helmet";
import Bg from "../Component/Bg";
import Content from "../Component/content";
import Member from "../Component/Member";
import Swiper from "../Component/Swiper";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home</title>
        
    </Helmet>
            <Bg></Bg>
            <Content></Content>
            <Swiper></Swiper>
            <Member></Member>
            
        </div>
    );
};

export default Home;