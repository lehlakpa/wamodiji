import Image from 'next/image';
import styles from './portfolio.module.css';
import { 
  Globe, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  GraduationCap, 
  CheckCircle, 
  BookOpen, 
  Building,
  Code,
  User,
  Activity
} from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FlutterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37z"/>
    <path d="M10.798 18l-3.08-3.08-5.418 5.418 3.08 3.08z"/>
    <path d="M7.718 14.92L14.314 24h7.37l-9.84-9.84-4.126 4.126z"/>
  </svg>
);

const FirebaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.27 18.52l1.9-11.83a.47.47 0 0 1 .84-.2l3.78 6.45-6.52 5.58z"/>
    <path d="M13.62 10l1.69-3.23a.47.47 0 0 1 .83 0l6.75 12.87-10.45 5.86a1.9 1.9 0 0 1-1.78 0L3.27 18.52z"/>
    <path d="M10.74 15.65L13.62 10 9.8 2.82a.47.47 0 0 0-.84 0l-3 5.75 4.78 7.08z"/>
  </svg>
);

const JavascriptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 20v-3.5c0-1.5-1.5-2.5-3-2.5h-1"/>
    <path d="M14 14.5v-1c0-1.5-1.5-2.5-3-2.5h-1"/>
    <path d="M11 20H8"/>
    <path d="M11 11H8"/>
    <path d="M16 20v-4c0-2-2-3-4-3s-4 1-4 3v4"/>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
  </svg>
);

export default function Portfolio() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundGlow} />
      <div className={styles.dottedPattern} />
      
      <div className={styles.contentWrapper}>
        
        {/* Profile Card */}
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.profileSection}>
              <div className={styles.profileInfo}>
                <div className={styles.nameRow}>
                  <h1 className={styles.name}>Lakpa Ngundu<br />Sherpa</h1>
                  <button className={styles.portfolioBtn}>
                    <User size={14} /> PORTFOLIO
                  </button>
                </div>
                <div className={styles.roleRow}>
                  <span className={styles.role}>Junior Flutter Developer</span>
                  <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialIcon}><GithubIcon /></a>
                    <a href="#" className={styles.socialIcon}><LinkedinIcon /></a>
                    <a href="#" className={styles.socialIcon}><Globe size={18} /></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={14} /> Okhaldhunga, Nepal
              </div>
              <div className={styles.contactItem}>
                <Mail size={14} /> lakpangundu@example.com
              </div>
              <div className={styles.contactItem}>
                <Phone size={14} /> +977 9841234567
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards Row */}
        <div className={styles.twoColumn}>
          <div className={styles.miniCard}>
            <div className={styles.iconBox}>
              <Calendar size={24} />
            </div>
            <div className={styles.miniCardContent}>
              <span className={styles.miniCardLabel}>Date of Birth</span>
              <span className={styles.miniCardValue}>2061-01-13</span>
            </div>
          </div>
          
          <div className={styles.miniCard}>
            <div className={styles.iconBox}>
              <GraduationCap size={24} />
            </div>
            <div className={styles.miniCardContent}>
              <span className={styles.miniCardLabel}>Location</span>
              <span className={styles.miniCardValue}>Okhaldhunga,<br />Nepal</span>
            </div>
          </div>
        </div>

        {/* Qualification Card */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>
            <div className={styles.titleIcon}><GraduationCap size={20} /></div>
            QUALIFICATION
          </h2>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}><CheckCircle size={20} /></div>
              <div className={styles.timelineContent}>
                <h4>+2 Completed</h4>
                <p>Successfully completed Higher Secondary Education.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}><BookOpen size={20} /></div>
              <div className={styles.timelineContent}>
                <h4>Running Bachelor (2nd Semester)</h4>
                <p>Currently pursuing Bachelor's Degree.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}><Building size={20} /></div>
              <div className={styles.timelineContent}>
                <h4>Texas International College</h4>
                <p>Affiliated college for higher education.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Card */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>
            <div className={styles.titleIcon}><Code size={20} /></div>
            SKILLS
          </h2>
          
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <div className={styles.skillIcon} style={{color: '#42a5f5'}}><FlutterIcon /></div>
              <span className={styles.skillName}>Flutter</span>
              <div className={styles.skillBarContainer}>
                <div className={styles.skillBar} style={{width: '90%'}}></div>
              </div>
              <span className={styles.skillLevel}>Advanced</span>
            </div>
            
            <div className={styles.skillItem}>
              <div className={styles.skillIcon} style={{color: '#ffca28'}}><FirebaseIcon /></div>
              <span className={styles.skillName}>Firebase</span>
              <div className={styles.skillBarContainer}>
                <div className={styles.skillBar} style={{width: '85%'}}></div>
              </div>
              <span className={styles.skillLevel}>Advanced</span>
            </div>
            
            <div className={styles.skillItem}>
              <div className={styles.skillIcon} style={{color: '#aaa'}}><Code size={24} /></div>
              <span className={styles.skillName}>Junior Development</span>
              <div className={styles.skillBarContainer}>
                <div className={styles.skillBar} style={{width: '60%'}}></div>
              </div>
              <span className={styles.skillLevel}>Intermediate</span>
            </div>
            
            <div className={styles.skillItem}>
              <div className={styles.skillIcon} style={{color: '#fdd835'}}><JavascriptIcon /></div>
              <span className={styles.skillName}>JavaScript</span>
              <div className={styles.skillBarContainer}>
                <div className={styles.skillBar} style={{width: '40%'}}></div>
              </div>
              <span className={styles.skillLevel}>Basic</span>
            </div>
          </div>
        </section>

        {/* About Me Card */}
        <section className={styles.card} style={{position: 'relative', overflow: 'hidden'}}>
          <h2 className={styles.sectionTitle}>
            <div className={styles.titleIcon}><User size={20} /></div>
            ABOUT ME
          </h2>
          
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              I am a passionate Flutter developer with a strong interest in building beautiful and functional mobile applications. I love learning new technologies and improving my skills every day.<br /><br />
              My goal is to create impactful solutions and grow as a full-stack developer.
            </p>
            <div className={styles.quoteIcon}>”</div>
          </div>
        </section>

      </div>
    </main>
  );
}