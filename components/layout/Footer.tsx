"use client";

import { Mail, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#262626] bg-black">
      <div className="container-elegant py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-light tracking-[0.15em] text-white mb-2">
              SC ART VISUAL
            </h3>
            <p className="text-sm text-[#D4D4D4] tracking-wide">
              1500 Professional SC Art Visual
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="mailto:sabrichetouane68@gmail.com"
              className="text-[#D4D4D4] hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="https://www.instagram.com/sc_art_visual/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4D4D4] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-[#A3A3A3] tracking-wide">
              © {currentYear} SC Art Visual. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
