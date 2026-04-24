import '../css/components/Hero.css';
const imgLastName = './assets/surname.svg'
import Logo from './Logo';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

export function Hero() {

  return (
    <section className="hero" aria-label="Introduction">

      <div className="hero__grid">
        <Logo className="hero__logo-mark" />
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
        <img src={imgLastName} className="hero-surname" alt="REX" aria-hidden="true" />
        </div>
    

        <p className="hero__down-arrow hidden sm:block" aria-hidden="true">
          <span className="hero__down-arrow-icon">↓</span>
        </p>

        <div className="hero__what-i-do">
          <h2 className="type-h2 col-start-1 col-end-4 bg-gradient-to-r from-brand-primary via-50% via-brand-secondary to-brand-secondary text-transparent bg-clip-text">What I do</h2>
          <p className="type-body hero__what-i-do-copy">
            By day, I&apos;m a Salesforce Commerce Cloud II Developer at <a href="https://revelyst.com" target="_blank" rel="noopener noreferrer" className="type-body-link">Revelyst</a>, teaming up
            with marketers, designers, &amp; fellow devs to bring storefronts to life.
            <br />
            <br />
            By night (and the occasional weekend), I craft bespoke websites in React or go old-school with
            hand-coded HTML, CSS, &amp; JS-because sometimes the classics just feel right.
          </p>
          <section className="hero__what-i-do-skills col-start-1 col-end-4 md:col-start-10 md:col-end-13">
          <h2 className="type-h2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-secondary text-transparent bg-clip-text block pt-s pb-s sm:hidden">Skills</h2>
          <ul className="type-body hero__what-i-do-list" aria-label="My Skills">
            <li>Front-end development</li>
            <li>UX / Graphic Design</li>
            <li aria-hidden="true">-------------------------</li>
            <li>Salesforce Commerce Cloud</li>
            <li>Shopify</li>
            <li>React/Nextjs</li>
            <li>Contentful</li>
            <li>Wordpress</li>
            <li>Tailwind CSS</li>
          </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
