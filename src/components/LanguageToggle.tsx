import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'es', label: 'ES' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'العربية' },
  { code: 'tr', label: 'TR' },
  { code: 'hi', label: 'हिंदी' }
];

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="language-dropdown" ref={dropdownRef}>
        <button
          className="language-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Select language"
          aria-expanded={isOpen}
        >
          <Globe size={16} />
          <span className="current-lang">{currentLang.label}</span>
          <ChevronDown size={14} className={`chevron ${isOpen ? 'open' : ''}`} />
        </button>

        {isOpen && (
          <div className="language-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`language-option ${lang.code === i18n.language ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .language-dropdown {
          position: relative;
        }

        .language-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid currentColor;
          border-radius: 100px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          color: currentColor;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .language-toggle:hover {
          opacity: 1;
        }

        .language-toggle .chevron {
          transition: transform 0.2s ease;
        }

        .language-toggle .chevron.open {
          transform: rotate(180deg);
        }

        .language-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: var(--color-bg-focus, #1a1a2e);
          border: 1px solid var(--color-border, rgba(255,255,255,0.1));
          border-radius: 8px;
          padding: 4px;
          min-width: 120px;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          animation: fadeIn 0.15s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .language-option {
          display: block;
          width: 100%;
          padding: 8px 12px;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          font-size: 0.85rem;
          text-align: left;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.15s ease;
        }

        .language-option:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }

        .language-option.active {
          background: var(--color-accent-primary, #f7931a);
          color: white;
        }
      `}</style>
    </>
  );
};

export default LanguageToggle;
