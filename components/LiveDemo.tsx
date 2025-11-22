'use client';

import { useState } from 'react';
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

export function LiveDemo() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAutofill = async () => {
    setIsAnimating(true);
    setFormData({});

    // Animate filling each field with delay
    const fields = Object.keys(DEMO_DATA);
    for (let i = 0; i < fields.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      const key = fields[i] as keyof typeof DEMO_DATA;
      setFormData(prev => ({ ...prev, [key]: DEMO_DATA[key] }));
    }

    notifications.show({
      title: 'Form filled successfully!',
      message: `Filled ${fields.length} fields in ${(fields.length * 100) / 1000}s`,
      color: 'green',
      icon: <CheckCircle2 className="w-5 h-5" />,
    });

    setIsAnimating(false);
  };

  const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all";

  return (
    <section id="demo" className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            See It In Action
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Click the button or press <kbd className="px-2 py-1 bg-white/10 rounded text-purple-300">Cmd+Shift+F</kbd> to autofill all fields instantly
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
                Fill Form
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div animate={formData.fullName ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div animate={formData.email ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1 (555) 123-4567"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div animate={formData.company ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
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
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
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
                    onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                    placeholder="United States"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div animate={formData.city ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
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
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="123 Market Street"
                  className={inputClass}
                />
              </motion.div>

              <motion.div animate={formData.postalCode ? { scale: [1, 1.02, 1] } : {}}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Postal Code</label>
                <input
                  type="text"
                  value={formData.postalCode || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, postalCode: e.target.value }))}
                  placeholder="94103"
                  className={inputClass}
                />
              </motion.div>

              <motion.div animate={formData.website ? { scale: [1, 1.02, 1] } : {}}>
                <label className="block text-sm font-medium text-slate-300 mb-2">Website</label>
                <input
                  type="url"
                  value={formData.website || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
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
                    onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                    placeholder="linkedin.com/in/johndoe"
                    className={inputClass}
                  />
                </motion.div>

                <motion.div animate={formData.github ? { scale: [1, 1.02, 1] } : {}}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">GitHub</label>
                  <input
                    type="url"
                    value={formData.github || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
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
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-4">How it works</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Install the Chrome extension and create your profiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Press <kbd className="px-2 py-1 bg-white/10 rounded text-purple-300">Alt+Shift+F</kbd> on any form</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Watch all fields fill instantly with your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Everything is encrypted and stored locally</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-4">Why Autofill Pro?</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>No subscription, pay once for life</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Works on unlimited websites</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Up to 2 browsers per license</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Unlimited profiles & custom fields</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

