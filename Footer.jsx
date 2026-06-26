const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const INTERIOR_IMG = "https://media.db.com/images/public/user_6a3dba53529653d7e9569089/ab7ce1fab_22_453a8829.jpg";

const values = [
  "Licensed & insured Florida contractor",
  "Residential & commercial expertise",
  "Transparent pricing — no hidden costs",
  "Quality materials & craftsmanship",
  "On-time project delivery",
  "Full-service development solutions",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#f7f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={INTERIOR_IMG}
                alt="Modern open-concept interior with marble floors and contemporary kitchen built by Terraworx Development"
                className="w-full h-[420px] object-cover"
              />
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#2E5A6B] font-medium tracking-[0.15em] uppercase text-sm mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#1a3a47] mb-6">
              Building Excellence Across Florida
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Terraworx Development is a Florida-based construction and development company dedicated to shaping the built environment with precision, integrity, and uncompromising quality. We specialize in new residential and commercial construction, land development, and spec homes — delivering projects that stand the test of time.
              </p>
              <p>
                Our team brings deep expertise in Florida's unique construction landscape, from understanding local building codes and hurricane-resistant standards to navigating the permitting process efficiently. Whether it's a custom single-family residence, a commercial build-out, or a full-scale land development project, we approach every job with the same commitment to excellence.
              </p>
              <p>
                At Terraworx Development, we believe that great construction starts with great relationships. We work closely with our clients at every stage — from initial concept through final walkthrough — ensuring transparency, clear communication, and a finished product that exceeds expectations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2E5A6B] flex-shrink-0" />
                  <span className="text-sm text-[#1a3a47] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}