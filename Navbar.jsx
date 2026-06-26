import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#2E5A6B] to-[#1a3a47] rounded-2xl p-10 sm:p-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Ready to Break Ground?
          </h2>
          <p className="text-[#a3d4e3] text-lg max-w-xl mx-auto mb-8">
            Whether you're planning a new home, a commercial project, or a full development — we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a3a47] font-semibold px-8 py-4 rounded-md hover:bg-gray-100 transition-all group"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:8038109444"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-all"
            >
              Call (803) 810-9444
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}