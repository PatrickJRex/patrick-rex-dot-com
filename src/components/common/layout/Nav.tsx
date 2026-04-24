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
      className={`nav nav--scroll py-[16px] md:py-[8px] px-[24px] lg:px-[48px] backdrop-blur-[10px] fixed top-0 left-0 right-0 z-10 filter-blur-[10px] transition-transform transition-colors duration-300 ease-out motion-reduce:transition-none will-change-transform ${
        opaqueBg ? 'bg-black/30' : 'bg-black/0'
      } ${hidden ? '-translate-y-full pointer-events-none' : 'translate-y-0'}`}
      aria-label="Main Navigation"
    >
      <div className="nav__container grid grid-cols-12">
        <div className="col-start-1 md:col-start-12 md:col-end-13 flex justify-end lg:translate-x-[-21px] items-center">
          <Logo className="w-[68px] h-auto" width={68} height={48} />
        </div>
      </div>
    </nav>
  )
}
