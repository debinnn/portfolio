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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur.
                </p>
                
                <p className="text-base md:text-lg mb-8 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit 
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab 
                  illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                  quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
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
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Project 2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Project 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                githubUrl="#"
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
