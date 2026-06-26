import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed to build in Florida with comprehensive insurance coverage. Your investment is protected from groundbreaking to move-in day.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We use only the highest-grade materials and proven construction techniques. Every project is built to exceed Florida's rigorous building standards.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We understand that timelines matter. Our streamlined project management ensures milestones are met and your project is completed on schedule.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise change orders. We provide detailed, upfront estimates and keep you informed of every dollar throughout the build.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-[#1a3a47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7fb8c9] font-medium tracking-[0.15em] uppercase text-sm mb-3">
            Why Terraworx
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We hold ourselves to the highest standards on every project — because your trust is the foundation we build on.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#2E5A6B]/30 mb-6 group-hover:bg-[#2E5A6B]/50 transition-colors">
                <reason.icon className="w-7 h-7 text-[#7fb8c9]" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}