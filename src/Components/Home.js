import React from 'react'
import { useNavigate } from 'react-router-dom'
import amit1 from '../images/amit1.jpg'
import amit from '../images/amit.jpg'
import amit2 from '../images/amit2.jpg'

function Home() {
  const navigate = useNavigate()
  return (
    <>
      {/* <div>Home</div>
      <button onClick={()=>navigate('order-summary',{replace:true})}>Place Order</button> */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={amit} className="d-block w-100" alt="amit1" height={"600px"}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={amit2} className="d-block w-100" alt="...amit1" height={"600px"}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={amit1} className="d-block w-100" alt="...amit1" height={"600px"}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
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
<footer className="page-footer font-small blue pt-4">

 
  <div className="container-fluid text-center text-md-left">

  
    <div className="row">

     
      <div className="col-md-6 mt-md-0 mt-3">

       
        <h5 className="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>

      </div>
   

      <hr className="clearfix w-100 d-md-none pb-3"/>

      
      <div className="col-md-3 mb-md-0 mb-3">

  
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>



      <div className="col-md-3 mb-md-0 mb-3">

   
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
   

    </div>
    

  </div>

  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> MDBootstrap.com</a>
  </div>


</footer>

    </>
  )
}

export default Home