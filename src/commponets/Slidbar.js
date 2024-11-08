import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ImageSlider()
 {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        console.log(products.title);
      })
      .catch(err => console.error("Error fetching data: ", err));
  }, []);
  return (
    <div>
       
      
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
         
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img src="kitchen.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="dry fruit.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="grocery.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src="mobile.jpg" className="d-block w-100" alt="Slide 4" />
          </div>
              
    </div>
    
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div>
     
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {products.map((product, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={product.id}>
              <img src={product.image} className="d-block w-100" alt={product.title} style={{ height: '500px', objectFit: 'contain' }} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{product.title}</h5>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  
      </div>
      

  );
}
export default ImageSlider;