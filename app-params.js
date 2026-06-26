const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Home, Building2, Map, Hammer } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "From single-family homes to multi-unit developments, we build high-quality residences designed for the Florida lifestyle. Every detail is carefully planned and executed to deliver a home that exceeds expectations.",
    image: "https://media.db.com/images/public/user_6a3dba53529653d7e9569089/2ea544916_55_453a8774_1.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "We deliver commercial projects that meet the demands of modern business — from retail spaces and offices to mixed-use developments. Built on time, on budget, and to the highest standards.",
    image: null,
  },
  {
    icon: Hammer,
    title: "Spec Homes",
    description:
      "Our spec homes combine market-driven design with premium finishes. We identify prime locations across Florida and build move-in-ready homes that offer exceptional value and modern living.",
    image: "https://media.db.com/images/public/user_6a3dba53529653d7e9569089/db7ee3e10_28_453a8859.jpg",
  },
  {
    icon: Map,
    title: "Land Development",
    description:
      "We transform raw land into build-ready lots and thriving communities. Our development expertise covers site planning, permitting, infrastructure, and everything needed to bring a vision to life.",
    image: null,
  },
];

export default function ServicesSection({ commercialImage, developmentImage }) {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2E5A6B] font-medium tracking-[0.15em] uppercase text-sm mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#1a3a47] mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Comprehensive construction and development solutions tailored to Florida's unique building environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const imgSrc = service.image || (service.title === "Commercial Construction" ? commercialImage : developmentImage);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-lg shadow-sm">
                    <service.icon className="w-6 h-6 text-[#2E5A6B]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-[#1a3a47] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}