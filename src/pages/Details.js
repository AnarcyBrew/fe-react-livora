import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function Details() {
    return (
        <>
            <Header theme={"black"}/>
            <Breadcrumb list={[
                {url: "/", name: "Home"},
                {url: "/categories/911", name: "Office Room"},
                {url: "/categories/911/products/1", name: "Details"}
            ]}/>
            <Sitemap/>
            <Footer/>
        </>
    )
}