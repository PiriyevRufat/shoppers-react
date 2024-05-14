import React from 'react'
import '../FeatureSection/FeatureSection.css'
import Product from '../Product/Product'
const FeatureSection = () => {
  return (
    <section>
        <div className='feature-sect'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7 feature-sect-heading">
                        <h2>Featured Products</h2>
                    </div>
                </div>
                <div className="row">
                    <Product/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection