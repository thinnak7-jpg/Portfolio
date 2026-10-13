import { useState } from 'react';
import { projectsData } from '../data/projects';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FadeIn } from '../components/animations/FadeIn';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Some of my recent work and personal projects."
        />

        {/* Filter Buttons */}
        <FadeIn delay={0.2} direction="up" className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === cat 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass rounded-3xl overflow-hidden group flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/20 hover:bg-primary flex items-center justify-center text-white backdrop-blur-md transition-all translate-y-4 group-hover:translate-y-0">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/20 hover:bg-primary flex items-center justify-center text-white backdrop-blur-md transition-all translate-y-4 group-hover:translate-y-0 delay-75">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
