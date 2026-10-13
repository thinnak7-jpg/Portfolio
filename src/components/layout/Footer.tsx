import { Link } from 'react-router-dom';
import { profileData } from '../../data/profile';
import { isFilled } from '../../utils/content';
import { FaGithub, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/50 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold text-gradient mb-4 inline-block">
              Portfolio.
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              {profileData.description}
            </p>
            <div className="flex gap-4">
              {profileData.socials.github && (
                <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all">
                  <FaGithub size={20} />
                </a>
              )}
              {profileData.socials.facebook && (
                <a href={profileData.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all">
                  <FaFacebook size={20} />
                </a>
              )}
              {profileData.socials.email && (
                <a href={profileData.socials.email} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all">
                  <MdEmail size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/certificates" className="text-gray-400 hover:text-primary transition-colors">Certificates</Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-primary transition-colors">Activities</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              {isFilled(profileData.contact.location) && <li>{profileData.contact.location}</li>}
              <li>{profileData.contact.phone}</li>
              <li>{profileData.socials.email.replace('mailto:', '')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all border border-white/10"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};
