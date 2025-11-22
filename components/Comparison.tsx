'use client';

import { motion } from 'framer-motion';
import { Check, X, Zap, Crown } from 'lucide-react';
import { PixelCard } from './ui/PixelCard';

const freeFeatures = [
  { name: 'Basic autofill', included: true },
  { name: 'Up to 3 profiles', included: true },
  { name: 'Up to 10 fields per profile', included: true },
  { name: 'Manual field matching', included: true },
  { name: 'Local storage', included: true },
  { name: 'Basic encryption', included: true },
  { name: 'AI-powered smart fill', included: false },
  { name: 'Unlimited profiles', included: false },
  { name: 'Unlimited fields', included: false },
  { name: 'Custom field mapping', included: false },
  { name: 'Multi-browser sync (2 browsers)', included: false },
  { name: 'Priority support', included: false },
  { name: 'Lifetime updates', included: false },
];

const proFeatures = [
  { name: 'Advanced autofill', included: true },
  { name: 'Unlimited profiles', included: true, highlight: true },
  { name: 'Unlimited fields', included: true, highlight: true },
  { name: 'AI-powered smart fill', included: true, highlight: true },
  { name: 'Custom field mapping', included: true, highlight: true },
  { name: 'AES-256 encryption', included: true },
  { name: 'Local storage', included: true },
  { name: 'Multi-browser sync (2 browsers)', included: true, highlight: true },
  { name: 'Works on any website', included: true },
  { name: 'Keyboard shortcuts', included: true },
  { name: 'Import/Export profiles', included: true },
  { name: 'Priority support', included: true, highlight: true },
  { name: 'Lifetime updates', included: true, highlight: true },
];

export function Comparison() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Free vs Pro
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Start with the free version or unlock everything for just $2
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Version */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PixelCard className="h-full">
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Free</h3>
                    <p className="text-slate-400 text-sm">Basic features</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-white mb-2">$0</div>
                  <p className="text-slate-400">Forever free</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {freeFeatures.map((feature, index) => (
                    <motion.li
                      key={feature.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-slate-300' : 'text-slate-600 line-through'}>
                        {feature.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  Download Free
                </a>
              </div>
            </PixelCard>
          </motion.div>

          {/* Pro Version */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PixelCard className="h-full">
              <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl p-8 h-full">
                {/* Popular badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-semibold">
                  Most Popular
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Pro</h3>
                    <p className="text-purple-300 text-sm">All features unlocked</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">$2</span>
                    <span className="text-slate-400 line-through">$10</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">
                      80% OFF
                    </span>
                  </div>
                  <p className="text-purple-300">One-time payment, lifetime access</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {proFeatures.map((feature, index) => (
                    <motion.li
                      key={feature.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 ${feature.highlight ? 'text-purple-400' : 'text-green-400'}`} />
                      <span className={`${feature.highlight ? 'text-white font-medium' : 'text-slate-300'}`}>
                        {feature.name}
                      </span>
                      {feature.highlight && (
                        <span className="ml-auto text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                          PRO
                        </span>
                      )}
                    </motion.li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-center hover:scale-[1.02]"
                >
                  Upgrade to Pro
                </button>
              </div>
            </PixelCard>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
            <Crown className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300">
              <span className="font-semibold">10,000+</span> users upgraded to Pro
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

