import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import Footer from '../components/Footer'

const About = () => {


    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1500);


    const Loading = () => {
        return (
            <>
                <div className="container-fluid placeholder">
                    <div className="text-secondary px-4 py-5 text-center curved placeholder">
                        <div className="py-5">
                            <h1 className="text-white font-fam2 placeholder" style={{ fontSize: "4rem" }}></h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid my-5 animation-1 bg-light placeholder" >

                    <div className="px-4 pt-5 my-5 text-center placeholder">
                        <h1 className="display-4 fw-bold text-body-emphasis font-fam2 placeholder"><span className='font-fam8'></span></h1>
                        <div className="col-lg-6 mx-auto placeholder">
                            <p className="lead font-fam10 text-grey mb-4 placeholder"></p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                                <button type="button" className="button-18 placeholder"></button>
                                <button type="button" className="button-34 placeholder"></button>
                            </div>
                        </div>
                        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
                            <div className="container px-5">
                                <img src="" className="img-fluid rounded-3 shadow-lg mb-4 background-size-cover" alt="Example image" width="50%" height="500%" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Team Section */}


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h2 className="pb-2 my-4 font-fam2 text-center placeholder col-12">Our</h2>
                            <hr className="style13 mb-4"></hr>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100 p-4 mb-0" >
                                        <svg className="bd-placeholder-img card-img-top" width="50px" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                                        <div className="card-body text-center mb-0">
                                            <h5 className="card-title font-fam8 fs-2 placeholder col-8">r</h5>
                                            <p className="card-text font-fam2 fs-4 placeholder col-8"></p>
                                            <Link to="#" className="button-18 mt-4 text-decoration-none placeholder col-8"></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card h-100 p-4 mb-0" >
                                        <svg className="bd-placeholder-img card-img-top" width="50px" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                                        <div className="card-body text-center mb-0">
                                            <h5 className="card-title font-fam8 fs-2 placeholder col-8">r</h5>
                                            <p className="card-text font-fam2 fs-4 placeholder col-8"></p>
                                            <Link to="#" className="button-18 mt-4 text-decoration-none placeholder col-8"></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card h-100 p-4 mb-0" >
                                        <svg className="bd-placeholder-img card-img-top" width="50px" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                                        <div className="card-body text-center mb-0">
                                            <h5 className="card-title font-fam8 fs-2 placeholder col-8">r</h5>
                                            <p className="card-text font-fam2 fs-4 placeholder col-8"></p>
                                            <Link to="#" className="button-18 mt-4 text-decoration-none placeholder col-8"></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }


    const ShowAbout = () => {
        return (
            <>

                <div className="container-fluid">
                    <div className="text-secondary px-4 py-5 text-center curved">
                        <div className="py-5">
                            <h1 className="text-white font-fam2" style={{ fontSize: "4rem" }}>About Siemens</h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid my-5 animation-1 bg-light" >

                    <div className="px-4 pt-5 my-5 text-center">
                        <h1 className="display-4 fw-bold text-body-emphasis font-fam2"><span className='font-fam8'>SIEMENS</span> Premium Stores</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead font-fam10 text-grey mb-4">Siemens stores is a premium american clothing and electronic stores which serves physically as well as digitally across all america and other countries nearby. The purpose of the siemens stores is to sell america top fashion branded clothes and electronic items to look premium and rich.</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                                <button type="button" className="button-18">Checkout</button>
                                <button type="button" className="button-34">Explore</button>
                            </div>
                        </div>
                        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
                            <div className="container px-5">
                                <img src={require('../images/brandLogo.png')} className="img-fluid rounded-3 shadow-lg mb-4 background-size-cover" alt="Example image" width="50%" height="500%" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}

                <div className="container-fluid my-5 animation-2">
                    <div className="row">
                        <div className="col-10 mx-auto mt-5">
                            <h2 className="pb-2 my-4 font-fam2 text-center">Our Creative and Specialist Online Handling Team</h2>
                            <hr className="style13 mb-4"></hr>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="card h-100 p-4 mb-0" >
                                        <img src={require('../images/designer.jpg')} className="card-img-top" alt="..." />
                                        <div className="card-body text-center mb-0">
                                            <h5 className="card-title font-fam8 fs-2">UI Designer</h5>
                                            <p className="card-text font-fam2 fs-4  ">Murtaza Motagam</p>
                                            <Link to="#" className="button-18 mt-4 text-decoration-none">Check Profile</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card h-100 p-4 mb-0" >
                                        <img src={require('../images/developer.jpg')} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title font-fam8 fs-2">Frontend Developer</h5>
                                            <p className="card-text font-fam2 fs-4  ">Murtaza Motagam</p>
                                            <Link to="#" className="button-18 mt-4 text-decoration-none">Check Profile</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="card h-100 p-4 mb-0" >
                                        <img src={require('../images/tester.jpg')} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title font-fam8 fs-2">Tester & Debugger</h5>
                                            <p className="card-text font-fam2 fs-4  ">Murtaza Motagam</p>
                                            <Link to="#" className="button-18 mt-4 text-decoration-none">Check Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Feature Section */}

                <div className="container-fluid  mt-5 animation-3">


                    <div className="row">
                        <div className="col-9 mx-auto">



                            <div className="row  my-4">

                                <h2 className="pb-2 font-fam2 my-3 text-center">Business Compartment</h2>
                                <hr className="style13 mb-4"></hr>
                                <div className="col d-flex align-items-start box-shadow-set p-3 mx-3" style={{ borderRadius: "10px" }}>
                                    <div>
                                        <h3 className="fs-2 font-fam10 fw-bold">E-Commerce</h3>
                                        <p className="font-fam2" >Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                        <button className="button-34" style={{ margin: "15px 0px" }}>
                                            Read more
                                        </button>
                                    </div>
                                </div>


                                <div className="col d-flex align-items-start box-shadow-set p-3 mx-3" style={{ borderRadius: "10px" }}>
                                    <div>
                                        <h3 className="fs-2 font-fam10 fw-bold">Share Traders</h3>
                                        <p className="font-fam2" >Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                        <button className="button-34" style={{ margin: "15px 0px" }}>
                                            Read more
                                        </button>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-start box-shadow-set p-3 mx-3" style={{ borderRadius: "10px" }}>
                                    <div>
                                        <h3 className="fs-2 font-fam10 fw-bold">Stock Investors</h3>
                                        <p className="font-fam2" >Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                        <button className="button-34" style={{ margin: "15px 0px" }}>
                                            Read more
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {loading ? <Loading /> : <ShowAbout />}
            <Footer />
        </>
    )
}

export default About
