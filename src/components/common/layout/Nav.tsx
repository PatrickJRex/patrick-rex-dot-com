import { useEffect, useRef, useState } from 'react'
import Logo from '../../Logo'

const SCROLL_DELTA = 6
const TOP_REVEAL_PX = 48

export function Nav() {
  const [hidden, setHidden] = useState(false)
  const [opaqueBg, setOpaqueBg] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      if (ticking.current) {
        return
      }

      ticking.current = true
      window.requestAnimationFrame(() => {
        ticking.current = false

        const y = window.scrollY
        const prev = lastY.current
        const delta = y - prev

        if (y <= TOP_REVEAL_PX) {
          setHidden(false)
          setOpaqueBg(false)
        } else if (delta > SCROLL_DELTA) {
          setHidden(true)
        } else if (delta < -SCROLL_DELTA) {
          setHidden(false)
          setOpaqueBg(true)
        }

        lastY.current = y
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav
      className={`nav z-20 nav--scroll py-[16px] md:py-[16px] px-[48px] fixed top-0 left-0 right-0 z-10 transition-transform transition-colors duration-300 ease-out motion-reduce:transition-none will-change-transform ${
        opaqueBg ? 'bg-brand-tertiary' : 'bg-brand-tertiary/50'
      } ${hidden ? '-translate-y-full pointer-events-none' : 'translate-y-0'}`}
      aria-label="Main Navigation"
    >
      <div className="nav__container grid grid-cols-12">
        <div className="hidden lg:flex col-start-1 col-end-7 items-center gap-xs text-xs">
           <a href="#what-i-do" className="bg-brand-secondary font-sofia-pro--bold text-brand-tertiary rounded-full px-s py-[4px]">What I do</a>
           <a href="#where-ive-been" className="bg-brand-secondary font-sofia-pro--bold text-brand-tertiary rounded-full px-s py-[4px]">Where I've been</a>
           <a href="#contact" className="bg-brand-secondary font-sofia-pro--bold text-brand-tertiary rounded-full px-s py-[4px]">Contact</a>
          </div>
        <div className="col-start-1 md:col-start-12 md:col-end-13 flex justify-end lg:translate-x-[-21px] items-center">
          <Logo className="w-[64px] h-auto" width={68} height={48} />
        </div>
      </div>
    </nav>
  )
}
