
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../style.css'

const Navbar = () => {



    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}   >
                <div className="container-fluid">
                    <Link className="navbar-brand logo-link" to="./"><img src={require('../images/brandLogo.png')} style={{ borderRadius: "0px" }} alt="brandLogo" className=' mx-4 img-fluid logo-set' /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">


                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown font-fam10 text-uppercase fs-5 ">
                                <Link className=" dropdown-toggle nav-link  nav-link-hover text-dark text-decoration-none" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </Link>
                                <ul className="dropdown-menu" style={{ background: "#e3f2fd" }}>
                                    <li><Link className="dropdown-item fs-5 text-uppercase text-dark ul-hover" to="./products">Clothing</Link></li>
                                    <li><Link className="dropdown-item fs-5 text-uppercase text-dark ul-hover" to="./electronics">Electronics</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-hover font-fam10  fs-5 text-uppercase text-dark" to="./services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-hover font-fam10 text-uppercase fs-5 text-dark" to="./about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-hover font-fam10 text-uppercase fs-5 text-dark" to="./contact">Contact</Link>
                            </li>
                        </ul>

                        <div className="buttons d-flex align-items-center justify-content-center">

                            <i className="fa fs-1 me-2 fa-solid fa-user themeColor mx-0">
                            </i>
                            <li className="nav-item dropdown fs-5 me-4" style={{ listStyle: "none" }}>
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                </Link>
                                <ul className="dropdown-menu fs-5 ">
                                    <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="#">Your Account</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Your purchase</Link></li>
                                    <li><Link className="dropdown-item" to="#"><b>Join us</b></Link></li>
                                </ul>
                            </li>

                            <button className="button-18 font-fam2 me-3" data-bs-toggle="modal" data-bs-target="#signupModal">Register</button>

                            <img src={require('../images/cart.png')} width="40px" className='mx-2' alt="" />
                            <span className="badge text-bg-dark fs-5">0</span>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />




            {/* Login Modal Will apear Here */}

            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-fam2 fs-4" id="loginModalLabel">Login into <span className='font-fam8'>SIEMENS</span></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row mb-3">
                                <form>
                                    <label className="form-label">Email address</label>
                                    <div className="col-sm-12">
                                        <input type="email" className="form-control" placeholder='Enter Your Email' />
                                    </div>
                                </form>
                            </div>
                            <div className="row mb-3">
                                <form>
                                    <label className="form-label">Password</label>
                                    <div className="col-sm-12">
                                        {/* eslint-disable-next-line */}
                                        <input type="password" className="form-control" placeholder='Enter Password' autoComplete='off'/>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* - 2 column grid layout for inline styling --> */}
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check">
                                    <label className="form-check-label"> Remember me </label>
                                </div>
                                <br />
                            </div>

                            <div className="col">
                                {/* <!-- Simple link --> */}
                                <Link to="#!">Forgot password?</Link>
                            </div>
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="button" className="btn btn-primary btn-block mb-4 w-50 mx-auto  h-100 font-fam2">Sign in</button>

                        {/* <!-- Register buttons --> */}
                        <div className="text-center my-2">
                            <p>Not Link member? <Link to="#signupModal" data-bs-toggle="modal" data-bs-target="#signupModal">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div >

            {/* Signup Modal  */}

            < div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h5 className="modal-title font-fam2 fs-4" id="signupModalLabel">Signup into <span className='font-fam8'>SIEMENS</span></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row mb-3">
                                    <label className="form-label" >Email address</label>
                                    <div className="col-sm-12">
                                        <input type="email" id="form2Example1" className="form-control" placeholder='Enter New Email' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    {/* eslint-disable-next-line */}
                                    <label className="form-label">Password</label>
                                    <div className="col-sm-12">
                                        <input type="password" className="form-control" placeholder='Create Password' autoComplete='off'/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="form-label" > Confirm Password</label>
                                    <div className="col-sm-12">
                                        <input type="password" className="form-control" placeholder='Confirm Password' autoComplete='off'/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <label className="form-label" >Age</label>
                                        <input type="text" className="form-control" placeholder='Enter Your Age' />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" >Mobile No:</label>
                                        <input type="Text" className="form-control" placeholder='Enter Your Number' />
                                    </div>
                                    <div className="col-sm-6 mt-4 mx-auto">
                                        <Link data-bs-toggle="modal" data-bs-target="#loginModal">Already a member?? Login</Link>
                                    </div>
                                </div>

                                <br />

                                {/* <!-- Submit button --> */}
                                <button type="button" className="btn btn-success font-fam2 btn-block mb-4">Signup</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
