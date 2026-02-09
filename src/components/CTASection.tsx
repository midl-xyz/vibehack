import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ArrowRight } from 'lucide-react';
import ctaBg from '../assets/cta-bg.jpeg';

const CTASection: React.FC = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="submit-dapp" className="cta-section">
                <div className="cta-background"></div>
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">{t('cta.title')}</h2>
                        <p className="cta-subtitle">
                            {t('cta.subtitle')}
                        </p>
                        <button className="btn btn-primary lg hover-lift" onClick={() => setIsModalOpen(true)}>
                            {t('cta.button')} <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                            <X size={24} />
                        </button>
                        <iframe
                            src="https://quasar-orbit-aa5.notion.site/ebd//302362757c9880849793deaa0756bbbc"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

            <style>{`
        .cta-section {
          padding: var(--spacing-xl) var(--spacing-md);
          background-color: var(--color-bg-emphasized);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-background {
            position: absolute;
            inset: 0;
            z-index: 0;
            background-image: url("${ctaBg}");
            background-size: cover;
            background-position: center;
            opacity: 0.85;
            pointer-events: none;
        }

.container {
    position: relative;
    z-index: 1; /* Ensure content is above bg */
    max-width: 800px;
    margin: 0 auto;
}
        /* Subtle background accent for emphasis */
        .cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--color-accent-primary), transparent);
            opacity: 0.3;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1.5rem;
          color: #fff;
          letter-spacing: -1px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .cta-subtitle {
          font-size: 1.25rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 0 1px 5px rgba(0,0,0,0.2);
        }

        .btn.lg {
            font-size: 1.25rem;
            padding: 1.25rem 3rem;
            border-radius: 100px;
            gap: 12px;
            background: #fff;
            color: #000;
            border: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .btn.lg:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        
        .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.8);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            backdrop-filter: blur(5px);
        }

        .modal-content {
            background: white;
            width: 95%;
            max-width: 1000px;
            height: 90vh;
            border-radius: var(--radius-md);
            position: relative;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: none;
            border: 1px solid var(--color-border);
            z-index: 10;
        }
        
        .close-btn:hover {
            background: var(--color-bg-emphasized);
        }
      `}</style>
        </>
    );
};

export default CTASection;
