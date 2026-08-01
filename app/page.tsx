import Image from 'next/image';
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

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
    <main className="min-h-screen bg-[#0d0d0d] text-white font-sans flex justify-center py-10 px-5 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="hidden md:block absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)] rounded-full pointer-events-none" />
      <div className="absolute top-5 left-5 w-[100px] h-[100px] bg-[radial-gradient(circle,#333_1px,transparent_1px)] bg-[size:15px_15px] opacity-50 pointer-events-none" />
      
      <div className="max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] w-full flex flex-col gap-5 z-10 transition-all duration-300">
        
        {/* Profile Card */}
        <section className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 sm:p-[30px] md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="flex justify-between items-start">
                <h1 className="text-[32px] font-bold leading-[1.2] m-0">Lakpa Ngundu<br />Sherpa</h1>
                <button className="bg-transparent text-white border border-[#444] py-1.5 px-3 rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all duration-200 hover:bg-[#333]">
                  <User size={14} /> PORTFOLIO
                </button>
              </div>
              
              <div className="flex justify-between items-center mt-2.5 border-b border-[#333] pb-[15px]">
                <span className="text-[#a0a0a0] text-xs tracking-wider font-semibold uppercase">Junior Flutter Developer</span>
                <div className="flex gap-3">
                  <a href="https://github.com/lehlakpa" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white transition-colors duration-200 hover:bg-[#444]">
                    <GithubIcon />
                  </a>
                  <a href="https://facebook.com/lakpa.ngundu.sherpa" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white transition-colors duration-200 hover:bg-[#444]">
                    <FacebookIcon />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white transition-colors duration-200 hover:bg-[#444]">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-5 text-xs text-[#ccc]">
              <div className="flex items-center gap-2">
                <MapPin size={14} /> Okhaldhunga, Nepal
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} /> lehLakpaa@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} /> +977 9709047193
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards Row */}
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 md:p-6 flex items-center gap-3.5 md:gap-5 transition-all duration-300">
            <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-xl bg-[#2a2a2a] flex items-center justify-center text-white shrink-0">
              <Calendar size={24} className="md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-sm text-[#a0a0a0] mb-1">Date of Birth</span>
              <span className="text-lg md:text-xl font-semibold">2061-01-13</span>
            </div>
          </div>
          
          <div className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 md:p-6 flex items-center gap-3.5 md:gap-5 transition-all duration-300">
            <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-xl bg-[#2a2a2a] flex items-center justify-center text-white shrink-0">
              <GraduationCap size={24} className="md:w-7 md:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-sm text-[#a0a0a0] mb-1">Location</span>
              <span className="text-lg md:text-xl font-semibold leading-tight">Okhaldhunga,<br className="hidden sm:block" />Nepal</span>
            </div>
          </div>
        </div>

        {/* Qualification Card */}
        <section className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 sm:p-[30px] md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
          <h2 className="text-base font-semibold tracking-wide flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center"><GraduationCap size={20} /></div>
            QUALIFICATION
          </h2>
          
          <div className="flex flex-col relative before:content-[''] before:absolute before:left-5 before:top-0 before:bottom-0 before:w-px before:border-l before:border-dashed before:border-[#444]">
            <div className="flex gap-5 mb-6 relative last:mb-0">
              <div className="w-10 h-10 rounded-full bg-[#eee] text-[#111] flex items-center justify-center z-10 shrink-0"><CheckCircle size={20} /></div>
              <div className="flex flex-col justify-center">
                <h4 className="m-0 mb-1 text-[15px] font-semibold">+2 Completed</h4>
                <p className="m-0 text-xs text-[#a0a0a0]">Successfully completed Higher Secondary Education.</p>
              </div>
            </div>
            
            <div className="flex gap-5 mb-6 relative last:mb-0">
              <div className="w-10 h-10 rounded-full bg-[#eee] text-[#111] flex items-center justify-center z-10 shrink-0"><BookOpen size={20} /></div>
              <div className="flex flex-col justify-center">
                <h4 className="m-0 mb-1 text-[15px] font-semibold">Running Bachelor (2nd Semester)</h4>
                <p className="m-0 text-xs text-[#a0a0a0]">Currently pursuing Bachelor's Degree.</p>
              </div>
            </div>
            
            <div className="flex gap-5 mb-6 relative last:mb-0">
              <div className="w-10 h-10 rounded-full bg-[#eee] text-[#111] flex items-center justify-center z-10 shrink-0"><Building size={20} /></div>
              <div className="flex flex-col justify-center">
                <h4 className="m-0 mb-1 text-[15px] font-semibold">Texas International College</h4>
                <p className="m-0 text-xs text-[#a0a0a0]">Affiliated college for higher education.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Card */}
        <section className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 sm:p-[30px] md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
          <h2 className="text-base font-semibold tracking-wide flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center"><Code size={20} /></div>
            SKILLS
          </h2>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3.5 mb-5 last:mb-0">
              <div className="w-[30px] h-[30px] flex items-center justify-center text-[#42a5f5]"><FlutterIcon /></div>
              <span className="w-[140px] text-sm font-medium">Junior Flutter Developer</span>
              <div className="flex-grow h-1.5 bg-[#333] rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-white rounded-sm w-[90%]"></div>
              </div>
              <span className="w-20 text-right text-xs text-[#a0a0a0]">Mid</span>
            </div>
            
            <div className="flex items-center gap-3.5 mb-5 last:mb-0">
              <div className="w-[30px] h-[30px] flex items-center justify-center text-[#ffca28]"><FirebaseIcon /></div>
              <span className="w-[140px] text-sm font-medium">Firebase</span>
              <div className="flex-grow h-1.5 bg-[#333] rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-white rounded-sm w-[85%]"></div>
              </div>
              <span className="w-20 text-right text-xs text-[#a0a0a0]">mid</span>
            </div>
            
            
            <div className="flex items-center gap-3.5 mb-5 last:mb-0">
              <div className="w-[30px] h-[30px] flex items-center justify-center text-[#fdd835]"><JavascriptIcon /></div>
              <span className="w-[140px] text-sm font-medium">JavaScript</span>
              <div className="flex-grow h-1.5 bg-[#333] rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-white rounded-sm w-[40%]"></div>
              </div>
              <span className="w-20 text-right text-xs text-[#a0a0a0]">Basic</span>
            </div>
          </div>
        </section>

        {/* About Me Card */}
        <section className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 sm:p-[30px] md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-300">
          <h2 className="text-base font-semibold tracking-wide flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center"><User size={20} /></div>
            ABOUT ME
          </h2>
          
          <div className="relative">
            <p className="text-sm leading-[1.6] text-[#ccc] m-0 relative z-10">
              I am a passionate Flutter developer with a strong interest in building beautiful and functional mobile applications. I love learning new technologies and improving my skills every day.<br /><br />
              My goal is to create impactful solutions and grow as a full-stack developer.
            </p>
            <div className="absolute right-0 -bottom-5 text-[80px] text-[#222] font-serif leading-none z-0 pointer-events-none">”</div>
          </div>
        </section>

      </div>
    </main>
  );
}