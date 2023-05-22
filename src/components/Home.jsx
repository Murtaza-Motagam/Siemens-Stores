import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../style.css'
import '../utils.css'

const Home = () => {

  const loading = false;

  // Loading Function

  const Loading = () => {
    return (
      <>
        <div id="mainLoader" className='spinnerClass'>
          <div className="spinner-border " id="loader-1" role="status" >
          </div>
          <p className="elem-Color">Loading...</p>
        </div>
      </>
    );
  };

  // ShowHome Function

  const ShowHome = () => {

    // Main Return Function of the Home Function 
    return (
      <>


        {/* Intro Container  Starts Here*/}

        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={require('../images/c-item1.jpg')} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-md-block">
                <h5 className='font-fam2'>Men's New Formal Collection</h5>
                <p className='font-fam10'>Gucci and Lacoste is came up with the most waited collection of the men's wear including tshirts, shirts, formal suits and the night wear items in their new shops. Purchase from siemens to get ease.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={require('../images/c-item2.jpg')} className="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5 className='font-fam2'>Smart devices is out for sale</h5>
                <p className='font-fam10'>HSBC and ICICI Bank currently providing the best cheaper offer on the new smartphones of the companies like oneplus and samsung. Vivo and Oppo are also on the list get it on the cart and get free cashback of 10%.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={require('../images/c-item-3.jpg')} className="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5 className='font-fam2'>Premium options Available</h5>
                <p className='font-fam10'>Gucci Zara & Cantabil like premium brands are providing the best premium outfits for men women and the kids for all type of categories in wearing.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>



        {/* Custom Cards Starts From here */}
        <div className="container px-4 py-5 m-auto cursor-pointer"  id="custom-cards">
          <h2 className="pb-2 text-center font-fam2">Today's Exclusive Special</h2>
          <hr className="style13" ></hr>
          {/* Brand Section */}
        </div >

        <div className="px-4 pt-5 text-center mb-5 pb-5" >
          <h1 className="display-4 fw-bold text-body-emphasis font-fam10">Zara's Tshirts</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 font-fam100">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source  toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button type="button" className="button-34 px-4 me-sm-3">Check Out now</button>
            </div>
          </div>
          <div className="overflow-hidden" style={{maxHeight: "30vh"}}>
            <div className="container px-5">
              <img src={require('../images/zaratshirt.jpg')} className="img-fluid rounded-3 shadow-lg mb-5" alt="Example" width="700" height="500" loading="lazy" />
            </div>
          </div>
        </div>


        {/* Discover Section starts from here */}

        <main className="container-fluid px-5 my-5" >
          <h2 className="pb-2 text-center font-fam2">Discover Section </h2>
          <hr className="style13 mb-4"></hr>

          <div className="p-4 p-md-5 mb-4 rounded text-bg-dark" >
            <div className="col-md-6 px-0" >
              <h1 className="display-4 font-fam2">Discover our top sellers & latest innovation</h1>
              <p className="lead font-fam4 my-3">SIEMENS Fest Sale is the best time to purchase mobile phones, tablets, televisions accessories, laptops, and monitors. Explore the best offers and great deals on all major electronic categories during the sale.</p>
              <p className="lead mb-0"><Link to="/" className="text-light fw-bold">Continue reading...</Link></p>
            </div>

          </div>

        </main>


        {/* Feature Section of homepage */}


        < div className="row mb-2 mx-auto" >

          <h2 className="pb-2 my-4 font-fam2 text-center">Featured Section </h2>
          <hr className="style13 mb-4"></hr>

          <div className="col-md-5  mx-auto mb-3" >
            <div className="row g-0  rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Trending</strong>
                <h3 className="mb-2 font-fam2">Samsung Smart Phones</h3>
                <div className="mb-1 text-body-secondary">Introducing New Series</div>
                <p className="card-text mb-auto font-fam10">Samsung introducing new series of smart mobiles with foldable technolgy comes up with dual screen and ultra wide angle cameras and zoom features.</p>
                <Link to="#" className="stretched-link text-warning mt-3">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                {/* <img src="https://source.unsplash.com/200x300/?watches" alt="" /> */}
                <img src={require('../images/featureMob-1.jpeg')} alt="" />

              </div>
            </div>
          </div>

          <div className="col-md-5 mx-auto mb-3" >
            <div className="row g-0 overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Featured</strong>
                <h3 className="mb-2 font-fam2">Apple Smart Series</h3>
                <div className="mb-1 text-body-secondary">Introducing New Series</div>
                <p className="card-text mb-auto font-fam10">Apple introducing new series of smart Iphones with AI technolgy comes up with utlra features of cameras and Security Lorem ipsum dolor sit amet sit  amet vamet consectetur consectetur md.</p>
                <Link to="#" className="stretched-link text-warning mt-3">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src={require('../images/iphone.jpeg')} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2 mx-auto" >

          <div className="col-md-5  mx-auto" >
            <div className="row g-0  rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Featured</strong>
                <h3 className="mb-2 font-fam2">Oneplus New Note Phones</h3>
                <div className="mb-1 text-body-secondary">Introducing New Series</div>
                <p className="card-text mb-auto font-fam10">Oneplus introducing new series of smart mobiles with foldable technolgy comes up with dual screen and ultra wide angle cameras and zoom features.</p>
                <Link to="#" className="stretched-link text-warning mt-3">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src={require('../images/featureMob-1.jpeg')} alt="" />

              </div>
            </div>
          </div>

          <div className="col-md-5 mx-auto" >
            <div className="row g-0  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Trending</strong>
                <h3 className="mb-2 font-fam2">Vivo & Oppo Smart Series</h3>
                <div className="mb-1 text-body-secondary">Introducing New Series</div>
                <p className="card-text mb-auto font-fam10">Vivo and Oppo introducing new series of smart phones with AI technolgy comes up with utlra features of cameras and Security Lorem ipsum dolor sit amet sit  amet vamet consectetur consectetur md.</p>
                <Link to="#" className="stretched-link text-warning mt-3">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src={require('../images/iphone.jpeg')} alt="" />
              </div>
            </div>
          </div>



        </div>



        {/* US Polo Section starts from here */}

        <h2 className="pb-2 text-center mt-5 font-fam2" >Brand Recommendation Section</h2>
        <hr className="style13"></hr>
        <div className="d-flex text-center align-items-center bg-dark text-light h-set bg-img">

          <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">

            <main className="px-3 d-flex flex-column justify-content-center align-items-center">
              <p className="lead fs-5 ls-4">#LIVE AUTHENTICALLY.</p>
              <h1 className="font-fam5 font-set">U.S. Polo Assn.</h1>
              <button className="btn btn-bg-4 btn-lg">Explore Out</button>
            </main>

          </div>
        </div>

      </>
    )
  }


  return (
    <>
      {loading ? <Loading /> : <ShowHome />}
      <Footer />
    </>
  )
}

export default Home

