import React from 'react';
import { Calendar, Trophy, CheckCircle } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title text-gradient">The Plan</h2>

        <div className="prize-banner hover-lift">
          <div className="prize-block">
            <Trophy size={48} className="icon-gold" />
            <div className="prize-content">
              <h3>Grand Prize</h3>
              <p className="prize-amount">$1000 USDT</p>
              <p>For the ultimate vibe coder.</p>
            </div>
          </div>
          <div className="vertical-divider"></div>
          <div className="prize-block">
            <Trophy size={48} className="icon-silver" />
            <div className="prize-content">
              <h3>Community Prize</h3>
              <p className="prize-amount">CLAUDE Credits</p>
              <p>$200 of credits for top 5 entries</p>
            </div>
          </div>
        </div>

        <div className="split-layout">
          <div className="timeline-column">
            <h3>Timeline</h3>
            <div className="timeline-item">
              <Calendar className="icon-accent" />
              <div>
                <h4>Kickoff</h4>
                <p>[INSERT DATE]</p>
              </div>
            </div>
            <div className="timeline-item">
              <Calendar className="icon-accent" />
              <div>
                <h4>Submission Window</h4>
                <p>7 Days</p>
              </div>
            </div>
            <div className="timeline-item">
              <CheckCircle className="icon-accent" />
              <div>
                <h4>Voting period</h4>
                <p>Community (2 days) + Council (5 days)</p>
              </div>
            </div>
          </div>

          <div className="evaluation-column">
            <h3>Evaluation Criteria</h3>
            <ul className="criteria-list">
              <li>
                <strong>Phase 1: Community Vote</strong>
                <p>Top 5 shortlisted by public vote on X.</p>
              </li>
              <li>
                <strong>Phase 2: The Council</strong>
                <p>Judged on Technical Execution, Midl Mastery, and Product Feel.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-section {
          padding: var(--spacing-xl) var(--spacing-md);
          background: linear-gradient(to top, var(--color-canvas-bg), var(--color-bg-emphasized));
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        .prize-banner {
          background: var(--color-bg-focus);
          border: 1px solid var(--color-border);
          padding: 2rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 4rem;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .prize-block {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            text-align: left;
        }
        
        .vertical-divider {
            width: 1px;
            height: 80px;
            background: var(--color-border);
            display: none;
        }

        @media (min-width: 768px) {
            .vertical-divider { display: block; }
        }

        .icon-gold {
          color: #FFD700;
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
        }

        .icon-silver {
            color: #C0C0C0;
            filter: drop-shadow(0 0 10px rgba(192, 192, 192, 0.5));
        }

        .prize-amount {
          font-size: 2.5rem;
          font-weight: 500;
          color: var(--color-text-main);
          margin: 0;
          line-height: 1;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        @media (max-width: 768px) {
          .split-layout {
            grid-template-columns: 1fr;
          }
        }

        .timeline-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: center;
        }

        .icon-accent {
          color: var(--color-accent-primary);
        }

        .criteria-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .criteria-list li {
          background: var(--color-bg-focus);
          box-shadow: none;
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          border-left: 3px solid var(--color-accent-primary);
        }
      `}</style>
    </section>
  );
};

export default Timeline;
