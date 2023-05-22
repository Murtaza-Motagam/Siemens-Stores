import React, { useState } from 'react'
import '../utils.css'
import Footer from '../components/Footer'

const Contact = () => {

  const [btnText, setBtnText] = useState("Dark");

  const [myStyle, setMyStyle] = useState({
    backgroundColor: "#fbfbfb",
    color: 'black'
  });
  
  const [myStyle_header, setMyStyle_header] = useState({
    color: 'black'
  });

  const toggleMode = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        backgroundColor: "rgb(7 13 25)",
        color: "white"
      })
      setMyStyle_header({
        color: "white"
      })
      setBtnText("Light")
      
      document.body.style.backgroundColor = "rgb(7 13 25)";

    }
    else {
      setMyStyle({
        color: "black",
        backgroundColor: "#fbfbfb"
      })
      setMyStyle_header({
        color: "black",
      })
      setBtnText("Dark")

      document.body.style.backgroundColor = "white";

    }
  };


  return (
    <>

      <div className="container-fluid" style={myStyle}>
        <div className="modebtnset d-flex align-items-center">
          <button style={myStyle} id="mode" className="moon my-3 mx-4 w-100 cursor-pointer fs-5" onClick={toggleMode}>{btnText}
          </button>
        </div>
      </div>


      <div className="container-fluid my-5" style={myStyle}>
        <div className="row">
          <div className="col-10 mx-auto" style={myStyle}>
            <h2 className="pb-2 mt-4 font-fam2 text-center" style={myStyle_header}>Contact Form Siemens Stores</h2>
            <hr className="mb-4" style={{ height: "4px", backgroundColor: "white" }}></hr>
            <div className="row gy-4 mx-auto" style={myStyle}>

              <div className="col-md-6 p-5" style={myStyle}>
                <h2 className="pb-2 font-fam2 fs-1 mb-5 mx-5">Contact Us</h2>

                <div className="container d-flex mt-3 align-items-center w-100  mb-5">
                  <img src={require('../images/location.png')} width="30px" alt="" className="img-fluid me-3" />
                  <h5 className="font-fam10 fs-3"><span className='font-fam2'>Address: </span>: 302 Swarts Street, Block-10<br />
                    NewYork NYC, 100012</h5>
                </div>

                <div className="container mb-5 d-flex align-items-center w-100text-center">
                  <img src={require('../images/telephone.png')} width="30px" alt="" className="img-fluid me-3" />
                  <h5 className="font-fam10 fs-3"><span className='font-fam2'>Phone: </span>+ 01 234 567 88</h5>
                </div>


                <div className="container mb-5 d-flex align-items-center w-100text-center">
                  <img src={require('../images/telegram.png')} width="30px" alt="" className="img-fluid me-3" />
                  <h5 className="font-fam10 fs-3 "><span className='font-fam2'>Email: </span> siemensstoresus@gmail.com</h5>
                </div>


                <div className="container d-flex align-items-center w-100text-center">
                  <img src={require('../images/global.png')} width="30px" alt="" className="img-fluid me-3" />
                  <h5 className="font-fam10 fs-3"><span className='font-fam2'>Website: </span>siemensstores.us</h5>
                </div>


              </div>

              <div className="col-md-5 mx-auto mb-5 p-5" style={{ borderRadius: "30px", background: "#e3f2fd" }}>
                <form>
                  <h2 className="pb-2 mt-4 font-fam2 text-dark">Get in touch with us </h2>

                  <div className="mb-3 me-3">
                    <input type="text" className="form-control font-fam2 fs-5 px-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name: " />
                  </div>

                  <div className="mb-3 me-3">
                    <input type="email" className="form-control font-fam2 fs-4 px-auto" id="exampleInputPassword1" placeholder="Email: " />
                  </div>


                  <div className="mb-3">
                    <input type="text" className="form-control font-fam2 fs-4 px-auto" id="exampleInputPassword1" placeholder="Subject: " />
                  </div>
                  <div className="form-floating mb-3">
                    <textarea className="form-control font-fam2 fs-5 bg-none h-100" placeholder="Leave a comment here" ></textarea>
                    <label for="floatingTextarea2Disabled">Comments</label>
                  </div>
                  <button type="submit" className="btn btn-warning font-fam10 btn-lg px-4">Send Message</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact
