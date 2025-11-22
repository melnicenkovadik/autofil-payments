'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2 } from 'lucide-react';
import { notifications } from '@mantine/notifications';

const DEMO_DATA = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  company: 'Acme Inc.',
  position: 'Software Engineer',
  country: 'United States',
  city: 'San Francisco',
  address: '123 Market Street',
  postalCode: '94103',
  website: 'https://johndoe.com',
  linkedin: 'https://linkedin.com/in/johndoe',
  github: 'https://github.com/johndoe',
};

// Detect OS
const isMac = typeof window !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;

export function LiveDemo() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAutofill = useCallback(async () => {
    setIsAnimating(true);
    setShowSuccess(false);
    setFormData({});

    // Animate filling each field with delay
    const fields = Object.keys(DEMO_DATA);
    for (let i = 0; i < fields.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      const key = fields[i] as keyof typeof DEMO_DATA;
      setFormData(prev => ({ ...prev, [key]: DEMO_DATA[key] }));
    }

    setShowSuccess(true);

    notifications.show({
      title: 'Form filled successfully!',
      message: `Filled ${fields.length} fields in ${(fields.length * 100) / 1000}s`,
      color: 'green',
      icon: <CheckCircle2 className="w-5 h-5" />,
    });

    setIsAnimating(false);

    // Clear form after 3 seconds and show reset message
    setTimeout(() => {
      setFormData({});
      setShowSuccess(false);
      notifications.show({
        title: 'Demo reset!',
        message: 'Try it again with the button or keyboard shortcut',
        color: 'blue',
        icon: <Zap className="w-5 h-5" />,
      });
    }, 3000);
  }, []);

  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Option+Shift+F (Alt+Shift+F on Windows/Linux)
      if (e.altKey && e.shiftKey && e.key === 'F') {
        e.preventDefault();
        if (!isAnimating) {
          handleAutofill();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnimating, handleAutofill]);

  const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-not-allowed";

  return (
    <section id="demo" className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 px-4">
            See It In Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Click the button or press{' '}
            <kbd className="px-2 py-1 bg-white/10 rounded text-purple-300 text-sm sm:text-base">
              {isMac ? '⌥' : 'Alt'}+Shift+F
            </kbd>{' '}
            to autofill all fields instantly
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Sample Form</h3>
              <button
                onClick={handleAutofill}
                disabled={isAnimating}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                {isAnimating ? 'Filling...' : 'Fill Form'}
              </button>
            </div>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-green-300 text-sm">
                  All fields filled! Resetting in 3 seconds...
                </span>
              </motion.div>
            )}

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div animate={formData.fullName ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName || ''}
                    readOnly
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div animate={formData.email ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    readOnly
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div animate={formData.phone ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone || ''}
                    readOnly
                    placeholder="+1 (555) 123-4567"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div animate={formData.company ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company || ''}
                    readOnly
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                </motion.div>
              </div>

              <motion.div animate={formData.position ? { scale: [1, 1.02, 1] } : {}}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Position</label>
                <input
                  type="text"
                  value={formData.position || ''}
                  readOnly
                  placeholder="Software Engineer"
                  className={inputClass}
                />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div animate={formData.country ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Country</label>
                  <input
                    type="text"
                    value={formData.country || ''}
                    readOnly
                    placeholder="United States"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div animate={formData.city ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city || ''}
                    readOnly
                    placeholder="San Francisco"
                    className={inputClass}
                  />
                </motion.div>
              </div>

              <motion.div animate={formData.address ? { scale: [1, 1.02, 1] } : {}}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Address</label>
                <input
                  type="text"
                  value={formData.address || ''}
                  readOnly
                  placeholder="123 Market Street"
                  className={inputClass}
                />
              </motion.div>

              <motion.div animate={formData.postalCode ? { scale: [1, 1.02, 1] } : {}}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Postal Code</label>
                <input
                  type="text"
                  value={formData.postalCode || ''}
                  readOnly
                  placeholder="94103"
                  className={inputClass}
                />
              </motion.div>

              <motion.div animate={formData.website ? { scale: [1, 1.02, 1] } : {}}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Website</label>
                <input
                  type="url"
                  value={formData.website || ''}
                  readOnly
                  placeholder="https://johndoe.com"
                  className={inputClass}
                />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div animate={formData.linkedin ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">LinkedIn</label>
                  <input
                    type="url"
                    value={formData.linkedin || ''}
                    readOnly
                    placeholder="linkedin.com/in/johndoe"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div animate={formData.github ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">GitHub</label>
                  <input
                    type="url"
                    value={formData.github || ''}
                    readOnly
                    placeholder="github.com/johndoe"
                    className={inputClass}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 md:p-8">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">How it works</h4>
              <ul className="space-y-4 md:space-y-5 text-slate-300 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">Install the Chrome extension and create unlimited profiles for different scenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">Press <kbd className="px-2 py-1 bg-white/10 rounded text-purple-300 text-sm md:text-base">{isMac ? '⌥' : 'Alt'}+Shift+F</kbd> on any form</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">AI analyzes fields and fills them instantly with matching data from your profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">All data is encrypted with AES-256 and stored locally in your browser only</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 md:p-8">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Why Autofill Pro?</h4>
              <ul className="space-y-3 md:space-y-4 text-slate-300 text-base md:text-lg">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="leading-relaxed">No subscription - pay once, own forever</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="leading-relaxed">AI-powered smart field matching</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="leading-relaxed">Works on unlimited websites & forms</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="leading-relaxed">Up to 2 browsers per license</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="leading-relaxed">Unlimited profiles & custom fields</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="leading-relaxed">100% local encryption - never uploaded</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

