import React from 'react'
import '../ServiceSection/ServiceSection.css'
const ServiceSection = () => {
  return (
    <section>
        <div className='service-sect'>
            <div className="container">
                <div className="row">
                <div className="col-4 service-card">
                        <div className='service-card-icon'>
                        <i class="fa-solid fa-truck"></i>
                        </div>
                        <div className='service-card-desc'>
                            <h2>FREE SHIPPING</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="col-4 service-card">
                        <div className='service-card-icon'>
                        <i class="fa-solid fa-rotate-right"></i>
                        </div>
                        <div className='service-card-desc'>
                            <h2>FREE RETURNS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                    <div className="col-4 service-card">
                        <div className='service-card-icon'>
                        <i class="fa-solid fa-circle-question"></i>
                        </div>
                        <div className='service-card-desc'>
                            <h2>CUSTOMER SUPPORT</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection