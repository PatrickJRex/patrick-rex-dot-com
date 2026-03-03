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
 <div className="pl-m md:pl-xxl pt-m md:pt-xxl max-w-[1920px] mx-auto relative z-10">
 <h2 className="type-h2 col-start-1 col-end-4 bg-gradient-to-r from-brand-primary via-50% via-brand-secondary to-brand-secondary text-transparent bg-clip-text">Where I've Worked</h2>
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