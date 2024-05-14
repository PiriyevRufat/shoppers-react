import React, { Fragment } from 'react'
import HeroSection from '../../../components/site/HeroSection/HeroSection'
import ServiceSection from '../../../components/site/ServiceSection/ServiceSection'
import CollectionSection from '../../../components/site/CollectionSection/CollectionSection'
import FeatureSection from '../../../components/site/FeatureSection/FeatureSection'

const Home = () => {
  return (
    <Fragment>
    <HeroSection/>
    <ServiceSection/>
    <CollectionSection/>
    <FeatureSection/>
    </Fragment>
  )
}

export default Home