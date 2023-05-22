import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Product = () => {


    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }

        getProducts();
    }, [id])

    const Loading = () => {
        return (
            <>
                <div id="mainLoader">
                    <div className="spinner-border" id="loader-1" role="status" >
                    </div>
                    <p className="elem-Color">Loading...</p>
                </div>
            </>
        );
    }

    const ShowProduct = () => {

        return (
            <>
                {/* Image Container */}
                <div className="col-md-5 mx-auto my-2 px-5">
                    <img src={product.image} alt="" height="500px" width="500px" className="p-5 my-5" />
                </div>

                {/* Detail Container */}
                <div className="col-md-6 mx-auto my-5 px-5" >
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <p className=" font-fam2 fs-4 my-3">Ratings:  &#9733; &#9733; &#9733; &#9733;</p>
                    <h1 className="display-5 font-fam5">{product.title}</h1>

                    <h3 className="display-6 my-4 font-fam6 px-2">Price: $ {product.price}/-</h3>
                    <p className=" font-fam2 fs-4 my-3 px-2">Description: </p>
                    <p className=" font-fam10 fs-4 my-3 px-2">{product.description}</p>
                    <div className="buttons mt-3 d-flex w-75">
                        <Link to={`/products/${product.id}/paymentgateway`} className="button-66 px-5 text-decoration-none text-white me-2">Buy now</Link>
                        <button className="button-34 btn-bg-4 px-5 me-2">Add to Cart</button>
                    </div>
                </div>
                <br />
            </>
        );
    };


    const ShowProduct2 = () => {

        return (
            <>
                <div className="col-md-8">
                    <h3 className='my-3 font-fam3'>Available Offers: </h3>
                    <Link to="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <img src={require('../../images/sale-tag.png')} alt="saleTag" className="rounded-circle sale-image" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0"><span className='fw-bolder'>Special Price</span> Get a flat &#x20B9; 359 Discount T&C</h6>
                                <p className="mb-0 opacity-75">Credit Card of SBI Provide 20% off on Particular Order.</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <img src={require('../../images/sale-tag.png')} alt="saleTag" className="rounded-circle sale-image" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0"><span className='fw-bolder'>Bank Offer</span> 10% off on DBS Bank Debit and Credit Card  Transaction upto &#x20B9;750.</h6>
                                <p className="mb-0 opacity-75">On Orders of &#x20B9;2000 and above with T&C.</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <img src={require('../../images/sale-tag.png')} alt="saleTag" className="rounded-circle sale-image" />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0"><span className='fw-bolder'>Bank Offer</span> 10% off on IDBI Bank Debit and Credit Card  Transaction upto &#x20B9;500.</h6>
                                <p className="mb-0 opacity-75">On Orders of &#x20B9;1500 and above with T&C.</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-5 col-lg-4 order-md-last my-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3 text-center">
                        <span className="text-primary ">Highlight Of the Product</span>
                    </h4>
                    <ul className="list-group mb-3 my-4">
                        <li className="list-group-item d-flex justify-content-between lh-sm" >
                            <div>
                                <h6 className="my-0 px-2">{product.title}</h6>
                            </div>
                            <span className=" font-fam3 text-dark pl-2" id="p1">${product.price}/-</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm" >
                            <div>
                                <h6 className="my-0">Applied Offer</h6>
                            </div>
                            <span className=" font-fam3 text-dark" id="p2">$0/-</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light" >
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>Payment Gateway</small>
                            </div>
                            <span className="text-success font-fam3 text-dark" id="p3">$5/-</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between" >
                            <span>Total (USD)</span>
                            <strong id="final_p font-fam3 text-dark">${product.price + 5}/-</strong>
                        </li>
                    </ul>
                </div>
            </>

        );
    };



    return (
        <>


            <div className="container my-5">
                <h2 className="pb-2 text-left font-fam2" >Product Details: </h2>
                <hr className="style13 mb-4"></hr>
            </div>
            <div className="container-fluid my-5">

                <div className="row px-5" >
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
                <hr />
            </div>
            <div className="container my-5" >

                <div className="row">
                    <ShowProduct2 />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Product
