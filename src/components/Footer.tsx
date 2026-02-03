import React from 'react';
import { SocialLinks } from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Midl. All rights reserved.</p>
          <SocialLinks size={20} className="footer-socials" />
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--color-accent-dark);
          padding: 2rem 1rem;
          color: white;
          margin-top: 0; /* Removed spacing */
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .footer-bottom {
            display: flex;
            justify-content: center;
        }

        .footer-bottom .container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: rgba(255,255,255,0.6);
            font-size: 0.9rem;
        }

        .footer-socials {
            color: rgba(255,255,255,0.6);
        }

        .footer-socials.social-links-container {
            gap: 1.5rem;
        }

        .footer-socials .social-link-item {
            color: rgba(255,255,255,0.6);
        }

        .footer-socials .social-link-item:hover {
            color: white;
        }

        @media (max-width: 600px) {
            .footer-bottom .container {
                flex-direction: column;
                gap: 1rem;
            }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
