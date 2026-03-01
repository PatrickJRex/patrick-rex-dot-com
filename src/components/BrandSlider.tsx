import '../css/components/brand-slider.css';
const patagoniaLogo = './assets/brands/patagonia.svg';
const riteAidLogo = './assets/brands/Rite_aid_logo_2021.svg';
const redVanLogo = './assets/brands/red-van-logo.svg';
const revelystLogo = './assets/brands/revelyst-logo.svg';

export function BrandSlider() {
  return (
    <>
 <div className="pl-s md:pl-xxl pt-xxl">
 <h2 className="type-h2 col-start-1 col-end-4 bg-gradient-to-r from-brand-primary via-50% via-brand-secondary to-brand-secondary text-transparent bg-clip-text">Where I've Worked</h2>
 </div>
   <div className="brand-slider-container">
      <div className="brand-slider">
     <div className="brand-slider-inner">
     <div className="brand-slider-item">
                <img src={revelystLogo} alt="Revelyst" />
            </div>
            <div className="brand-slider-item">
                <img src={patagoniaLogo} alt="Patagonia" />
            </div>
            <div className="brand-slider-item">
                <img src={redVanLogo} alt="Red Van Workshop" />
            </div>
            <div className="brand-slider-item">
                <img src={riteAidLogo} alt="Rite Aid" />
            </div>
     </div>
     <div className="brand-slider-inner">
     <div className="brand-slider-item">
                <img src={revelystLogo} alt="Revelyst" />
            </div>
            <div className="brand-slider-item">
                <img src={patagoniaLogo} alt="Patagonia" />
            </div>
            <div className="brand-slider-item">
                <img src={redVanLogo} alt="Red Van Workshop" />
            </div>
            <div className="brand-slider-item">
                <img src={riteAidLogo} alt="Rite Aid" />
            </div>
     </div>
    </div>
    </div>
    </>
  );
}