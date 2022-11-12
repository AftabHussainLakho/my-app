import React from 'react'

export default function Contact() {
    return (
        <>
        
        <div className='container my-100 py-100'>
<div className='row'>
<div className='col-sm-3'></div>
<div className='col-sm-6 '>
  <form id="contact-form" className="" method="POST">
  <h1 className='text-center'>Contact Us </h1>
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
