'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How does the AI-powered field matching work?',
    answer: 'Our advanced AI analyzes form field labels, names, and types to intelligently match them with your profile data. It understands context and can handle variations in field naming across different websites.',
  },
  {
    question: 'Is my data really secure?',
    answer: 'Absolutely! All your data is encrypted with AES-256 encryption and stored only in your browser\'s local storage. Nothing is ever uploaded to our servers or any cloud service. Your data never leaves your device.',
  },
  {
    question: 'Can I use this on multiple computers?',
    answer: 'Yes! Each license allows activation on up to 2 browsers. You can use it on your work computer and home computer, or any combination of devices.',
  },
  {
    question: 'What happens if I need to reset my browser?',
    answer: 'You can export your profiles before resetting and import them after. The export is encrypted, so your data stays secure even in backup files.',
  },
  {
    question: 'Does this work with all websites?',
    answer: 'Yes! Autofill Pro works on any website with forms - job applications, checkout pages, sign-up forms, contact forms, and more. No configuration needed.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards via Stripe and cryptocurrency via Telegram CryptoBot. Both methods provide instant license delivery.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied for any reason, contact us for a full refund.',
  },
  {
    question: 'How many profiles can I create?',
    answer: 'Unlimited! Create as many profiles as you need - personal, work, freelance, different personas for different purposes. No restrictions.',
  },
  {
    question: 'Will this extension slow down my browser?',
    answer: 'No! Autofill Pro is highly optimized and only activates when you press the keyboard shortcut. It has minimal impact on browser performance.',
  },
  {
    question: 'Do you track my data or browsing?',
    answer: 'Never! We have zero tracking, zero analytics, and zero data collection. Your privacy is our top priority.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-0 md:min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-300">
            Everything you need to know about Autofill Pro
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-300 mb-6">
              We're here to help! Contact us anytime and we'll respond within 24 hours.
            </p>
            <a
              href="mailto:support@autofil-payments.vercel.app"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

