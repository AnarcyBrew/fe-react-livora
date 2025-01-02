import Header from "../parts/Header";
import Hero from "../parts/Hero";
import JustArrived from "../parts/HomePage/JustArrived";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Clients from "../parts/HomePage/Clients";

export default function HomePage() {
    return (
        <>
            <Header/>
            <Hero/>
            <BrowseRoom/>
            <JustArrived/>
            <Clients/>
        </>
    )
}