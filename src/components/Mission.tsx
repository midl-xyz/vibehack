import React from 'react';
import '../styles/animations.css';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="mission-section">
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">The Mission</h2>
        <p className="lead-text animate-fade-in">
          Go from "What if?" to "Transaction Confirmed."
        </p>

        <div className="grid-layout">
          <div className="glass-card hover-lift">
            <h3>Vibe Code</h3>
            <p>
              Take a raw idea, use AI to speed-run the development, and run a working
              concept on Midl’s testnet in days, not months.
            </p>
          </div>

          <div className="glass-card hover-lift">
            <h3>Midl Power</h3>
            <p>
              Experience the friction-free power of Midl infrastructure. If you know how
              to prompt, you already know how to build on Bitcoin.
            </p>
          </div>

          <div className="glass-card hover-lift">
            <h3>Make it Pop</h3>
            <p>
              We are raising the bar on visuals. No default UIs.
              Your app should feel like a product.
            </p>
          </div>
        </div>

        <div className="requirements-section">
          <h3>The Requirements</h3>
          <div className="roadmap">
            <div className="checkpoint">
              <div className="marker">1</div>
              <div className="content">
                <h4>Front End Design</h4>
                <p>Demonstrate your AI design skills with a proper UI.</p>
              </div>
            </div>
            <div className="checkpoint">
              <div className="marker">2</div>
              <div className="content">
                <h4>User Flow</h4>
                <p>A user triggers an action in your UI.</p>
              </div>
            </div>
            <div className="checkpoint">
              <div className="marker">3</div>
              <div className="content">
                <h4>Logic & Interaction</h4>
                <p>Action interacts with Midl infrastructure (RPC/SDK).</p>
              </div>
            </div>
            <div className="checkpoint">
              <div className="marker">4</div>
              <div className="content">
                <h4>On-Chain Proof</h4>
                <p>Result verifiable via transaction hash.</p>
              </div>
            </div>
            <div className="checkpoint">
              <div className="marker">5</div>
              <div className="content">
                <h4>Feedback Loop</h4>
                <p>UI updates to reflect the new state.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="deliverables-section">
          <h3>Required Deliverables</h3>
          <p className="subtitle">Deployment is not required if it runs locally.</p>

          <div className="deliverables-grid">
            <div className="deliverable-card">
              <span className="icon">🎥</span>
              <h4>Video Demo</h4>
              <p>Full loop: App presentation, Wallet connect, User Action, Sign, UI Update.</p>
            </div>
            <div className="deliverable-card">
              <span className="icon">⛓️</span>
              <h4>Transaction Proof</h4>
              <p>Links to deployed contracts and successful transactions.</p>
            </div>
            <div className="deliverable-card">
              <span className="icon">💻</span>
              <h4>Code Repository</h4>
              <p>Link to repo or code walkthrough video.</p>
            </div>
            <div className="deliverable-card">
              <span className="icon">📢</span>
              <h4>Public Post</h4>
              <p>Link to your submission social post.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mission-section {
          padding: var(--spacing-xl) var(--spacing-md);
          background: linear-gradient(to bottom, var(--color-bg-deep), var(--color-bg-charcoal));
        }
        
        .container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .lead-text {
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: 4rem;
          color: var(--color-text-muted);
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .glass-card {
          background: var(--glass-bg);
          border: var(--glass-border);
          padding: 2rem;
          border-radius: var(--radius-md);
          backdrop-filter: blur(10px);
        }

        .glass-card h3 {
          color: var(--color-accent-primary);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .requirements-section {
          margin-bottom: 4rem;
        }

        .roadmap {
            display: flex;
            justify-content: space-between;
            position: relative;
            margin-top: 3rem;
            flex-wrap: wrap;
            gap: 2rem;
        }

        .roadmap::before {
            content: '';
            position: absolute;
            top: 25px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--color-border);
            z-index: 0;
            display: none; /* Hidden on mobile/wrap */
        }

        @media (min-width: 768px) {
            .roadmap::before { display: block; }
        }

        .checkpoint {
            position: relative;
            z-index: 1;
            flex: 1;
            min-width: 150px;
            text-align: center;
        }

        .marker {
            width: 50px;
            height: 50px;
            background: var(--color-bg-deep);
            border: 2px solid var(--color-accent-primary);
            color: var(--color-accent-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
            margin: 0 auto 1rem;
            box-shadow: 0 0 15px rgba(247, 147, 26, 0.2);
        }

        .checkpoint h4 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: var(--color-text-main);
        }

        .checkpoint p {
            font-size: 0.9rem;
            color: var(--color-text-muted);
        }

        .deliverables-section {
            background: var(--color-bg-charcoal);
            padding: 3rem;
            border-radius: var(--radius-md);
        }

        .deliverables-section h3 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        .subtitle {
            text-align: center;
            color: var(--color-text-muted);
            margin-bottom: 2rem;
        }

        .deliverables-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .deliverable-card {
            background: var(--color-bg-deep);
            padding: 1.5rem;
            border-radius: var(--radius-sm);
            text-align: center;
            border: 1px solid var(--color-border);
        }

        .deliverable-card .icon {
            font-size: 2rem;
            display: block;
            margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Mission;
