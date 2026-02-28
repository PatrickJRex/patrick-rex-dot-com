import '../css/components/Hero.css';
const imgLogoMark = './assets/logo.svg'
const imgLastName = './assets/surname.svg'

export function Hero() {

  return (
    <section className="hero" aria-label="Introduction">

      <div className="hero__grid">
        <img className="hero__logo-mark" src={imgLogoMark} alt="patrick rex logo - crown image" aria-hidden="true" />

        <div className="hero__intro type-h2">
          <p>Hello, I&apos;m Patrick.</p>
          <p>
            I&apos;m a <span className="hero__code-gradient">&lt;front-end&gt;</span> focused developer &
            designer.
          </p>
        </div>

    <div className="hero__nameplate">
   
    <p className="hero-first-name">
          patrick
        </p>
    <img src={imgLastName} className="hero-surname" alt="patrick rex logo - crown image" aria-hidden="true" />
    </div>
    

        <p className="hero__down-arrow" aria-hidden="true">
          ↓
        </p>

        <div className="hero__what-i-do">
          <h2 className="type-h2 hero__what-i-do-heading">What I do</h2>
          <p className="type-body hero__what-i-do-copy">
            By day, I&apos;m a Salesforce Commerce Cloud II Developer at <a href="https://revelyst.com" target="_blank" rel="noopener noreferrer" className="type-body-link">Revelyst</a>, teaming up
            with marketers, designers, &amp; fellow devs to bring storefronts to life.
            <br />
            <br />
            By night (and the occasional weekend), I craft bespoke websites in React or go old-school with
            hand-coded HTML, CSS, &amp; JS-because sometimes the classics just feel right.
          </p>
          <ul className="type-body hero__what-i-do-list">
            <li>Front-end development</li>
            <li>UX / Graphic Design</li>
            <li>-------------------------</li>
            <li>Salesforce Commerce Cloud</li>
            <li>Shopify</li>
            <li>React/Nextjs</li>
            <li>Contentful</li>
            <li>Wordpress</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
