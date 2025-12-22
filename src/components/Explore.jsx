"use client";
import React from "react";
import styles from "../styles/explore.module.css";
import Link from "next/link";
import FileIcon from "./FileIcon";
import { usePathname } from "next/navigation";
import { useLayout } from "../context/LayoutContext";

export default function Explore() {
    const [toggle, setToggle] = React.useState(true);
    const [blockchainToggle, setBlockchainToggle] = React.useState(true);
    const [servicesToggle, setServicesToggle] = React.useState(true);
    const [locationsToggle, setLocationsToggle] = React.useState(false);
    const [caseStudiesToggle, setCaseStudiesToggle] = React.useState(false);
    const pathname = usePathname();
    const { openTab, mobileMenuOpen, setMobileMenuOpen } = useLayout(); // Assume closeMobileMenu is simpler alias or use setMobileMenuOpen(false)

    // Helper to close menu on mobile selection
    // Helper to close menu on mobile selection
    const handleFileClick = (name, path, icon) => {
        openTab({ name, path, icon });
        if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.sidebar} ${mobileMenuOpen ? styles.mobileOpen : ''}`} aria-label="File Explorer">
            <div className={styles.sidebarTitle}>EXPLORER</div>
            <div className={styles.section}>
                <button
                    className={styles.sectionHeader}
                    onClick={() => setToggle(!toggle)}
                    aria-expanded={toggle}
                    aria-controls="portfolio-list"
                    style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
                >
                    <span className={`${styles.arrow} ${toggle ? styles.open : ''}`}>›</span>
                    <span className={styles.sectionTitle}>PORTFOLIO</span>
                </button>
                {toggle && (
                    <div className={styles.fileTree} id="portfolio-list">
                        <Link href="/" className={styles.file} onClick={() => handleFileClick('home.jsx', '/', 'home.jsx')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="home.jsx" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/' ? styles.activeFile : ''}`}>home.jsx</span>
                        </Link>
                        <Link href="/about" className={styles.file} onClick={() => handleFileClick('about.html', '/about', 'about.html')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="about.html" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/about' ? styles.activeFile : ''}`}>about.html</span>
                        </Link>
                        <Link href="/contact" className={styles.file} onClick={() => handleFileClick('contact.css', '/contact', 'contact.css')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="contact.css" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/contact' ? styles.activeFile : ''}`}>contact.css</span>
                        </Link>
                        <Link href="/project" className={styles.file} onClick={() => handleFileClick('project.js', '/project', 'project.js')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="project.js" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/project' ? styles.activeFile : ''}`}>project.js</span>
                        </Link>
                        <Link href="/github" className={styles.file} onClick={() => handleFileClick('github.json', '/github', 'github.json')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="github.json" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/github' ? styles.activeFile : ''}`}>github.json</span>
                        </Link>
                        <Link href="/readme" className={styles.file} onClick={() => handleFileClick('readme.md', '/readme', 'readme.md')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="readme.md" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/readme' ? styles.activeFile : ''}`}>README.md</span>
                        </Link>
                        <Link href="/recruiter" className={styles.file} onClick={() => handleFileClick('resume.pdf', '/recruiter', 'resume.pdf')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="resume.pdf" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/recruiter' ? styles.activeFile : ''}`}>resume.pdf</span>
                        </Link>
                        <Link href="/hire" className={styles.file} onClick={() => handleFileClick('hire.txt', '/hire', 'hire.txt')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="hire.txt" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/hire' ? styles.activeFile : ''}`}>hire.txt</span>
                        </Link>
                    </div>
                )}
            </div>
            <div className={styles.section}>
                <button
                    className={styles.sectionHeader}
                    onClick={() => setBlockchainToggle(!blockchainToggle)}
                    aria-expanded={blockchainToggle}
                    aria-controls="blockchain-list"
                    style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
                >
                    <span className={`${styles.arrow} ${blockchainToggle ? styles.open : ''}`}>›</span>
                    <span className={styles.sectionTitle}>BLOCKCHAIN</span>
                </button>
                {blockchainToggle && (
                    <div className={styles.fileTree} id="blockchain-list">
                        <Link href="/blockchain" className={styles.file} onClick={() => handleFileClick('overview.sol', '/blockchain', 'overview.sol')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="overview.sol" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/blockchain' ? styles.activeFile : ''}`}>overview.sol</span>
                        </Link>
                        <Link href="/blockchain/projects" className={styles.file} onClick={() => handleFileClick('projects.sol', '/blockchain/projects', 'projects.sol')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="projects.sol" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/blockchain/projects' ? styles.activeFile : ''}`}>projects.sol</span>
                        </Link>
                    </div>
                )}
            </div>
            <div className={styles.section}>
                <button
                    className={styles.sectionHeader}
                    onClick={() => setServicesToggle(!servicesToggle)}
                    aria-expanded={servicesToggle}
                    aria-controls="services-list"
                    style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
                >
                    <span className={`${styles.arrow} ${servicesToggle ? styles.open : ''}`}>›</span>
                    <span className={styles.sectionTitle}>SERVICES</span>
                </button>
                {servicesToggle && (
                    <div className={styles.fileTree} id="services-list">
                        <Link href="/services" className={styles.file} onClick={() => handleFileClick('services.js', '/services', 'services.js')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="services.js" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/services' ? styles.activeFile : ''}`}>services.js</span>
                        </Link>
                        <Link href="/services/web-development" className={styles.file} onClick={() => handleFileClick('web-dev.js', '/services/web-development', 'web-dev.js')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="web-dev.js" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/services/web-development' ? styles.activeFile : ''}`}>web-dev.js</span>
                        </Link>
                        <Link href="/services/seo" className={styles.file} onClick={() => handleFileClick('seo.py', '/services/seo', 'seo.py')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="seo.py" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/services/seo' ? styles.activeFile : ''}`}>seo.py</span>
                        </Link>
                    </div>
                )}
            </div>
            {/* <div className={styles.section}>
                <button
                    className={styles.sectionHeader}
                    onClick={() => setLocationsToggle(!locationsToggle)}
                    aria-expanded={locationsToggle}
                    aria-controls="locations-list"
                    style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
                >
                    <span className={`${styles.arrow} ${locationsToggle ? styles.open : ''}`}>›</span>
                    <span className={styles.sectionTitle}>LOCATIONS</span>
                </button>
                {locationsToggle && (
                    <div className={styles.fileTree} id="locations-list">
                        <Link href="/location" className={styles.file} onClick={() => handleFileClick('global.js', '/location', 'global.js')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="global.js" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/location' ? styles.activeFile : ''}`}>global.js</span>
                        </Link>
                        <Link href="/location/usa" className={styles.file} onClick={() => handleFileClick('usa.js', '/location/usa', 'usa.js')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="usa.js" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/location/usa' ? styles.activeFile : ''}`}>usa.js</span>
                        </Link>
                        <Link href="/location/india" className={styles.file} onClick={() => handleFileClick('india.py', '/location/india', 'india.py')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="india.py" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/location/india' ? styles.activeFile : ''}`}>india.py</span>
                        </Link>
                        <Link href="/location/europe" className={styles.file} onClick={() => handleFileClick('europe.ts', '/location/europe', 'europe.ts')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="europe.ts" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/location/europe' ? styles.activeFile : ''}`}>europe.ts</span>
                        </Link>
                    </div>
                )}
            </div> */}
            <div className={styles.section}>
                <button
                    className={styles.sectionHeader}
                    onClick={() => setCaseStudiesToggle(!caseStudiesToggle)}
                    aria-expanded={caseStudiesToggle}
                    aria-controls="case-studies-list"
                    style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
                >
                    <span className={`${styles.arrow} ${caseStudiesToggle ? styles.open : ''}`}>›</span>
                    <span className={styles.sectionTitle}>CASE STUDIES</span>
                </button>
                {caseStudiesToggle && (
                    <div className={styles.fileTree} id="case-studies-list">
                        <Link href="/case-studies/fashion-ecommerce" className={styles.file} onClick={() => handleFileClick('fashion.md', '/case-studies/fashion-ecommerce', 'fashion.md')}>
                            <div className={styles.fileIconWrapper}>
                                <FileIcon name="fashion.md" size={18} />
                            </div>
                            <span className={`${styles.fileName} ${pathname === '/case-studies/fashion-ecommerce' ? styles.activeFile : ''}`}>fashion.md</span>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}