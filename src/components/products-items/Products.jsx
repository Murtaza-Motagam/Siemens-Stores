import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Footer from '../Footer';
import Search from '../Sub-Components/Search'

const Products = () => {

    // Main API Section Starts From Here......

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;


    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(true)
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }

            return () => {
                componentMounted = false; //eslint-disable-line
            }

        }

        getProducts();


    }, []);

    const Loading = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-3" key={product.id}>
                                <div className="card" aria-hidden="true">
                                    <svg className="bd-placeholder-img card-img-top" width="50px" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                                    <div className="card-body">
                                        <h5 className="card-title placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                        </h5>
                                        <p className="card-text placeholder-glow">
                                            <span className="placeholder col-8"></span>
                                            <span className="placeholder col-8"></span>
                                            <span className="placeholder col-8"></span>
                                            <span className="placeholder col-8"></span>
                                            <span className="placeholder col-8"></span>
                                        </p>
                                        <Link to="/" className="btn btn-primary placeholder col-6"></Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };


    const ShowProducts = () => {
        return (
            <>

                {filter.map((product) => {
                    return (
                        <>
                            <div className="card cursor-pointer mx-auto my-5 card-props">
                                <img src={product.image} className="card-img-top p-5" alt={product.title} height="400px" width="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0 font-fam2 p-0">Product: &nbsp;&nbsp;&nbsp;<span style={{ fontFamily: "Arial" }} className='fw-bold'>{product.title.substring(0, 18)}...</span></h5>
                                    <p className='font-fam2 my-3 fs-5'>Category: {product.category}</p>
                                    <hr style={{
                                        height: "5px",
                                        background: "teal",
                                        margin: "20px 0",
                                        boxShadow: "0px 0px 4px 2px rgba(204,204,204,1)"
                                    }} />


                                    <div className="container-fluid d-flex align-items-center justify-content-between p-0">
                                        <Link to={`/products/${product.id}`} className="button-18    text-decoration-none" role="button">Check Out</Link>
                                        <p className="card-text font-fam3 fw-bold fs-5 text-align-left mb-2">Price: ${product.price}</p>
                                    </div>


                                </div>
                            </div>

                        </>
                    )
                })}
            </>
        );
    };


    return (
        <>


            <div className="container-fluid my-5 d-flex justify-content-around">

                {/* Products COntent */}

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 px-4 mx-auto">
                            <h2 className="pb-2 text-center font-fam2" >Latest Feauture Wearing Collection</h2>
                            <hr className="style13 mb-4"></hr>
                            <br />
                            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav mx-auto">


                                            <div className="dropdown mx-4 mb-4 mt-4">
                                                <button className="btnn success dropdown-toggle font-fam2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Select size
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item fs-5  font-fam10" type="button">Small</button></li>
                                                    <li><button className="dropdown-item fs-5  font-fam10" type="button">Large</button></li>
                                                    <li><button className="dropdown-item fs-5  font-fam10" type="button">X-Large</button></li>
                                                    <li><button className="dropdown-item fs-5  font-fam10" type="button">XX-Large</button></li>
                                                    <li><button className="dropdown-item fs-5  font-fam10" type="button">XXX-Large</button></li>
                                                </ul>
                                            </div>


                                            <div className="dropdown mx-4 mb-4 mt-4">
                                                <button className="btnn info dropdown-toggle font-fam2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Select Brand
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">Nike</button></li>
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">Puma</button></li>
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">Adidas</button></li>
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">Lacoste</button></li>
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">Jack&Jones</button></li>
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">Old Navy</button></li>
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">Us Polo Assn</button></li>
                                                </ul>
                                            </div>


                                            <div className="dropdown mx-4 mt-4 mb-4">
                                                <button className="btnn danger dropdown-toggle font-fam10" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Pricing
                                                </button>
                                                <ul className="dropdown-menu" >
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">$25 - $100</button></li>
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">$100 - $150</button></li>
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">$150 - $200</button></li>
                                                    <li><button className="dropdown-item fs-5 font-fam10" type="button">$200 or Above</button></li>
                                                </ul>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="row my-5">



                            {/* Search Bar Component */}

                            <Search />

                            {loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )



}

export default Products