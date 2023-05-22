import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const PaymentGateway = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            const response = await fetch(`https://api.pujakaitem.com/api/products/${id}`);
            setProduct(await response.json());
        }

        getProducts();
    }, [id])

    return (
        <>

            <div className="container my-5">
                <h2 className="pb-2 font-fam2 text-center">Payment Details</h2>
                <hr className="style13 mb-4"></hr>
                <div className="row m-0 my-5">
                    <div className="col-md-7 col-12">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="row box-right">
                                    <div className="col-md-8 ps-0 ">
                                        <p className=" fw-bold h6 my-2 fs-3 mb-0">{product.name}</p>
                                        <p className="h1 fw-bold d-flex"> <span className=" fas fa-dollar-sign textmuted pe-1 h6 align-text-top mt-1"></span>${product.price}/-</p>
                                        <p className="ms-3 px-2 bg-green">-10% Ridual Offer</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="p-blue"> <span className="fas fa-circle pe-2"></span>Pending </p>
                                        <p className="fw-bold mx-3 mb-3"><span className="fas fa-dollar-sign pe-1"></span>None</p>
                                        <p className="p-org"><span className="fas fa-circle pe-2"></span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 px-0 mb-4">
                                <div className="box-right">
                                    <div className="d-flex pb-2">
                                        <p className="fw-bold h7 font-italic"><span className="textmuted"><img src={require('../../images/rp.png')} className="mx-4" width="100px" alt="" /></span>
                                            <img src={require('../../images/upi.png')} width="100px" alt="" /></p>
                                        <p className="ms-auto p-blue"><span className=" bg btn btn-primary fas fa-pencil-alt me-3"></span> <span className=" bg btn btn-primary far fa-clone"></span></p>
                                    </div>
                                    <div className="bg-blue p-2">
                                        <p className="h8 textmuted">Quick Pay through RazorPay or BHIM UPI or any other online payment option to get product book for you.
                                            <p className="p-blue py-2 bg btn btn-primary h8">LEARN MORE</p>
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 px-0">
                                <div className="box-right">
                                    <div className="d-flex mb-2">
                                        <p className="fw-bold fs-4">Customer Details</p>
                                        <p className="ms-auto textmuted"><span className="fas fa-times"></span></p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <p className="ms-auto bg btn btn-primary p-blue h8"><span className="far fa-clone pe-2"></span>COPY PAYMENT LINK</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <p className="textmuted h8">Your full name:</p>
                                            <input className="form-control" type="text" placeholder="Enter your full name" />
                                        </div>
                                        <div className="col-6">
                                            <p className="textmuted h8">Contact no.</p>
                                            <input className="form-control" type="text" placeholder="Enter Contact no." />
                                        </div>
                                        <div className="col-6">
                                            <p className="textmuted h8">Delivering City</p>
                                            <input className="form-control" type="text" placeholder="Cityname" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-12 ps-md-5 pl-3 ">
                        <div className="box-left">
                            <div className="h8">
                                <div className="row m-0 border mb-3">
                                    <div className="col-8 h8 pe-0 ps-2">
                                        <p className="textmuted py-2 fs-5 ">Items</p>
                                        <span className="d-block py-2 fs-5 border-bottom">{product.name}</span>
                                    </div>
                                    <div className="col-2 text-center p-0">
                                        <p className="textmuted p-2 fs-5 ">Qty</p>
                                        <span className="d-block p-2 fs-5 ">1</span>

                                    </div>
                                    <div className="col-2 p-0 text-center h8 border-end">
                                        <p className="textmuted p-2 fs-5 ">Price</p>
                                        <span className="d-block border-bottom py-2 fs-5 "><span className="fas fa-dollar-sign"></span>{product.price}</span><span className="fas fa-dollar-sign"></span>
                                    </div>
                                    <div className="col-2 p-0 text-center">
                                        <p className="textmuted p-2 fs-5 ">Total</p>
                                        <span className="d-block py-2 border-bottom fs-5 "><span className="fas fa-dollar-sign fs-5 "></span>+{product.price + 2.5}</span> <span className="fas fa-dollar-sign"></span>
                                    </div>
                                </div>
                                <div className="d-flex h7 mb-2">
                                    <p className="fs-5 ">Total Amount</p>
                                    <p className="ms-auto fs-5 "><span className="fas fa-dollar-sign"></span>${product.price + 2.5}/- </p>
                                </div>
                                <div className="h8 mb-5">
                                    <p className="textmuted">Fill up the card details to move one step forward in payment gateway. </p>
                                </div>
                            </div>
                            <div className="container">
                                <p className="h7 fw-bold mb-1">Pay this Invoice</p>
                                <p className="textmuted h8 mb-2">Make payment for this invoice by filling in the details</p>
                                <div className="form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card border-0"> <input className="form-control ps-5" type="text" placeholder="Card number" /> <span className="far fa-credit-card"></span> </div>
                                        </div>
                                        <div className="col-6"> <input className="form-control my-3" type="text" placeholder="MM/YY" /> </div>
                                        <div className="col-6"> <input className="form-control my-3" type="text" placeholder="cvv" /> </div>
                                        <p className="p-blue h8 fw-bold mb-3">MORE PAYMENT METHODS</p>
                                    </div>
                                    <button className="btn btn-primary w-100 text-center font-fam3 fs-5 p-0">PAY ${product.price + 2.5} &rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentGateway
