import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
import useAsync from "../helpers/hooks/useAsync";
import {useEffect} from "react";
import fetchData from "../helpers/fetch";
import {useParams} from "react-router-dom";

export default function Details() {

    const { idp } = useParams()

    const { data, run, isLoading } = useAsync()

    useEffect(() => {
        run(fetchData({
            url: `/api/products/${idp}`,
            method: "GET"
        }))
    }, [run]);

    return (
        <>
            <Header theme={"black"}/>
            <Breadcrumb list={[
                {url: "/", name: "Home"},
                {url: "/categories/911", name: "Office Room"},
                {url: "/categories/911/products/1", name: "Details"}
            ]}/>
            <ProductDetails/>
            <Suggestion/>
            <Sitemap/>
            <Footer/>
        </>
    )
}