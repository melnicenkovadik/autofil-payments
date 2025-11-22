'use client';

import { motion } from 'framer-motion';
import { Zap, Lock, Globe, DollarSign, Sparkles, Shield, Brain, Users } from 'lucide-react';
import { MobileCarousel } from './ui/MobileCarousel';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Fill entire forms in milliseconds with a single keyboard shortcut (Cmd+Shift+F)',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Lock,
    title: 'Encrypted & Local Storage',
    description: 'All your data is encrypted with AES-256 and stored only in your browser. Never uploaded to any server.',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'AI-Powered Smart Fill',
    description: 'Advanced AI analyzes form fields and intelligently matches them with your profile data for perfect autofill every time',
    gradient: 'from-violet-400 to-purple-500',
  },
  {
    icon: Users,
    title: 'Unlimited Profiles',
    description: 'Create unlimited profiles for work, personal, freelance, or any scenario. Switch between them instantly.',
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    icon: Globe,
    title: 'Works Everywhere',
    description: 'Compatible with any website and form, no configuration needed. Works on job applications, checkout forms, and more.',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: DollarSign,
    title: 'Pay Once, Own Forever',
    description: 'No subscriptions, no hidden fees. Just $2 for lifetime access with all features unlocked.',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Unlimited Everything',
    description: 'Create unlimited profiles, fields, and custom mappings. No restrictions, no limits on what you can do.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'No tracking, no analytics, no data collection. Your privacy is guaranteed. All data stays on your device.',
    gradient: 'from-indigo-400 to-purple-500',
  },
];

export function Features() {
  const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
    const Icon = feature.icon;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -10 }}
        className="group relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 overflow-hidden h-full"
      >
        {/* Gradient glow on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        <div className="relative z-10">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-full h-full text-white" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
            {feature.title}
          </h3>
          
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            {feature.description}
          </p>
        </div>

        {/* Bottom gradient line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Why Choose Autofill Pro?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Built for speed, security, and simplicity. Everything you need, nothing you don't.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <MobileCarousel>
            {features.map((feature, index) => (
              <div key={feature.title} className="px-4">
                <FeatureCard feature={feature} index={index} />
              </div>
            ))}
          </MobileCarousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

