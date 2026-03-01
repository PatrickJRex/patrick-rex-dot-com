import '../css/components/footer.css';

export function Footer() {
    return (
        <footer className="footer px-m md:px-xl">
            <div className="footer-content gap-s md:gap-m">
                <div className="copyright">
                    <p className="type-body">©{new Date().getFullYear()} Patrick Rex. All rights reserved. </p>
                </div>
                <div className="footer-links"> 
                <a href="https://github.com/PatrickJRex" rel="noopener noreferrer" target="_blank" className="type-body-link">GitHub</a>
                <a href="https://www.linkedin.com/in/patrickjrex" rel="noopener noreferrer" target="_blank" className="type-body-link">LinkedIn</a>
                <a href="mailto:prexdesigns@gmail.com?subject=Hello Patrick, I'm interested in your services" rel="noopener noreferrer" target="_blank" className="type-body-link">Email</a>
                </div>
            </div>
        </footer>
    );
}