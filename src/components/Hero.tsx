import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-new.jpg';
import { SocialLinks } from './SocialIcons';
import TypeWriter from './TypeWriter';
import '../styles/animations.css';

const Hero: React.FC = () => {
  // Mouse parallax effect
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px) scale(1.05)`
        }}
      >
      </div>

      <nav className="navbar animate-fade-in">
        <div className="logo-container">
          <img src="/midl-wordmark.png" alt="Midl" className="logo-image" />
        </div>
        <SocialLinks size={20} />
      </nav>

      <div className="hero-content">
        <div className="badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span>Midl VibeHack BTC</span>
        </div>

        <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Building on Bitcoin <br />
          <span className="text-gradient">used to be hard.</span>
        </h1>

        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Not anymore. <br /> <br />
          Welcome to the Midl Vibe Coding Contest.
          This isn’t your standard, sweaty hackathon, this is a playground.
        </p>

        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#mission" className="btn btn-primary">
            Learn more
          </a>
          <div className="submit-wrapper">
            <a href="#submit-dapp" className="btn btn-link">
              Submit your dApp <ArrowRight size={20} />
            </a>
            <span className="deadline-sticker">Before END DATE</span>
          </div>
        </div>

        <div className="typewriter-section animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <TypeWriter
            text="This was built by our most experienced dev. He didn't look at a single line of it. Deal with it"
            speed={50}
            loopDelay={2000}
          />
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-xl) var(--spacing-md);
          overflow: hidden;
          text-align: center;
          background-color: var(--color-canvas-bg);
          z-index: 1;
        }

        .hero-background {
          position: absolute;
          inset: -20px;
          z-index: -1;
          background-image: url("${heroBg}");
          background-size: cover;
          background-position: center;
          opacity: 0.6; /* Increased opacity as requested */
          transition: transform 0.1s ease-out;
          /* Seamless blend using mask */
          -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        }


        .hero-content {
          max-width: 900px; /* Increased max-width for roominess */
          z-index: 1;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: var(--color-bg-emphasized);
          border: 1px solid var(--color-border);
          border-radius: 100px;
          color: var(--color-accent-primary);
          font-weight: 500;
          font-size: 1.1rem;
          margin-bottom: 24px;
          box-shadow: none; /* Flat design */
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -2px;
          font-weight: 500; /* Removed bold (usually 700), set to medium/regular */
        }

        .text-gradient {
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-subtitle {
          font-size: 1.5rem; /* Increased size */
          color: #000000; /* Pure black as requested "like unertitle" */
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.5;
          font-weight: 500; /* Slightly more weight for the black text */
        }

        .hero-actions {
          display: flex;
          gap: 32px; /* More space between buttons */
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 100px; /* Full pill */
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }

        /* "Join the Action" style */
        .btn-primary {
          background: transparent;
          color: #000;
          border: 1px solid #000;
          box-shadow: none;
        }
        
        .btn-primary:hover {
          background: rgba(0,0,0,0.05); /* Subtle tint on hover */
          transform: translateY(-2px);
        }

        /* "Learn More" style */
        .btn-link {
          background: transparent;
          color: #000;
          border: none;
          padding: 8px 16px; /* Less padding for link */
          font-weight: 500;
        }

        .btn-link:hover {
            opacity: 0.7;
            transform: translateX(4px); /* Move right instead of up */
        }

        .submit-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .deadline-sticker {
          display: inline-block;
          padding: 6px 12px;
          background: linear-gradient(135deg, #FF7E3D 0%, #FFDE7B 100%);
          color: #000;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          transform: rotate(12deg) scale(1);
          box-shadow:
            -2px 2px 0px #000,
            -4px 4px 0px rgba(0,0,0,0.1);
          animation: stickerPanic 0.5s ease-in-out infinite alternate;
          cursor: default;
          position: absolute;
          right: -80px;
          top: -22px;
        }

        .deadline-sticker:hover {
          transform: rotate(0deg) scale(1.1);
          animation: none;
          box-shadow:
            -2px 2px 0px #000,
            -4px 4px 0px rgba(0,0,0,0.1),
            0 0 15px rgba(255,126,61,0.4);
        }

        @keyframes stickerPanic {
          0% {
            transform: rotate(12deg) scale(1);
          }
          100% {
            transform: rotate(8deg) scale(1.02);
          }
        }

        .icon-pulse {
          animation: glowPulse 2s infinite;
        }

        .navbar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo-image {
            height: 32px; /* Adjusted for wordmark */
            width: auto;
            object-fit: contain;
        }

        .typewriter-section {
          margin-top: 120px;
          padding: 20px;
          max-width: 800px;
        }

        .typewriter-container {
          display: inline-block;
          font-family: var(--font-pixel);
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          color: #000;
          line-height: 2;
          min-height: 4em;
          text-align: center;
        }

        .typewriter-text {
          display: inline;
        }

        .typewriter-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: cursorBlink 0.6s infinite;
          opacity: 1;
        }

        @keyframes cursorBlink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

      `}</style>
    </section>
  );
};

export default Hero;
