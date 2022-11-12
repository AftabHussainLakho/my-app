import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
 
  };
  var settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
 
  };
  var testimonial = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
 
  };
return (
    <>
    <h1>Main Slider</h1>
    <Slider {...settingss}>
  <div className='slidermain'>
     <img alt="slide1" src="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png" />
 
  </div>
  <div>
    <h3>222</h3>
  </div>
  <div>
    <h3>3</h3>
  </div>
  <div>
    <h3>4</h3>
  </div>
  <div>
    <h3>5</h3>
  </div>
  <div>
    <h3>6</h3>
  </div>
</Slider>
<h1>Carousel</h1>
<div className='slidermain2'>
    <Slider {...settings}>

    <div className='col-sm-3'>
     <img alt="slide1" src="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png" />
    <h3>1</h3>
  </div>
  <div className='col-sm-3'>
  <img alt="slide1" src="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png" />
    <h3>222</h3>
  </div>
  <div className='col-sm-3'>
  <img alt="slide1" src="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png" />
    <h3>3</h3>
  </div>
  <div className='col-sm-3'>
  <img alt="slide1" src="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png" />
    <h3>4</h3>
  </div>
  <div className='col-sm-3'>
  <img alt="slide1" src="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png" />
    <h3>5</h3>
  </div>
  <div className='col-sm-3'>
  <img alt="slide1" src="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png" />
    <h3>6</h3>
  </div>
</Slider>
</div>

<div className='testimonials container text-center my-13 py-13'>
<h1 className='text-center pt-100 mt-100 testimonial-heading'>Testimonial Slider</h1>
    <Slider {...testimonial}>
  <div className=' container text-center'>
    <img className="text-center" src='https://www.orbitmedia.com/wp-content/uploads/2017/03/jen-havice.png' alt='testimonial' />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p><strong>Testimoial Auther</strong></p>
<p>Designation</p>
 
  </div>
  <div>
  <img className="text-center" src='https://www.orbitmedia.com/wp-content/uploads/2017/03/jen-havice.png' alt='testimonial' />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2222Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p><strong>Testimoial Auther2</strong></p>
<p>Designation2</p>
  </div>
  <div>
  <img className="text-center" src='https://www.orbitmedia.com/wp-content/uploads/2017/03/jen-havice.png' alt='testimonial' />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p><strong>Testimoial Auther3</strong></p>
<p>Designation3</p>
  </div>
  
</Slider>
</div>

<div className='container my-100 py-100'>
<div className='row'>
<div className='col-sm-3'></div>
<div className='col-sm-6 '>
  <form id="contact-form" className="" method="POST">
    <h2 className='text-center'>Contact Us</h2>
    <div className="form-group my-3">

        <input type="text" className="form-control" placeholder="Name" />
    </div>
    <div className="form-group my-3">

        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Email address' />
    </div>
    <div className="form-group my-3">
        <textarea className="form-control" rows="5" placeholder='Message'></textarea>
    </div>
    <button type="submit" className="my-1 btn btn-primary">Submit</button>
</form>
  </div>
  </div>
</div>
    </>
)
    
}
