export function WhatIDo() {
    return (
        <div className="what-i-do grid grid-cols-4 gap-4 lg:grid-cols-12 relative z-10 px-l lg:px-xxl mb-xl">
        <div className="what-i-do-heading col-start-1 col-end-5"> 
            <h2 className="type-h2 bg-gradient-to-r from-brand-primary via-50% via-brand-secondary to-brand-secondary text-transparent bg-clip-text">What I do</h2>
            </div>
        <section className="what-i-do-content col-start-1 col-end-5 lg:col-start-5 lg:col-end-9">
        <p className="type-body what-i-do-copy">
          By day, I&apos;m a Salesforce Commerce Cloud II Developer at <a href="https://revelyst.com" target="_blank" rel="noopener noreferrer" className="type-body-link">Revelyst</a>, teaming up
          with marketers, designers, &amp; fellow devs to bring storefronts to life.
          <br />
          <br />
          By night (and the occasional weekend), I craft bespoke websites in React or go old-school with
          hand-coded HTML, CSS, &amp; JS-because sometimes the classics just feel right.
        </p>
        </section>
        <section className="what-i-do-skills col-start-1 col-end-4 md:col-start-10 md:col-end-13">
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
    )
}