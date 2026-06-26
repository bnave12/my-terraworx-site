const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://media.db.com/images/public/user_6a3dba53529653d7e9569089/a21b1b328_TerraworxDevelopment_4_final_22042025-01.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1f26] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src={LOGO_URL} alt="Terraworx Development" className="h-20 w-auto mb-5 brightness-0 invert opacity-80" />
            <p className="text-sm leading-relaxed max-w-xs">
              Florida's trusted construction and development company. Building quality residential and commercial projects across the Sunshine State.
            </p>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-5 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-5 text-sm tracking-wide uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:8038109444" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#7fb8c9]" />
                  (803) 810-9444
                </a>
              </li>
              <li>
                <a href="mailto:info@terraworx.us" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#7fb8c9]" />
                  info@terraworx.us
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#7fb8c9]" />
                Florida, United States
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {year} Terraworx Development. All rights reserved.
          </p>
          <p className="text-xs">
            Licensed Florida General Contractor #CGC1535251
          </p>
        </div>
      </div>
    </footer>
  );
}