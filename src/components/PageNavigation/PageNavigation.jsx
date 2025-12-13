import React from 'react';
import './PageNavigation.css';

const PageNavigation = ({ currentPage, setCurrentPage }) => {
    return (
        <div className="page-navigation">
            <button
                onClick={() => setCurrentPage(currentPage === 1 ? 2 : 1)}
                className="page-nav-button"
                aria-label={currentPage === 1 ? 'Go to About page' : 'Go to Home page'}
                title={currentPage === 1 ? 'About & Background' : 'Back to Home'}
            >
                <svg
                    className="nav-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {currentPage === 1 ? (
                        // User icon for "About"
                        <>
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </>
                    ) : (
                        // Home icon for "Back"
                        <>
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </>
                    )}
                </svg>
            </button>
        </div>
    );
};

export default PageNavigation;
