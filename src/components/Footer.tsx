import '../css/components/footer.css';
import { SocialLinks } from './common/SocialLinks';

export function Footer() {
    return (
        <footer className="footer px-m md:px-xl relative z-10">
            <div className="footer-content gap-s md:gap-m">
                <div className="copyright">
                    <p className="type-body">©{new Date().getFullYear()} Patrick Rex. All rights reserved. </p>
                </div>
                <SocialLinks />
            </div>
        </footer>
    );
}