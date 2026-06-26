const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://media.db.com/images/public/user_6a3dba53529653d7e9569089/a21b1b328_TerraworxDevelopment_4_final_22042025-01.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm ${scrolled ? "py-2" : "py-3"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center rounded-lg overflow-hidden">
          <img src={LOGO_URL} alt="Terraworx Development Logo" className="h-20 sm:h-28 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#1a3a47] transition-colors hover:text-[#2E5A6B]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8038109444"
            className="inline-flex items-center gap-2 bg-[#2E5A6B] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#1a3a47] transition-colors"
          >
            <Phone className="w-4 h-4" />
            (803) 810-9444
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-md text-[#1a3a47]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-3 text-[#1a3a47] font-medium hover:bg-[#f0f5f7] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:8038109444"
                className="flex items-center gap-2 py-3 px-3 text-[#2E5A6B] font-semibold"
              >
                <Phone className="w-4 h-4" />
                (803) 810-9444
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}