import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start text-light mt-5 bg-set-3">
                {/* Section: Social media */}
                <section className="d-flex justify-content-between p-4 text-dark bg-set-4">
                    {/* Left */}
                    <div className="me-5">
                        <span className="font-fam2">Get connected with us on social networks:</span>
                    </div>
                    {/* Left */}

                    {/* Right */}
                    <div>
                        <Link href="" className="text-dark me-4 dec-none">
                            <img src={require('../images/facebook.png')} className="mb-3" width="30px" alt='NULL' />
                        </Link>
                        <Link href="" className="text-dark me-4 dec-none">
                            <img src={require('../images/twitter.png')} className="mb-3" width="30px" alt='NULL' />
                        </Link>
                        <Link href="" className="text-dark me-4 dec-none">
                            <img src={require('../images/search.png')} className="mb-3" width="30px" alt='NULL' />
                        </Link>
                        <Link href="" className="text-dark me-4 dec-none">
                            <img src={require('../images/instagram.png')} className="mb-3" width="30px" alt='NULL' />
                        </Link>
                        <Link href="" className="text-dark me-4 dec-none">
                            <img src={require('../images/linkedin.png')} className="mb-3" width="30px" alt='NULL' />
                        </Link>
                        <Link href="" className="text-dark me-4 dec-none">
                            <img src={require('../images/github.png')} className="mb-3" width="30px" alt='NULL' />
                        </Link>
                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}

                {/* Section: Links  */}
                <section className="">
                    <div className="container text-left text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold">SIEMENS</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto in-hr" />
                                <p className="font-fam1">
                                    Welcome to our page to shop according to your neccessity and demands with uncountable options.
                                    We've got an amazing collections of outfits and attires in cooperation with our associative clothing wear brands.
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-left">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold">Association Brands</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto in-hr" />
                                <p>
                                    <Link href="#!" className="text-light dec-none">US Polo Assn</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-light dec-none">Nike</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-light dec-none">Lacoste</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-light dec-none">Adidas</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-light dec-none">Puma</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-light dec-none">Old Navy</Link>
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto in-hr" />
                                <p>
                                    <Link href="#!" className="text-light dec-none">Your Account</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-light dec-none">Associate Your Brand</Link>
                                </p>
                                <p>
                                    <Link href="/contact.html" className="text-light dec-none">Contact us</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-light dec-none">Help</Link>
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto in-hr" />
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}

                {/* Copyright */}
                <div className="text-center p-3 bg-set-2">
                    © 2022 Copyright:
                    <Link className="text-light" href="https://mdbootstrap.com/"> siemenswear.com</Link>
                </div>
                {/* Copyright */}
            </footer>
        </>
    )
}

export default Footer
