import React from 'react'
import HeroSection from '../components/InvisibleGrills/HeroSection'
import AboutInvisibleGrills from '../components/InvisibleGrills/AboutInvisibleGrills'
import WhyInvisibleGrill from '../components/InvisibleGrills/WhyInvisibleGrill'
import WhyInvhubSection from '../components/InvisibleGrills/WhyInvhub'
import BenefitsOfInvisibleGrill from '../components/InvisibleGrills/BenefitsOfInvisibleGrill'
import GrillFeatureCards from '../components/InvisibleGrills/GrillFeatureCard'

export default function InvisibleGrills() {
    return (
        <div>

            <HeroSection />
            <AboutInvisibleGrills />
            <GrillFeatureCards />
            <WhyInvisibleGrill />
            <WhyInvhubSection />
            <BenefitsOfInvisibleGrill />
        </div>
    )
}
