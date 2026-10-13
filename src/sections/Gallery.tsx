import React, { useState } from 'react';
import { activitiesData, Activity } from '../data/gallery';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FadeIn } from '../components/animations/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarAlt } from 'react-icons/fa';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const categories = ['All', ...Array.from(new Set(activitiesData.map(act => act.category)))];

  const filteredActivities = filter === 'All' 
    ? activitiesData 
    : activitiesData.filter(act => act.category === filter);

  // Format slides for Lightbox based on selected activity
  const slides = selectedActivity?.images.map(img => ({
    src: img.src,
    width: img.width,
    height: img.height,
    title: img.caption || selectedActivity.title
  })) || [];

  return (
    <section id="activities" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Activities" 
          subtitle="A visual journey through my experiences, events, and behind-the-scenes moments."
        />

        {/* Filters */}
        <FadeIn delay={0.2} direction="up" className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-accent text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Masonry Grid via Tailwind CSS Columns for Cover Images */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {filteredActivities.map((activity, i) => (
            <FadeIn key={activity.id} delay={0.1 * (i % 5)} direction="up" className="break-inside-avoid">
              <div 
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedActivity(activity)}
              >
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-4 text-center">
                  <h4 className="text-white font-bold mb-1">{activity.title}</h4>
                  <span className="text-xs text-accent px-2 py-1 bg-accent/20 rounded-full mb-2">{activity.category}</span>
                  <span className="text-xs text-gray-300">{activity.images.length} Photos</span>
                </div>
                <img 
                  src={activity.coverImage} 
                  alt={activity.title} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Activity Details Modal */}
        <AnimatePresence>
          {selectedActivity && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedActivity(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#0f172a] border border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative bg-black/40 p-6 md:p-10 border-b border-white/5">
                  <button 
                    onClick={() => setSelectedActivity(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
                  >
                    <FaTimes />
                  </button>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 pr-12">{selectedActivity.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-accent" /> {selectedActivity.date}</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full">{selectedActivity.category}</span>
                  </div>
                </div>
                
                <div className="p-6 md:p-10">
                  {/* Description */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-white mb-4">About this activity</h3>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedActivity.description}
                    </p>
                  </div>
                  
                  {/* Photo Gallery Grid */}
                  <h3 className="text-xl font-semibold text-white mb-6">Photo Gallery ({selectedActivity.images.length})</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedActivity.images.map((img, i) => (
                      <div 
                        key={i} 
                        className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                        onClick={() => setLightboxIndex(i)}
                      >
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                          <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">View</span>
                        </div>
                        <img 
                          src={img.src} 
                          alt={img.caption || `${selectedActivity.title} photo ${i+1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox for fullscreen image viewing */}
        <Lightbox
          index={lightboxIndex}
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          slides={slides}
          plugins={[Zoom]}
          carousel={{ padding: "10%", spacing: 50 }}
        />
      </div>
    </section>
  );
};
