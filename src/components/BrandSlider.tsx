import '../css/components/brand-slider.css';
const patagoniaLogo = './assets/brands/brand-logos_patagonia.svg';
const riteAidLogo = './assets/brands/brand-logos_rite-aid.svg';
const redVanLogo = './assets/brands/brand-logos_red-van-workshop.svg';
const revelystLogo = './assets/brands/brand-logos_revelyst.svg';

const brandLogos = [
  {
    name: 'Revelyst',
    logo: revelystLogo,
  },
  {
    name: 'Patagonia',
    logo: patagoniaLogo,
  },
  {
    name: 'Red Van Workshop',
    logo: redVanLogo,
  },
  {
    name: 'Rite Aid',
    logo: riteAidLogo,
  },
]

export function BrandSlider() {
  return (
    <>
 <div id="where-ive-been" className="grid grid-cols-4 lg:grid-cols-12 gap-4 items-end
 brand-slider-heading px-m md:px-xxl pt-xxl w-full max-w-[1920px] mx-auto relative z-10">
<hr className="brand-slider-divider block col-start-1 col-end-13 border-b border-brand-secondary mb-xxl" />
 <h2 className="type-h1 leading-none col-start-1 col-end-5">Where <br/> I've Been</h2>
 <div className="col-start-1 col-end-5 lg:col-start-9 lg:col-end-13">
  <p className="type-body text-brand-quaternary"> 
    I've worked with a variety of brands, from small startups to large enterprises.
    No matter where I go, I bring my passion for creating beautiful and functional websites.
  </p>
 </div>
 </div>
   <div className="brand-slider-container px-xxl max-w-[1920px] mx-auto relative z-10">
      <div className="brand-slider mx-auto">
       <div className="brand-slider-inner">
        {brandLogos.map((logo) => (
          <div className="brand-slider-item" key={logo.name}>
            <img src={logo.logo} alt={logo.name} />
          </div>
        ))}
       </div>
    </div>
    </div>
    </>
  );
}