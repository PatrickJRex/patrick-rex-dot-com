import '../css/components/Hero.css';
const imgLastName = './assets/surname.svg'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

export function Hero() {

  return (
    <section className="hero pt-[120px] md:pt-[64px]" aria-label="Introduction">

      <div className="hero__grid">
        <div className="hero__intro type-h2">
          <p>Hello, I&apos;m Patrick.</p>
          <p>
            I&apos;m a <span className="hero__code-gradient">&lt;front-end&gt;</span> focused developer &
            designer.
          </p>
        </div>

        <div className="hero-mobile-buttons pt-s flex flex-row gap-s sm:hidden">
        <a href="https://github.com/PatrickJRex" target="_blank" rel="noopener noreferrer" className="hero-mobile-buttons__button font-body border-1 border-brand-secondary rounded-full px-m py-xs bg-brand-secondary/10 text-brand-secondary">
         <span className="sr-only">GitHub</span>
        <FaGithub className="w-6 h-6" /> </a>
         <a href="https://www.linkedin.com/in/patrickjrex" target="_blank" rel="noopener noreferrer" className="font-body border-1 border-brand-secondary rounded-full px-m py-xs bg-brand-secondary/10 text-brand-secondary"><span className="sr-only">LinkedIn</span><FaLinkedin className="w-6 h-6" /></a>
         <a href="mailto:prexdesigns@gmail.com?subject=Hello Patrick, I'm interested in your services" target="_blank"
          rel="noopener noreferrer" 
          className="font-body border-1 border-brand-secondary 
          rounded-full px-m py-xs bg-brand-secondary/10 text-brand-secondary"><span className="sr-only">Email</span><FaEnvelope className="w-6 h-6" /></a>
        </div>

        <div className="hero__nameplate hidden sm:block h-[300px] sm:h-auto">
      
        <p className="hero-first-name">
              patrick
            </p>
        <img
          src={imgLastName}
          className="hero-surname"
          alt="REX"
          aria-hidden="true"
          width={1349}
          height={529}
          decoding="async"
          fetchPriority="high"
        />
        </div>
    

        <p className="hero__down-arrow hidden sm:block" aria-hidden="true">
          <span className="hero__down-arrow-icon">↓</span>
        </p>
      </div>
    </section>
  )
}
