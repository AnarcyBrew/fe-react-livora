import Header from "../parts/Header";
import Hero from "../parts/Hero";
import JustArrived from "../parts/HomePage/JustArrived";
import BrowseRoom from "../parts/HomePage/BrowseRoom";

export default function HomePage() {
    return (
        <>
            <Header/>
            <Hero/>
            <BrowseRoom/>
            <JustArrived/>
        </>
    )
}