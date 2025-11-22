'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CreditCard, Send } from 'lucide-react';
import { notifications } from '@mantine/notifications';

const features = [
  'Unlimited profiles & fields',
  'Works on any website',
  'Up to 2 browsers per license',
  'Local encryption',
  'No subscription',
  'Lifetime updates',
  'Priority support',
];

export function Pricing() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStripeCheckout = async () => {
    if (!email || !email.includes('@')) {
      notifications.show({
        title: 'Email required',
        message: 'Please enter a valid email address',
        color: 'red',
      });
      return;
    }

    setLoading(true);
    try {
      // This would call your actual Stripe endpoint
      notifications.show({
        title: 'Opening checkout...',
        message: 'Redirecting to payment page',
        color: 'blue',
      });
      
      // For demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      notifications.show({
        title: 'Demo mode',
        message: 'This is a demo. Install the extension to purchase!',
        color: 'yellow',
      });
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to open checkout',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCryptoCheckout = async () => {
    if (!email || !email.includes('@')) {
      notifications.show({
        title: 'Email required',
        message: 'Please enter a valid email address',
        color: 'red',
      });
      return;
    }

    setLoading(true);
    try {
      notifications.show({
        title: 'Opening crypto payment...',
        message: 'Redirecting to Telegram',
        color: 'blue',
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      notifications.show({
        title: 'Demo mode',
        message: 'This is a demo. Install the extension to purchase!',
        color: 'yellow',
      });
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to open crypto payment',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            One Price. Lifetime Access.
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            No tricks, no subscriptions. Pay once and use Autofill Pro forever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl border-2 border-purple-500/30 rounded-3xl p-10 md:p-12 shadow-2xl shadow-purple-500/20"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          
          <div className="relative z-10">
            {/* Price */}
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-bold text-white">$2</span>
                <span className="text-2xl text-slate-400">/forever</span>
              </div>
              <p className="text-slate-300 mt-2">One-time payment</p>
            </div>

            {/* Features */}
            <div className="mb-8 grid md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Email input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mb-6"
            >
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email for license
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              <p className="text-xs text-slate-400 mt-2">
                Your license will be linked to this email
              </p>
            </motion.div>

            {/* Payment buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="space-y-3"
            >
              <button
                onClick={handleStripeCheckout}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                <CreditCard className="w-5 h-5" />
                Pay with Card
              </button>

              <button
                onClick={handleCryptoCheckout}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Pay with Crypto (Telegram)
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Secure payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Instant delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Money-back guarantee</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-slate-400 mt-8 text-sm"
        >
          Want to support development? You can pay more than $2 during checkout
        </motion.p>
      </div>
    </section>
  );
}

