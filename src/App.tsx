import { Suspense, lazy, useEffect, useState } from 'react'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer.tsx'
import { Nav } from './components/common/layout/Nav'
const BrandSlider = lazy(() => import('./components/BrandSlider.tsx').then((module) => ({ default: module.BrandSlider })))
const Gradient = lazy(() => import('./components/Gradient.tsx').then((module) => ({ default: module.Gradient })))
const BrandMark = lazy(() => import('./components/BrandMark.tsx').then((module) => ({ default: module.BrandMark })))
const WhatIDo = lazy(() => import('./components/WhatIDo.tsx').then((module) => ({ default: module.WhatIDo })))
function App() {
  const [showDeferredSections, setShowDeferredSections] = useState(false)

  useEffect(() => {
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => setShowDeferredSections(true), { timeout: 2000 })
      : window.setTimeout(() => setShowDeferredSections(true), 400)

    return () => {
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(idle as number)
      } else {
        window.clearTimeout(idle as number)
      }
    }
  }, [])

  return (
    <>
    <Nav />
      <Hero />
      {showDeferredSections ? (
        <Suspense fallback={null}>
          <WhatIDo />
          <BrandSlider />
        </Suspense>
      ) : null}
      <Footer />
      {showDeferredSections ? (
        <Suspense fallback={null}>
          <Gradient />
          <BrandMark />
        </Suspense>
      ) : null}
    </>
  )
}

export default App
