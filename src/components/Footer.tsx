import '../css/components/footer.css';
import { SocialLinks } from './common/SocialLinks';

export function Footer() {
    return (
        <footer id="contact" className="footer px-m md:px-xl relative z-10">
            <div className="footer-content gap-s md:gap-m">
                <div className="copyright">
                    <p className="type-body">©{new Date().getFullYear()} Patrick Rex. 
                        <span className="block">All rights reserved. </span>
                    </p>
                </div>
                <SocialLinks />
            </div>
        </footer>
    );
}