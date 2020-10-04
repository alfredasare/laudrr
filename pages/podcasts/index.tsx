import NavBar from "../../src/components/navbar/navbar.component";
import Search from "../../src/components/search/search.component";
import PodcastRowList from "../../src/components/podcast-row-list/podcast-row-list.component";


const Podcasts = () => {
    return (
        <>
            <NavBar />
            <Search />
            <PodcastRowList />
        </>
    );
}

export default Podcasts;