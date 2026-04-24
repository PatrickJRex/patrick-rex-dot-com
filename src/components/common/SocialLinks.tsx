import { SITE_CONSTANTS } from '../../config/siteConstants';

export function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={`social-links flex flex-row gap-s ${className}`}>
            {Object.values(SITE_CONSTANTS.SOCIAL_LINKS).map((link) => (
                <a className="type-body-link" href={link.url} aria-label={link.text} key={link.text} target="_blank" rel="noopener noreferrer">
                    {link.text}
                </a>
            ))}
        </div>
    );
}