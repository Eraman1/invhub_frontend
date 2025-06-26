import React from 'react'
import HeroSection from '../components/meshDoor/HeroSection'
import AboutMeshDoor from '../components/meshDoor/AboutMeshDoor'
import WhyMeshDoor from '../components/meshDoor/WhyMeshDoor'
import WhyInvhubSection from '../components/meshDoor/WhyInvhub'
import BenefitsOfMeshDoor from '../components/meshDoor/BenifitsOfMeshDoor'

export default function MeshDoor() {
  return (
    <div>
      <HeroSection />
      <AboutMeshDoor />
      <WhyMeshDoor />
      <WhyInvhubSection />
      <BenefitsOfMeshDoor />
    </div>
  )
}
