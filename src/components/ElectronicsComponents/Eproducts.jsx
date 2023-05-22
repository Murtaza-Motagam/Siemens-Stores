import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer'
import Search from '../Sub-Components/Search'
import '../../style.css'

const Eproducts = () => {


  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://api.pujakaitem.com/api/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
      }


      // eslint-disable-next-line


      return () => {
        componentMounted = false; //eslint-disable-line
      }

    }

    getProducts();


  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3 mb-3">
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

        <div className="col-md-3 mb-3">
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

        <div className="col-md-3 mb-3">
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

        <div className="col-md-3 mb-3">
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
    );
  };


  const ShowEProducts = () => {

    return (
      <>


        {filter.map((product) => {
          return (
            <>

              <div className="col">
                <div className="card  cursor-pointer mx-auto mb-5" style={{ width: "24rem" }} key={product.id}>
                  <img src={product.image} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <p className="card-text font-fam9 fs-5 mb-2"><span className="font-fam1 fs-5">Company</span> - {product.company}.</p>
                    <p className="card-text font-fam2 fs-4 mb-2">Model - {product.name}.</p>
                    <p className="card-text font-fam3 fs-5 mb-2">Price - ${product.price}/-</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group my-3">
                        <Link to={`/electronics/${product.id}`} className="btn btn-bg-1 me-2">Buy Now</Link>
                        <button type="button" className="btn btn-bg-2 me-2">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    )
  }

  return (
    <>
      <div className="container my-3 text-center text-white" style={{ background: "black", borderRadius: "10px" }}>
        <div className="p-4 p-md-5  mb-4 rounded">
          <div className="col-md-9 mx-auto px-3 py-2">
            <h1 className="display-4 font-fam2 fw-bold">Explore Out Electronics World</h1>
            <p className="font-fam10 fs-4 fw-bold p-0 my-3">Featured Electronic items collection in SIEMENS store is available to purchase online. explore out tons of different options in electronic Technology, Mobiles, Laptops, Accessories</p>
            <button className='btn btn-warning btn-sm '>Continue reading..</button>
          </div>
        </div>
      </div>

      {/* Search Bar Component */}

      <Search />



      <div className="container-fluid my-2 ">
        <div className="row">
          <div className="col-12 px-4 mx-auto">
            <div className="col-md-8">
            </div>
            <div className="row cols-md-3 cols-lg-4 cols-sm-2 my-5">
              <h2 className="pb-2 text-center font-fam2">Latest Feauture Smart Electronic Collection</h2>
              <hr className="style13 mb-4"></hr>
              {loading ? <Loading /> : <ShowEProducts />}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Eproducts
