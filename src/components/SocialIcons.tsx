import React from 'react';

// X (Twitter) Icon Component
const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L5.551 21.75H2.232l7.73-8.835L1.456 2.25h6.823l4.978 6.588L18.244 2.25zM17.831 19.75h1.634L6.888 3.882H5.156l12.675 15.868z" />
  </svg>
);

// Discord Icon Component
const DiscordIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3671C18.7975 3.5975 17.151 3.15 15.4625 3C15.2175 3.3425 14.9475 3.8925 14.7425 4.34C12.9625 4.0575 11.1975 4.0575 9.4525 4.34C9.2475 3.8925 8.9675 3.3425 8.7175 3C6.0725 3.35 4.4275 3.565 3.0325 4.3675C0.533747 8.235 -0.31566 12.01 0.0991801 15.7315C1.91577 17.1275 3.71892 17.9605 5.50242 18.3825C6.02817 17.6045 6.52042 16.775 6.95417 15.8925C6.14692 15.6075 5.36677 15.2451 4.6175 14.8126C4.78077 14.6851 4.94347 14.5548 5.10548 14.4173C8.3385 16.1735 12.1197 16.9733 15.7772 14.4164C15.9369 14.5533 16.0988 14.6827 16.2608 14.8126C15.5054 15.2477 14.7215 15.6106 13.9112 15.8954C14.3451 16.778 14.8374 17.6045 15.3621 18.3826C17.1456 17.9606 18.9487 17.1275 20.7652 15.7315C21.2172 11.8555 20.2132 8.0975 20.317 4.3671ZM8.02002 13.9475C6.8375 13.9475 5.86501 12.9611 5.86501 11.7345C5.86501 10.5079 6.8184 9.5215 8.02002 9.5215C9.22164 9.5215 10.1701 10.5079 10.1701 11.7345C10.1701 12.9611 9.22164 13.9475 8.02002 13.9475ZM15.9988 13.9475C14.8163 13.9475 13.8438 12.9611 13.8438 11.7345C13.8438 10.5079 14.7988 9.5215 15.9988 9.5215C17.1988 9.5215 18.1701 10.5079 18.1701 11.7345C18.1701 12.9611 17.1988 13.9475 15.9988 13.9475Z" />
  </svg>
);

// Telegram Icon Component (Paper airplane style)
const TelegramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M501.7 89.7L466.5 432.3c-2.6 23.6-20.4 33.6-41.3 21l-114.7-84.7-55.2 53.2c-6.1 6.1-11.2 11.2-23 11.2l8.2-116.7L411.1 164c8.7-7.7-1.9-12-13.5-4.3L155 296.3 42.7 261c-24.4-7.7-24.9-24.4 5.1-36.1L468.7 54.3c20.4-7.6 38.3 5.1 33 35.4z"/>
  </svg>
);

interface SocialLinksProps {
  size?: number;
  showLabels?: boolean;
  className?: string;
}

// Main Social Links Component - renders all three icons with links
const SocialLinks: React.FC<SocialLinksProps> = ({ size = 24, showLabels = false, className = '' }) => {
  const socialLinks = [
    {
      name: 'X',
      url: 'https://x.com/midl_xyz',
      icon: XIcon,
    },
    {
      name: 'Discord',
      url: 'https://discord.com/invite/midl',
      icon: DiscordIcon,
    },
    {
      name: 'Telegram',
      url: 'https://t.me/midl_xyz',
      icon: TelegramIcon,
    },
  ];

  return (
    <div className={`social-links-container ${className}`}>
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="social-link-item"
          title={name}
          aria-label={`Visit ${name}`}
        >
          <Icon size={size} className="social-icon" />
          {showLabels && <span className="social-label">{name}</span>}
        </a>
      ))}

      <style>{`
        .social-links-container {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .social-link-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: currentColor;
          opacity: 0.7;
          transition: opacity 0.2s ease, transform 0.2s ease;
          text-decoration: none;
        }

        .social-link-item:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-label {
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 600px) {
          .social-links-container {
            gap: 0.75rem;
          }

          .social-link-item {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export { XIcon, DiscordIcon, TelegramIcon, SocialLinks };
export default SocialLinks;
