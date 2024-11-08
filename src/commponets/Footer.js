import React from 'react';
import './footer.css';


function Footer() {
  return (
    <>
      <footer className="footer text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Get to know Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">About Amazon</a></li>
                <li><a href="#" className="text-white">Careers</a></li>
                <li><a href="#" className="text-white">Press Releases</a></li>
                <li><a href="#" className="text-white">Amazon Science</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Connect with Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Facebook</a></li>
                <li><a href="#" className="text-white">Twitter</a></li>
                <li><a href="#" className="text-white">Instagram</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Make Money with Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Sell on Amazon</a></li>
                <li><a href="#" className="text-white">Sell under Amazon Accelerator</a></li>
                <li><a href="#" className="text-white">Protect and Build Your Brand</a></li>
                <li><a href="#" className="text-white">Amazon Global Selling</a></li>
                <li><a href="#" className="text-white">Supply to Amazon</a></li>
                <li><a href="#" className="text-white">Become an Affiliate</a></li>
                <li><a href="#" className="text-white">Fulfilment by Amazon</a></li>
                <li><a href="#" className="text-white">Advertise Your Products</a></li>
                <li><a href="#" className="text-white">Amazon Pay on Merchants</a></li>

              </ul>
            </div>
            <div className="col-md-3">
              <h5>Let Us Help You</h5>
              <ul className="list-unstyled ">
                <li ><a href="#" className="text-white">Your Account</a></li>
                <li ><a href="#" className="text-white">Returns Centre</a></li>
                <li><a href="#" className="text-white">Recalls and Product Safety Alerts</a></li>
                <li ><a href="#" className="text-white">100% Purchase Protection</a></li>
                <li ><a href="#" className="text-white">Amazon App Download</a></li>
                <li><a href="#" className="text-white">Help</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <div className=" d-flex align-items-center justify-content-center">
          <img className="img" src="av.png" alt="Amazon Logo" height="30px" />
          <div className='dropdown p-4 d-flex flex-column'>
            <div style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">
              <span className="text-white">English</span>
            </div>
            <ul className="dropdown-menu dropdown-menu-end bg-light align-items-center justify-content-center">
              <li><a className="dropdown-item" href="#">English</a></li>
              <li><a className="dropdown-item" href="#">Spanish</a></li>
              <li><a className="dropdown-item" href="#">French</a></li>
              <li><a className="dropdown-item" href="#">German</a></li>
            </ul>
          </div>
          <div style={{ padding: '2px' }}>
            <img src="flag.png" alt="Flag" height="30px" />
            <span className="text-white">English</span>

          </div>
        </div>
      </footer>
      <div className='secondfooter'>
        <div className="container">
          <div className="row">
            <div className="f1 col-md-3 text-white">
              <p>AbeBooks<br />
                Books, art<br />
                & colletibles</p>
            </div>
            <div className="f2 col-md-3 text-white">
              <p>Audible<br />
                Download<br />
                Audio Books</p>
            </div>
            <div className="f3 col-md-3 text-white">
              <p>Amazon Web Services<br />
                Scalable Cloud<br />
                Computing Services</p>
            </div>
            <div className="f4 col-md-3 text-white">
              <p>IMDb<br />
                Movies, TV<br />
                & Celebrities</p>
            </div>
            <div className="row">
              <div className="f5 col-md-3 text-white">
                <p>Shopbop<br />
                  Designer<br />
                  Fashion Brands</p>
              </div>
              <div className="f6 col-md-3 text-white">
                <p>	Amazon Business<br />
                  Everything For<br />
                  Your Business</p>
              </div>
              <div className="f7 col-md-3 text-white">
                <p>Prime Now<br />
                  2-Hour Delivery<br />
                  on Everyday Items<br /></p>
              </div>
              <div className="f8 col-md-3 text-white">
                <p>	Amazon Prime Music<br />
                  100 million songs, ad-free<br />
                  Over 15 million podcast episodes</p>
              </div>
            </div>
          </div>
        </div>
        <div className='text-white d-flex align-items-center justify-content-center'>
          <p>Conditions of Use & Sale Privacy Notic Interest-Based Ads<br />
            © 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>

  );
}

export default Footer;
