import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { profileData } from '../data/profile';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FadeIn } from '../components/animations/FadeIn';
import { Button } from '../components/ui/Button';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { isFilled } from '../utils/content';

// Set these in Vercel → Project → Settings → Environment Variables to send through EmailJS.
// Without them the form opens the visitor's email app with the message pre-filled.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const emailjsConfigured = !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'mailto' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    if (!emailjsConfigured) {
      const data = new FormData(form.current);
      const subject = String(data.get('subject') ?? '');
      const body = `${data.get('message') ?? ''}\n\n— ${data.get('user_name') ?? ''} (${data.get('user_email') ?? ''})`;
      window.location.href = `${profileData.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    emailjs.sendForm(EMAILJS_SERVICE_ID!, EMAILJS_TEMPLATE_ID!, form.current, EMAILJS_PUBLIC_KEY!)
      .then(() => {
          setStatus('success');
          form.current?.reset();
      }, () => {
          setStatus('error');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Get In Touch" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <FadeIn direction="right" delay={0.2} className="flex flex-col gap-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {isFilled(profileData.contact.location) && (
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-white">{profileData.contact.location}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${profileData.contact.phone}`} className="font-medium text-white hover:text-secondary transition-colors">
                      {profileData.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={profileData.socials.email} className="font-medium text-white hover:text-accent transition-colors">
                      {profileData.socials.email.replace('mailto:', '')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left" delay={0.4}>
            <div className="glass-dark p-8 md:p-12 rounded-3xl h-full border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me A Message</h3>
              
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="user_name" className="text-sm text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    required 
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="user_email" className="text-sm text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    id="user_email" 
                    required 
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    required 
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-2 mb-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5} 
                    required 
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
                )}
                {status === 'mailto' && (
                  <p className="text-gray-300 text-center text-sm">
                    Your email app should open with the message ready to send. If it doesn't, email me at{' '}
                    <a href={profileData.socials.email} className="text-accent underline">{profileData.socials.email.replace('mailto:', '')}</a>.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-center text-sm">Oops! Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
