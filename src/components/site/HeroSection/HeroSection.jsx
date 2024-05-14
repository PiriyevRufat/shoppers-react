import React from 'react'
import '../HeroSection/HeroSection.css'
const HeroSection = () => {
  return (
    <section>
        <div className='hero-section'>
        <div className="container herocont">
            <div className="row herorow">
                <div className="col-5">
                    <h1>Finding Your Perfect Shoes</h1>
                    <div className='hero-desc'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                    <button className='btn btn-primary'> SHOP NOW</button>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection