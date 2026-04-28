import { SITE_CONSTANTS } from '../../config/siteConstants';



export function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={`social-links flex flex-row items-center gap-m ${className}`}>
            {Object.values(SITE_CONSTANTS.SOCIAL_LINKS).map((link) => {
                const Icon = link.icon;

                return (
                    <a className="type-body-link group flex flex-col items-center gap-xs" href={link.url} aria-label={link.text} key={link.text} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-step-2 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out group"/>
                    <span className="text-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">{link.text}</span>
                </a>
                );
            })}
        </div>
    );
}