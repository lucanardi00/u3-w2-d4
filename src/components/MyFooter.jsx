import React from 'react';
import styles from './MyFooter.module.css';

const MyFooter = () => {
  return (
    <div className="container-fluid px-4">
      <footer data-bs-theme="dark">
        <div className="row justify-content-center mt-5">
          <div className="col col-6">
            <div className="row">
              <div className="col mb-2">
                <i className={`bi bi-facebook ${styles.footerIcon} me-2`}></i>
                <i className={`bi bi-instagram ${styles.footerIcon} me-2`}></i>
                <i className={`bi bi-twitter-x ${styles.footerIcon} me-2`}></i>
                <i className={`bi bi-youtube ${styles.footerIcon}`}></i>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              {[
                ['Audio and Subtitles', 'Media Center', 'Privacy', 'Contact us'],
                [
                  'Audio Description',
                  'Investor Relations',
                  'Legal Notices',
                ],
                ['Help Center', 'Jobs', 'Cookie Preferences'],
                ['Gift Cards', 'Terms of Use', 'Corporate Information'],
              ].map((linkGroup, index) => (
                <div className="col" key={index}>
                  <div className="row">
                    <div className={`${styles.footerLinks} col`}>
                      {linkGroup.map((link) => (
                        <p key={link}>
                          <a href="#" alt="footer link">
                            {link}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col mb-2">
                <button
                  type="button"
                  className={`btn btn-sm ${styles.footerButton} rounded-0 mt-3`}
                >
                  Service Code
                </button>
              </div>
            </div>
            <div className="row">
              <div className={`col mb-2 mt-2 ${styles.copyright}`}>
                © 1997-2023 Netflix, Inc.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyFooter;
