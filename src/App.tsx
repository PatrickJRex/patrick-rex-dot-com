import { Hero } from './components/Hero'
import { Footer } from './components/Footer.tsx'
import { Gradient } from './components/Gradient.tsx'
import { BrandSlider } from './components/BrandSlider.tsx'
import { BrandMark } from './components/BrandMark.tsx'
import './App.css'


function App() {
  return (
    <>
      <Hero />
      <BrandSlider />
      <Footer />
      <Gradient />
      <BrandMark />
    </>
  )
}

export default App
