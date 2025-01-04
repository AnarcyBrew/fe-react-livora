import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";

export default function Cart() {
    return (
        <>
            <Header theme={ "black" }/>
            <Breadcrumb list={ [
                { url: "/", name: "Home" },
                { url: "/cart", name: "Shopping Cart" }
            ] }/>

            <section className="md:py-16">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <ShoppingCart/>
                        <ShippingDetails/>
                    </div>
                </div>
            </section>

            <Sitemap/>
            <Footer/>
        </>
    )
}