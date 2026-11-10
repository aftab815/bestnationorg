import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getProgramById, getPrograms } from '../../config/programs';
import { getProgramDetails, getProjectDetails } from '../../config/projectDetails';
import { useFormModal } from '../../components/getInvolved/FormModalProvider';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';

const ProgramDetail = () => {
  const { programId } = useParams();
  const { hash } = useLocation();
  const { openForm } = useFormModal();

  const program = getProgramById(programId);
  const allPrograms = getPrograms();
  const programIndex = allPrograms.findIndex((p) => p.id === programId);

  // Hash-scroll effect: ensure scroll lands smoothly below the sticky navbar
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const targetId = hash.slice(1);
    const timer = setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [hash, programId]);

  if (!program) {
    return (
      <div className="program-page program-page--not-found">
        <div className="container">
          <nav className="program-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/programs">&larr; Back to all programs</Link>
          </nav>
          <div className="program-page__not-found-card">
            <h1>Program Not Found</h1>
            <p>We could not find the welfare program you were looking for.</p>
            <Link to="/programs" className="btn btn-primary">
              View All 12 Programs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const prevProgram = programIndex > 0 ? allPrograms[programIndex - 1] : null;
  const nextProgram = programIndex < allPrograms.length - 1 ? allPrograms[programIndex + 1] : null;
  const programNumber = String(programIndex + 1).padStart(2, '0');

  const progDetails = getProgramDetails(program.id);
  const programSummary = progDetails.summary || program.summary || '';

  return (
    <div className="program-page">
      {/* ── Breadcrumb & Header ───────────────────────── */}
      <header className="program-page__header">
        <div className="container">
          <nav className="program-page__breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li aria-hidden="true">&rsaquo;</li>
              <li aria-current="page">
                <span>{program.name}</span>
              </li>
            </ol>
          </nav>

          <div className="program-page__hero-content">
            <span className="program-page__badge">Program {programNumber}</span>
            <h1 className="program-page__title">{program.name}</h1>
            {programSummary ? (
              <p className="program-page__summary">{programSummary}</p>
            ) : null}

            {/* Quick jump links */}
            {program.projects && program.projects.length > 0 && (
              <div className="program-page__jump-nav" aria-label="Jump to project">
                <span className="program-page__jump-label">Jump to project:</span>
                <div className="program-page__jump-links">
                  {program.projects.map((proj, idx) => (
                    <a
                      key={proj.id}
                      href={`#${proj.id}`}
                      className="program-page__jump-pill"
                    >
                      Project {idx + 1}: {proj.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── Project Sections ─────────────────────────── */}
      <main className="program-page__body">
        <div className="container">
          <div className="program-projects-stack">
            {program.projects.map((project, idx) => {
              const details = getProjectDetails(project.id);
              const hasObjectives = Array.isArray(details.objectives) && details.objectives.length > 0;
              const hasActivities = Array.isArray(details.activities) && details.activities.length > 0;
              const hasSummary = Boolean(details.summary && details.summary.trim());
              const hasBeneficiaries = Boolean(details.beneficiaries && details.beneficiaries.trim());
              const hasAnyDetails = hasSummary || hasObjectives || hasActivities || hasBeneficiaries;

              return (
                <section
                  key={project.id}
                  id={project.id}
                  className="program-project-card"
                  aria-labelledby={`heading-${project.id}`}
                >
                  <div className="program-project__header">
                    <span className="program-project__badge">
                      Project {idx + 1} of {program.projects.length}
                    </span>
                    <h2 id={`heading-${project.id}`} className="program-project__title">
                      {project.name}
                    </h2>
                  </div>

                  <div className="program-project__details">
                    {hasSummary && (
                      <div className="program-project__detail-block">
                        <p className="program-project__summary">{details.summary}</p>
                      </div>
                    )}

                    {hasObjectives && (
                      <div className="program-project__detail-block">
                        <h3 className="program-project__subheading">Objectives</h3>
                        <ul className="program-project__list">
                          {details.objectives.map((obj, i) => (
                            <li key={i}>{obj}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {hasActivities && (
                      <div className="program-project__detail-block">
                        <h3 className="program-project__subheading">What We Do</h3>
                        <ul className="program-project__list">
                          {details.activities.map((act, i) => (
                            <li key={i}>{act}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {hasBeneficiaries && (
                      <div className="program-project__detail-block">
                        <h3 className="program-project__subheading">Who Benefits</h3>
                        <p className="program-project__beneficiaries">{details.beneficiaries}</p>
                      </div>
                    )}

                    {!hasAnyDetails && (
                      <p className="program-project__empty-notice">
                        Detailed information about this project will be published soon.
                      </p>
                    )}
                  </div>

                  {/* Actions for this project */}
                  <div className="program-project__actions">
                    <h3 className="program-project__actions-title">Be part of this project</h3>
                    <div className="program-project__buttons">
                      <Link
                        to={`/donate?program=${program.id}&project=${project.id}#paypro-section`}
                        className="btn btn-primary program-project__action-btn"
                        aria-label={`Donate to ${project.name}`}
                      >
                        Donate
                      </Link>
                      <button
                        type="button"
                        className="btn btn-secondary program-project__action-btn"
                        onClick={() =>
                          openForm('volunteer', {
                            source: 'program-page-volunteer',
                            initialValues: { programId: program.id, projectId: project.id },
                          })
                        }
                        aria-label={`Volunteer for ${project.name}`}
                      >
                        Volunteer
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline program-project__action-btn"
                        onClick={() =>
                          openForm('beneficiary', {
                            source: 'program-page-beneficiary',
                            initialValues: { programId: program.id, projectId: project.id },
                          })
                        }
                        aria-label={`Apply for support for ${project.name}`}
                      >
                        Apply for Support
                      </button>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* ── Previous / Next Navigation ─────────────── */}
          <nav className="program-page__pagination" aria-label="Program navigation">
            <div className="program-page__pagination-prev">
              {prevProgram && (
                <Link
                  to={`/programs/${prevProgram.id}`}
                  className="program-page__pagination-link program-page__pagination-link--prev"
                >
                  <span className="pagination-label">&larr; Previous Program</span>
                  <span className="pagination-title">{prevProgram.name}</span>
                </Link>
              )}
            </div>

            <div className="program-page__pagination-all">
              <Link to="/programs" className="btn btn-outline btn-sm">
                All Programs
              </Link>
            </div>

            <div className="program-page__pagination-next">
              {nextProgram && (
                <Link
                  to={`/programs/${nextProgram.id}`}
                  className="program-page__pagination-link program-page__pagination-link--next"
                >
                  <span className="pagination-label">Next Program &rarr;</span>
                  <span className="pagination-title">{nextProgram.name}</span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </main>

      <CTA />
      <Newsletter />
    </div>
  );
};

export default ProgramDetail;
