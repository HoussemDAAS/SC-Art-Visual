"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#262626]">
      <div className="container-elegant">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="group">
            <h1 className="text-xl md:text-2xl font-light tracking-[0.15em] text-white transition-all duration-300 group-hover:tracking-[0.2em]">
              SC Art Visual
            </h1>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/#features" 
              className="hidden md:block text-sm text-[#E5E5E5] hover:text-white transition-colors tracking-wide"
            >
              Features
            </Link>
            <Link 
              href="/#specs" 
              className="hidden md:block text-sm text-[#E5E5E5] hover:text-white transition-colors tracking-wide"
            >
              What&apos;s Included
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
