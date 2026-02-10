import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Terminal, Book, Box, Wallet, FileText } from 'lucide-react';

const Toolkit: React.FC = () => {
  const { t } = useTranslation();

  const tools = [
    { nameKey: 'toolkit.tools.sdk', url: 'https://js.midl.xyz', icon: <Book /> },
    { nameKey: 'toolkit.tools.docs', url: 'https://js.midl.xyz/llms.txt', icon: <Box /> },
    { nameKey: 'toolkit.tools.github', url: 'https://github.com/midl-xyz/dapp-demo', icon: <Terminal /> },
    { nameKey: 'toolkit.tools.faucet', url: 'https://faucet.midl.xyz/', icon: <ExternalLink /> },
    { nameKey: 'toolkit.tools.midlExplorer', url: 'https://blockscout.staging.midl.xyz', icon: <ExternalLink /> },
    { nameKey: 'toolkit.tools.btcExplorer', url: 'https://mempool.staging.midl.xyz', icon: <ExternalLink /> },
    { nameKey: 'toolkit.tools.xverse', url: 'https://www.xverse.app/download', icon: <Wallet /> },
    { nameKey: 'toolkit.tools.contestDetails', url: 'https://midl.xyz/blog/Midl-VibeHack-BTC', icon: <FileText /> },
  ];

  return (
    <section id="toolkit" className="toolkit-section">
      <div className="container">
        <h2 className="section-title">{t('toolkit.title')}</h2>
        <p className="subtitle">{t('toolkit.subtitle')}</p>

        <div className="tools-grid">
          {tools.map((tool) => (
            <a key={tool.nameKey} href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-card hover-lift">
              <div className="icon-wrapper">{tool.icon}</div>
              <h3>{t(tool.nameKey)}</h3>
              <div className="arrow">→</div>
            </a>
          ))}
        </div>

        <div className="support-vibes">
          <h3>{t('toolkit.support.title')}</h3>
          <p>{t('toolkit.support.description')}</p>
          <a href="https://discord.com/invite/midl" target="_blank" rel="noopener noreferrer" className="btn btn-discord hover-lift">
            {t('toolkit.support.button')}
          </a>
        </div>
      </div>

      <style>{`
        .toolkit-section {
          padding: var(--spacing-xl) var(--spacing-md);
          background-color: var(--color-canvas-bg);
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          text-align: center;
          color: var(--color-text-muted);
          margin-bottom: 3rem;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .tool-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          background: var(--color-bg-focus);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          text-align: center;
          color: var(--color-text-main);
          transition: border-color 0.3s;
          box-shadow: none; /* Removed shadow for cleaner look pending guidelines */
        }

        .tool-card:hover {
          border-color: var(--color-accent-primary);
        }

        .icon-wrapper {
          color: var(--color-accent-primary);
          margin-bottom: 1rem;
        }

        .arrow {
          margin-top: 1rem;
          opacity: 1;
          transition: all 0.3s;
          color: var(--color-accent-primary);
        }

        .tool-card:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .support-vibes {
          background: var(--color-bg-focus);
          border: 2px solid var(--color-accent-primary);
          padding: 3rem;
          border-radius: var(--radius-md);
          text-align: center;
          color: var(--color-text-main);
          margin-top: 4rem;
          box-shadow: none; /* Flat design */
        }

        .support-vibes h3 {
          color: var(--color-text-main);
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .support-vibes p {
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .btn-discord {
          background: var(--gradient-accent);
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-weight: 500;
          display: inline-block;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 126, 61, 0.3);
        }

        .btn-discord:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 126, 61, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Toolkit;
