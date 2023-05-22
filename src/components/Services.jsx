import React, { useState } from 'react'
import '../utils.css'
import '../style.css'
import Footer from './Footer';



const Services = (props) => {

  // All the useState hooks are included here

  const [loading, setLoading] = useState(true);



  // Loading toggle setTimeout is defined here 

  setTimeout(() => {
    document.getElementById('mainLoader').style.display = "none";
    document.getElementById("header-2").style.display = "block";
    document.getElementById("container-1").style.marginTop = "0px";
  }, 1500);


  setTimeout(() => {
    setLoading(false);
  }, 1500);

  // Loading Component Defined here

  const Loading = () => {
    return (
      <>

        {/* First Component */}

        <div className="container-fluid px-3 my-5" >
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
            <div className="col-lg-4 offset-lg-1 overflow-hidden ">
              <svg className="bd-placeholder-img card-img-top" width="50px" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
            </div>

            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis font-fam10 placeholder col-8 my-3">Hello</h1>
              <p className="placeholder col-8"></p>
              <p className="placeholder col-8"></p>
              <p className="placeholder col-8"></p>
              <p className="lead font-fam10 placeholder col-8" ></p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-3">
                <button type="button" className="button-36 me-2 placeholder col-4"></button>
                <button type="button" className="button-66 placeholder"></button>
              </div>
            </div>

          </div>
        </div>

        <br />

        <div className={`container px-4 py-5 m-auto cursor-pointer `} >
          <h2 className="placeholder col-8">Siemens </h2>
        </div>

        <br />

        <div className="container d-flex justify-content-around cont-resp mb-4" >
          <div className={`card .c-w-set card-size  card-hover card-resp-2 border-premBorder placeholder`}>
            <div className="card-body  d-flex justify-content-center align-items-center placeholder">
            </div>
          </div>

          <div className={`card .c-w-set card-size  card-hover card-resp-2 border-premBorder placeholder`}>
            <div className="card-body  d-flex justify-content-center align-items-center placeholder">
            </div>
          </div>

          <div className={`card .c-w-set card-size  card-hover card-resp-2 border-premBorder placeholder`}>
            <div className="card-body  d-flex justify-content-center align-items-center placeholder">
            </div>
          </div>

          <div className={`card .c-w-set card-size  card-hover card-resp-2 border-premBorder placeholder`}>
            <div className="card-body  d-flex justify-content-center align-items-center placeholder">
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-around cont-resp">
          <div className={`card .c-w-set card-size  card-hover card-resp-2 border-premBorder placeholder`}>
            <div className="card-body  d-flex justify-content-center align-items-center placeholder">
            </div>
          </div>

          <div className={`card .c-w-set card-size  card-hover card-resp-2 border-premBorder placeholder`}>
            <div className="card-body  d-flex justify-content-center align-items-center placeholder">
            </div>
          </div>

          <div className={`card .c-w-set card-size  card-hover card-resp-2 border-premBorder placeholder`}>
            <div className="card-body  d-flex justify-content-center align-items-center placeholder">
            </div>
          </div>

          <div className={`card .c-w-set card-size  card-hover card-resp-2 border-premBorder placeholder`}>
            <div className="card-body  d-flex justify-content-center align-items-center placeholder">
            </div>
          </div>
        </div>
      </>
    )
  }


  // Main ShowServices Function to render the component items --> Secondary main

  const ShowServices = () => {


    return (
      <>

        <div className="container-fluid">
          <div className="text-secondary px-4 py-5 text-center curved">
            <div className="py-5">
              <h1 className="text-white font-fam2" style={{ fontSize: "4rem" }}>Siemens Services</h1>
            </div>
          </div>
        </div>


        <div className="container my-5 bg-light border-radius-1">
          <div className="row">

            <div className="col-md-7 px-5 my-5">
              <h1 className=" font-fam2 fw-bold text-left">Serves as Online Clothing Store Brand</h1>
              <div className="py-4">
                <p className="fs-5 font-fam1 mb-4">Siemens store is a great place to find designer clothes, shoes and accessories at discounted prices. From elegant suits and dresses to street style sneakers and denim, this is your go-to store for classy bargains. 9. Uniqlo is your source for Japanese-inspired fashion. From casual basics to trendy outerwear, they have something for everyones style.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-start justify-sm-content-center">
                  <button type="button" className="button-34">Check out</button>
                  <button type="button" className="button-18">Services</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src={require('../images/r-card-2.jpg')} className="inmg-fluid border-radius-1" width="500px" alt="" />
            </div>
          </div>
        </div>


        <main>

          {/*  Section */}

          <div className="album py-5 bg-body-tertiary">
            <div className="container mx-auto">

              <h2 className="pb-2 my-4 font-fam2 text-center">Purchase Membership</h2>
              <hr className="style13 mb-4"></hr>

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div className="col">
                  <div className="card shadow-lg border-radius-1">
                    <div className="card-body">
                      <h5 className="card-title text-primary fs-1 text-center font-fam2 fw-bold">Basic Plan</h5>
                      <hr style={{ height: "3px", backgroundColor: "blue" }} />
                      <p className="card-text text-grey font-fam1 px-3 my-3 fs-5">Lorem ipsum dolor sit amet facilis?facilis?facilis?facilis?consectetur, adipisicing elit. Quia nemo laboriosam tenetur quo eum blanditiis officiis dignissimos excepturi laborum facilis?</p>
                    </div>
                    <button className="button-18 py-2 mb-2 text-center mx-auto">Check Out</button>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-lg border-radius-1">
                    <div className="card-body">
                      <h5 className="card-title text-success fs-1 text-center font-fam2 fw-bold">Vip Plan</h5>
                      <hr style={{ height: "3px", backgroundColor: "blue" }} />
                      <p className="card-text text-grey font-fam1 px-3 my-3 fs-5">Lorem ipsum dolor sit amet facilis?facilis?facilis?facilis?consectetur, adipisicing elit. Quia nemo laboriosam tenetur quo eum blanditiis officiis dignissimos excepturi laborum facilis?</p>
                    </div>
                    <button className="button-18 py-2 mb-2 text-center mx-auto">Check Out</button>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-lg border-radius-1">
                    <div className="card-body">
                      <h5 className="card-title text-danger fs-1 text-center font-fam2 fw-bold">Premium Plan</h5>
                      <hr style={{ height: "3px", backgroundColor: "blue" }} />
                      <p className="card-text text-grey font-fam1 px-3 my-3 fs-5">Lorem ipsum dolor sit amet facilis?facilis?facilis?facilis?consectetur, adipisicing elit. Quia nemo laboriosam tenetur quo eum blanditiis officiis dignissimos excepturi laborum facilis?</p>
                    </div>
                    <button className="button-18 py-2 mb-2 text-center mx-auto">Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </main>

        {/* The premium Section Cards are starts from here */}


        <h2 className="pb-2 my-4 font-fam2 text-center">SIEMENS Premium Brands</h2>
        <hr className="style13 mb-5"></hr>

        <div className="container-fluid">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 text-center box-shadow-set">
                <div className=" header-img-set">
                  <img src={require('../images/Zara_logo.png')} className="img-fluid" alt="none" width="100px" />
                </div>
                <h2 className="fw-normal font-fam2 fw-bold mt-3">Zara Stores</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum et libero ullam corporis perferendis eum atque expedita velit aliquam!</p>
                <p><button className="button-18 my-3">Checkout</button></p>
              </div>
              <div className="col-md-4 text-center box-shadow-set">
                <div className=" header-img-set">
                  <img src={require('../images/puma_logo.png')} className="img-fluid" alt="none" width="70px" />
                </div>
                <h2 className="fw-normal font-fam2 fw-bold mt-3">Puma Wears</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum et libero ullam corporis perferendis eum atque expedita velit aliquam!</p>
                <p><button className="button-18 my-3">Checkout</button></p>
              </div>

              <div className="col-md-4 text-center box-shadow-set">
                <div className=" header-img-set">
                  <img src={require('../images/nike.jpg')} className="img-fluid" alt="none" width="100px" />
                </div>
                <h2 className="fw-normal font-fam2 fw-bold mt-3">Puma Wears</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum et libero ullam corporis perferendis eum atque expedita velit aliquam!</p>
                <p><button className="button-18 my-3">Checkout</button></p>
              </div>
            </div>
          </div>
        </div>



      </>

    )
  }


  // Services Componet render function --> Main
  return (
    <>

      {loading ? <Loading /> : <ShowServices />}

      <Footer />
    </>
  )
}

export default Services;