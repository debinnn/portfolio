import Spline from '@splinetool/react-spline/next';
import ProjectCard from './ProjectCard';
import SocialLinks from './SocialLinks';
import ProfileCard from './ProfileCard';
import TerminalCard from './TerminalCard';
import Pattern from './Pattern';
import ScrollButton from './ScrollButton';

export default function SplineScrollAnimation() {
  return (
    <>
        <Pattern />
        {/* Hero Section with Spline */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="w-full h-full">
            <Spline
              scene="https://prod.spline.design/w37h18J3b81udRPE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          
          {/* Scroll Button */}
          <ScrollButton targetId="about-section" label="next section" />
        </section>

        {/* About Me Section */}
        <section id="about-section" className="relative min-h-screen flex flex-col pt-20 md:pt-0">
          {/* About Me heading - positioned differently based on screen size */}
          <div className="md:absolute md:top-16 md:left-16 z-10 px-6 md:px-0 mb-12 md:mb-0">
            <h2 
              className="text-white"
              style={{ 
                fontFamily: 'Gambarino-Regular', 
                fontSize: 'clamp(3rem, 10vw, 90px)', 
                lineHeight: '0.93' 
              }}
            >
              About Me
            </h2>
          </div>

          {/* Two column layout for profile card and content */}
          <div className="flex-1 flex items-center justify-center px-6 md:px-16">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Profile Card Column */}
              <div className="md:flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start mb-8 md:mb-0">
                <ProfileCard />
              </div>
              
              {/* Text Content Column */}
              <div className="text-white" style={{ fontFamily: 'Inter', fontWeight: '400' }}>
                <p className="text-base md:text-lg mb-8 leading-relaxed">
                  Born in Kerala, India (2003) and brought up in Jeddah, Saudi Arabia. I was exposed to computers from a 
                  very young age and took a keen interest in the field. Not just coding or development -- but, computers 
                  as a whole. Hardware, building, video games, you name it. This led me to pursue a degree in Computer Applications,
                  and then a masters at CHRIST University, where I am currently a 2nd year student.
                    
                </p>
                
                <p className="text-base md:text-lg mb-8 leading-relaxed">
                  I like to make webapps that solve problems that I face in my daily life and also to make clones of 
                  softwares/webapps that are paid. I use React and Next to achieve this. I also use Github Copilot to help me 
                  along the way as well. 
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  Apart from React and Next, I also use Java, SQL and a little bit of Python. 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative min-h-screen flex flex-col pt-20 md:pt-32">
          {/* Projects header row with terminal card and heading */}
          <div className="w-full px-6 md:px-16 mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              {/* Terminal Card - Left side */}
              <div className="order-2 md:order-1 mb-12 md:mb-0 w-full md:w-auto">
                <TerminalCard />
              </div>
              
              {/* Projects heading - Right side */}
              <div className="order-1 md:order-2 mb-8 md:mb-0 text-right w-full md:w-auto">
                <h2 
                  className="text-white"
                  style={{ 
                    fontFamily: 'Gambarino-Regular', 
                    fontSize: 'clamp(3rem, 10vw, 90px)', 
                    lineHeight: '0.93' 
                  }}
                >
                  Projects
                </h2>
              </div>
            </div>
          </div>

          {/* Centered project cards */}
          <div className="flex-1 flex items-center justify-center px-6 md:px-16 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
              <ProjectCard
                title="BettrCalendar"
                description="Leveraging google's API for google calendar, I made a clone with addition of a few features and a few bug fixes, which I felt were necessary for me. "
                githubUrl="https://github.com/debinnn/BetterCalendar"
                liveUrl="#"
              />
              <ProjectCard
                title="Enclypt"
                description="Flask-based web application that allows users to securely encrypt and decrypt files using the Fernet symmetric encryption algorithm. The app provides an intuitive web interface for all operations."
                githubUrl="https://github.com/debinnn/Enclypt-main"
                liveUrl="#"
              />
              <ProjectCard
                title="Automated Log Analyzer"
                description="Engineered a robust parsing tool in Java that reads application log files to automatically identify and categorize
system events."
                githubUrl="https://github.com/debinnn/log-analyzer"
                liveUrl="#"
              />
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="relative py-24 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <SocialLinks />
          </div>
        </section>
    </>
  );
}
