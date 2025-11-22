'use client';

import { Github, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
              Autofill Pro
            </h3>
            <p className="text-slate-400 mb-4 max-w-md">
              AI-powered autofill for Chrome. All data encrypted and stored locally. Unlimited profiles for any scenario.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Github className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href="mailto:support@autofillpro.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Mail className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#demo" className="text-slate-400 hover:text-white transition-colors">
                  Live Demo
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  Chrome Store
                </a>
              </li>
              <li>
                <a href="/docs" className="text-slate-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-slate-400 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a href="mailto:support@autofillpro.com" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Autofill Pro. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <span>🔒 AES-256 Encrypted</span>
            <span>•</span>
            <span>🧠 AI-Powered</span>
            <span>•</span>
            <span>♾️ Unlimited Profiles</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

