import '../css/components/brand-mark.css'
import brandMark from '/assets/brand-mark.svg'
import { useEffect, useRef } from 'react'

export function BrandMark() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const containerEl = containerRef.current
        const imageEl = imageRef.current

        if (!containerEl || !imageEl) {
            return
        }

        let inView = false
        let ticking = false

        const updateRotation = () => {
            ticking = false

            if (!inView) {
                return
            }

            const rect = containerEl.getBoundingClientRect()
            const viewportCenter = window.innerHeight / 2
            const elementCenter = rect.top + rect.height / 2

            // Normalize center distance to [-1, 1] and map to degrees.
            const normalized = Math.max(-1, Math.min(1, (viewportCenter - elementCenter) / viewportCenter))
            const rotationDeg = normalized * 180

            imageEl.style.setProperty('--brand-mark-rotation', `${rotationDeg}deg`)
        }

        const onScroll = () => {
            if (ticking) {
                return
            }

            ticking = true
            window.requestAnimationFrame(updateRotation)
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                inView = entry.isIntersecting
                if (inView) {
                    updateRotation()
                }
            },
            {
                threshold: 0.1,
            },
        )

        observer.observe(containerEl)
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        updateRotation()

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <div ref={containerRef} className="brand-mark absolute bottom-0 right-0 overflow-hidden">
            <img
                ref={imageRef}
                src={brandMark}
                aria-hidden="true"
                alt="brand mark"
                className="brand-mark__image w-full h-full object-cover opacity-30"
            />
        </div>
    );
}