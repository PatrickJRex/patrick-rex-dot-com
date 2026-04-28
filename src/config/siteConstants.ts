import type { IconType } from 'react-icons';
import {FiLinkedin, FiMail, FiGithub} from 'react-icons/fi';

type SocialLink = {
    url: string;
    icon: IconType;
    text: string;
};

export const SITE_CONSTANTS: { SOCIAL_LINKS: Record<string, SocialLink> } = {
    SOCIAL_LINKS: {
        GitHub: {
            url: 'https://github.com/PatrickJRex',
            icon: FiGithub,
            text: 'GitHub',
        },
        LinkedIn: {
            url: 'https://www.linkedin.com/in/patrickjrex',
            icon: FiLinkedin,
            text: 'LinkedIn',
        },
        Email: {
            url: 'mailto:prexdesigns@gmail.com?subject=Hello Patrick, I\'m interested in your services',
            icon: FiMail,
            text: 'Email',
        },
    },
};