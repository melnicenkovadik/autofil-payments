'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { MobileCarousel } from './ui/MobileCarousel';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer',
    company: 'Tech Startup',
    avatar: '👩‍💻',
    rating: 5,
    text: 'This extension saved me hours on job applications. The AI field matching is incredibly accurate. Best $2 I ever spent!',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Freelancer',
    company: 'Self-employed',
    avatar: '👨‍💼',
    rating: 5,
    text: 'I love having separate profiles for different clients. The encryption gives me peace of mind with sensitive data.',
  },
  {
    name: 'Emma Thompson',
    role: 'Marketing Manager',
    company: 'E-commerce',
    avatar: '👩‍🎨',
    rating: 5,
    text: 'Finally, no more typing the same information over and over. The Cmd+Shift+F shortcut is pure magic!',
  },
  {
    name: 'David Park',
    role: 'Graduate Student',
    company: 'University',
    avatar: '👨‍🎓',
    rating: 5,
    text: 'Perfect for scholarship and program applications. Unlimited profiles mean I can tailor each application effortlessly.',
  },
  {
    name: 'Lisa Wang',
    role: 'Business Owner',
    company: 'Small Business',
    avatar: '👩‍💼',
    rating: 5,
    text: 'The local encryption is a game-changer. I can safely store client information without worrying about cloud breaches.',
  },
  {
    name: 'James Wilson',
    role: 'Developer',
    company: 'Startup',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Clean, fast, and actually works everywhere. No subscription model is refreshing in 2024. Highly recommend!',
  },
];

export function Testimonials() {
  const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-purple-500/30 transition-all duration-300 h-full"
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-purple-500/20 group-hover:text-purple-500/40 transition-colors" />

      <div className="relative z-10">
        {/* Avatar and info */}
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="text-3xl sm:text-4xl">{testimonial.avatar}</div>
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
            <p className="text-xs sm:text-sm text-slate-400">{testimonial.role}</p>
            <p className="text-[10px] sm:text-xs text-slate-500">{testimonial.company}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-3 sm:mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Testimonial text */}
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          "{testimonial.text}"
        </p>
      </div>

      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.div>
  );

  return (
    <section className="min-h-0 md:min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Loved by Thousands
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Join professionals, students, and entrepreneurs who save hours every week
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <MobileCarousel>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="px-4">
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </MobileCarousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              10,000+
            </div>
            <div className="text-sm text-slate-400 mt-1">Active Users</div>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              4.9★
            </div>
            <div className="text-sm text-slate-400 mt-1">Average Rating</div>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              1M+
            </div>
            <div className="text-sm text-slate-400 mt-1">Forms Filled</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

