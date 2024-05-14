import React from 'react'
import '../CollectionSection/CollectionSection.css'
const CollectionSection = () => {
  return (
    <section>
        <div className='collect-sect'>
            <div className="container">
                <div className="row collect-row">
                <div className="col-4 collect-card">
                    <img className='img-fluid' src="https://preview.colorlib.com/theme/shoppers/images/women.jpg.webp" alt="" />
                    <div className='collect-card-desc'>
                        <p>Collection</p>
                        <h3>Women</h3>
                    </div>
                </div>
                <div className="col-4 collect-card">
                    <img className='img-fluid' src="https://preview.colorlib.com/theme/shoppers/images/children.jpg.webp" alt="" />
                    <div className='collect-card-desc'>
                        <p>Collection</p>
                        <h3>Women</h3>
                    </div>
                </div>
                <div className="col-4 collect-card">
                    <img className='img-fluid' src="https://preview.colorlib.com/theme/shoppers/images/men.jpg.webp" alt="" />
                    <div className='collect-card-desc'>
                        <p>Collection</p>
                        <h3>Women</h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CollectionSection