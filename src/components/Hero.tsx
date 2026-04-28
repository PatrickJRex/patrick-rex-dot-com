import '../css/components/Hero.css';
import NamePlate from './common/NamePlate';

export function Hero() {
  return (
    <section data-scroll-theme="dark" className="hero pt-[80px] lg:pt-[120px] md:pt-[64px]" aria-label="Introduction">
    <div className="hero-container  pt-xxl grid grid-cols-12 gap-4  px-[48px]">
    <div className="border-t border-brand-quaternary pt-m  pb-m lg:pb-xxl col-start-1 col-end-13 sm:h-auto">
    <NamePlate fill="currentColor" />
      </div>

      <div className="hero-content col-start-1 col-end-13 lg:col-end-7 pb-[80px]">
    <div className="type-h2">
          <p>Hello, I&apos;m Patrick.</p>
          <p>
            I&apos;m a <span className="hero__code-gradient">&lt;front-end&gt;</span> focused developer &
            designer.
          </p>
        </div>
    </div>
    </div>

  

    
    </section>
  )
}
