import {Link} from "react-router-dom";

export default function Suggestion() {
    return (
        <section className="px-4 py-16 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex mb-4 flex-start">
                    <h3 className="text-2xl font-semibold capitalize">
                        Complete your room <br className=""/>with what we designed
                    </h3>
                </div>
                <div className="flex mb-4 -mx-3 overflow-x-auto">
                    <div className="flex-none px-3" style={{width: 320}}>
                        <div className="relative p-4 pb-8 bg-white rounded-xl">
                            <div className="w-full overflow-hidden rounded-xl card-shadow h-36">
                                <img
                                    src="/images/content/chair-1.png"
                                    alt=""
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>
                            <h5 className="mt-4 text-lg font-semibold">Cangkir Mauttie</h5>
                            <span className="">IDR 89.300.000</span>
                            <Link to="/details" className="stretched-link">
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none px-3" style={{width: 320}}>
                        <div className="relative p-4 pb-8 bg-white rounded-xl">
                            <div className="w-full overflow-hidden rounded-xl card-shadow h-36">
                                <img
                                    src="/images/content/chair-2.png"
                                    alt=""
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>
                            <h5 className="mt-4 text-lg font-semibold">Saman Kakka</h5>
                            <span className="">IDR 14.500.399</span>
                            <Link to="/details" className="stretched-link">
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none px-3" style={{width: 320}}>
                        <div className="relative p-4 pb-8 bg-white rounded-xl">
                            <div className="w-full overflow-hidden rounded-xl card-shadow h-36">
                                <img
                                    src="/images/content/chair-3.png"
                                    alt=""
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>
                            <h5 className="mt-4 text-lg font-semibold">Lino Dino</h5>
                            <span className="">IDR 22.000.000</span>
                            <Link to="/details" className="stretched-link">
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none px-3" style={{width: 320}}>
                        <div className="relative p-4 pb-8 bg-white rounded-xl">
                            <div className="w-full overflow-hidden rounded-xl card-shadow h-36">
                                <img
                                    src="/images/content/chair-1.png"
                                    alt=""
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>
                            <h5 className="mt-4 text-lg font-semibold">Syail Ammeno</h5>
                            <span className="">IDR 6.399.999</span>
                            <Link to="/details" className="stretched-link">
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}