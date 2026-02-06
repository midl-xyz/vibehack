import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, CheckCircle, Award } from 'lucide-react';

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title text-gradient">{t('timeline.title')}</h2>

        {/* Prize Pool - Inline Layout */}
        <div className="prize-section">
          <h3 className="prize-title">{t('timeline.prizes.title')}</h3>

          {/* Top 3 Podium */}
          <div className="podium-container">
            {/* 2nd Place */}
            <div className="prize-item prize-second">
              <div className="prize-place">{t('timeline.prizes.second.place')}</div>
              <div className="prize-credits">{t('timeline.prizes.second.credits')}</div>
              <div className="xverse-package">
                <div className="xverse-tag">{t('timeline.prizes.second.xverse.tag')}</div>
                <div className="xverse-value">{t('timeline.prizes.second.xverse.value')}</div>
                <ul className="xverse-bullets">
                  <li>{t('timeline.prizes.second.xverse.bullet1')}</li>
                  <li>{t('timeline.prizes.second.xverse.bullet2')}</li>
                </ul>
              </div>
            </div>

            {/* 1st Place - Center */}
            <div className="prize-item prize-first">
              <div className="council-badge">
                <Award size={14} />
                {t('timeline.prizes.first.badge')}
              </div>
              <div className="prize-place">{t('timeline.prizes.first.place')}</div>
              <div className="prize-amount">{t('timeline.prizes.first.cash')}</div>
              <div className="prize-credits">{t('timeline.prizes.first.credits')}</div>
              <div className="xverse-package">
                <div className="xverse-tag">{t('timeline.prizes.first.xverse.tag')}</div>
                <div className="xverse-value">{t('timeline.prizes.first.xverse.value')}</div>
                <ul className="xverse-bullets">
                  <li>{t('timeline.prizes.first.xverse.bullet1')}</li>
                  <li>{t('timeline.prizes.first.xverse.bullet2')}</li>
                </ul>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="prize-item prize-third">
              <div className="prize-place">{t('timeline.prizes.third.place')}</div>
              <div className="prize-credits">{t('timeline.prizes.third.credits')}</div>
              <div className="xverse-package">
                <div className="xverse-tag">{t('timeline.prizes.third.xverse.tag')}</div>
                <div className="xverse-value">{t('timeline.prizes.third.xverse.value')}</div>
                <ul className="xverse-bullets">
                  <li>{t('timeline.prizes.third.xverse.bullet1')}</li>
                  <li>{t('timeline.prizes.third.xverse.bullet2')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4th and 5th Place - Below */}
          <div className="runners-row">
            <div className="prize-item prize-runner">
              <div className="prize-place">{t('timeline.prizes.fourth.place')}</div>
              <div className="prize-credits">{t('timeline.prizes.fourth.credits')}</div>
            </div>
            <div className="prize-item prize-runner">
              <div className="prize-place">{t('timeline.prizes.fifth.place')}</div>
              <div className="prize-credits">{t('timeline.prizes.fifth.credits')}</div>
            </div>
          </div>
        </div>

        <div className="split-layout">
          <div className="timeline-column">
            <h3>{t('timeline.sectionTitle')}</h3>

            <div className="timeline-item">
              <Calendar className="icon-accent" />
              <div>
                <h4>{t('timeline.phases.kickoff.title')}</h4>
                <p>{t('timeline.phases.kickoff.date')}</p>
              </div>
            </div>

            <div className="timeline-item">
              <Calendar className="icon-accent" />
              <div>
                <h4>{t('timeline.phases.submission.title')}</h4>
                <p>{t('timeline.phases.submission.date')}</p>
                <span className="duration-badge">{t('timeline.phases.submission.duration')}</span>
              </div>
            </div>

            <div className="timeline-item">
              <CheckCircle className="icon-accent" />
              <div>
                <h4>{t('timeline.phases.publicVote.title')}</h4>
                <p>{t('timeline.phases.publicVote.date')}</p>
                <span className="announcement-text">{t('timeline.phases.publicVote.announcement')}</span>
              </div>
            </div>

            <div className="timeline-item">
              <Award className="icon-accent" />
              <div>
                <h4>{t('timeline.phases.councilVote.title')}</h4>
                <p>{t('timeline.phases.councilVote.date')}</p>
                <span className="announcement-text">{t('timeline.phases.councilVote.announcement')}</span>
              </div>
            </div>
          </div>

          <div className="evaluation-column">
            <h3>{t('timeline.evaluation.title')}</h3>
            <ul className="criteria-list">
              <li>
                <strong>{t('timeline.evaluation.phase1.title')}</strong>
                <p>{t('timeline.evaluation.phase1.description')}</p>
              </li>
              <li>
                <strong>{t('timeline.evaluation.phase2.title')}</strong>
                <p>{t('timeline.evaluation.phase2.description')}</p>
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
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Prize Section - Flat Midl Design */
        .prize-section {
          margin-bottom: 4rem;
        }

        .prize-title {
          text-align: center;
          font-size: 1.75rem;
          margin-bottom: 2.5rem;
          color: var(--color-text-main);
        }

        .podium-container {
          display: flex;
          gap: 1rem;
          align-items: flex-end;
          justify-content: center;
          width: 100%;
        }

        .prize-item {
          padding: 1.25rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          text-align: center;
          flex: 1;
          max-width: 320px;
        }

        .prize-first {
          border-color: var(--color-accent-primary);
          border-width: 2px;
        }

        .prize-second {
          padding-top: 3rem;
        }

        .prize-third {
          padding-top: 2.5rem;
        }

        .prize-place {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text-main);
          margin-bottom: 0.35rem;
        }

        .prize-first .prize-place {
          font-size: 1.75rem;
          color: var(--color-accent-primary);
        }

        .council-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--color-accent-primary);
          font-size: 0.7rem;
          font-weight: 500;
          margin-bottom: 0.35rem;
          padding: 0.2rem 0.4rem;
          border: 1px solid var(--color-accent-primary);
          border-radius: 10px;
        }

        .prize-amount {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 0.15rem;
        }

        .prize-credits {
          font-size: 0.95rem;
          color: var(--color-text-main);
          font-weight: 500;
          margin-bottom: 0;
        }

        .xverse-package {
          text-align: left;
          margin-top: 0.75rem;
          padding: 0.6rem;
          border: 1px solid var(--color-accent-primary);
          border-radius: var(--radius-sm);
          background: rgba(247, 147, 26, 0.03);
        }

        .xverse-tag {
          font-weight: 600;
          font-size: 0.7rem;
          color: var(--color-accent-primary);
          margin-bottom: 0.15rem;
        }

        .xverse-value {
          font-size: 0.65rem;
          color: var(--color-text-muted);
          margin-bottom: 0.4rem;
        }

        .xverse-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .xverse-bullets li {
          font-size: 0.6rem;
          color: var(--color-text-muted);
          padding-left: 0.75rem;
          position: relative;
          margin-bottom: 0.2rem;
          line-height: 1.3;
        }

        .xverse-bullets li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-accent-primary);
        }

        .runners-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
          width: 100%;
        }

        .prize-runner {
          flex: 1;
          max-width: 480px;
          padding: 1.5rem;
        }

        .prize-runner .prize-place {
          font-size: 1.4rem;
          color: var(--color-text-muted);
        }

        .prize-runner .prize-credits {
          font-size: 1rem;
        }

        /* Timeline & Split Layout */
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
          align-items: flex-start;
        }

        .timeline-item h4 {
          margin-bottom: 0.25rem;
        }

        .timeline-item p {
          margin: 0 0 0.25rem 0;
          color: var(--color-text-muted);
        }

        .duration-badge {
          display: inline-block;
          color: var(--color-accent-primary);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .announcement-text {
          display: block;
          font-size: 0.8rem;
          color: var(--color-accent-primary);
          font-weight: 500;
          margin-top: 0.25rem;
        }

        .icon-accent {
          color: var(--color-accent-primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .criteria-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .criteria-list li {
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          border-left: 3px solid var(--color-accent-primary);
        }

        /* Responsive Podium */
        @media (max-width: 768px) {
          .podium-container {
            flex-direction: column;
            align-items: center;
          }

          .prize-item {
            width: 100%;
            max-width: 280px;
          }

          .prize-first {
            order: 1;
          }

          .prize-second {
            order: 2;
          }

          .prize-third {
            order: 3;
          }

          .runners-row {
            flex-direction: column;
            align-items: center;
          }

          .prize-runner {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
