import { useState } from 'react';
import { certificatesData } from '../data/certificates';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FadeIn } from '../components/animations/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

export const Certificates = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedCert, setSelectedCert] = useState<typeof certificatesData[0] | null>(null);
  
  const categories = ['All', ...Array.from(new Set(certificatesData.map(c => c.category)))];
  
  const filteredCerts = certificatesData.filter(cert => {
    const matchesCategory = filter === 'All' || cert.category === filter;
    const matchesSearch = cert.title.toLowerCase().includes(search.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Certificates" 
          subtitle="My professional certifications and learning achievements."
        />

        {/* Filters and Search */}
        <FadeIn delay={0.2} direction="up" className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-secondary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:border-secondary transition-colors"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </FadeIn>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="glass rounded-2xl p-4 cursor-pointer group hover:border-secondary/50 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
              >
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="text-white font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
                      View Certificate
                    </span>
                  </div>
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-white mb-1 line-clamp-1">{cert.title}</h4>
                <p className="text-sm text-secondary mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.issueDate}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#0f172a] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative bg-black/40 flex items-center justify-center p-4 md:p-8 rounded-t-3xl border-b border-white/5">
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                  >
                    <FaTimes />
                  </button>
                  <img src={selectedCert.image} alt={selectedCert.title} className="max-w-full object-contain max-h-[65vh] rounded-lg shadow-2xl" />
                </div>
                
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h2>
                      <p className="text-lg text-secondary">{selectedCert.issuer}</p>
                    </div>
                    {selectedCert.url && (
                      <a 
                        href={selectedCert.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10"
                      >
                        Verify <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <p className="text-gray-400 mb-2">Issue Date: <span className="text-white">{selectedCert.issueDate}</span></p>
                      <p className="text-gray-400">Credential ID: <span className="text-white">{selectedCert.credentialId}</span></p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Skills Learned</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skillsLearned.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-6">
                    {selectedCert.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
