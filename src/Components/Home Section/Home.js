import NavBar from '../Nav/Nav';
import Intro from './Intro/Intro';
import Latest from './The Latest/Latest';
import LatestArticles from './Latest Articles/LatestArticles';
import LatestStories from './Latest Stories/LatestStories';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <>
            <NavBar />
            <Intro />
            <Latest />
            <LatestArticles />
            <LatestStories />
            <Footer />
        </>

    );
}

export default Home;
