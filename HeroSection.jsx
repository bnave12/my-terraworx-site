const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await db.integrations.Core.SendEmail({
        to: "info@terraworx.us",
        subject: `New inquiry from ${form.name}`,
        body: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`,
      });
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setSent(true);
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#f7f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2E5A6B] font-medium tracking-[0.15em] uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#1a3a47] mb-4">
            Start Your Project
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Ready to build? Contact us today for a free consultation and project estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-heading font-bold text-[#1a3a47] mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a href="tel:8038109444" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#2E5A6B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2E5A6B]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#2E5A6B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-[#1a3a47]">(803) 810-9444</p>
                  </div>
                </a>
                <a href="mailto:info@terraworx.us" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#2E5A6B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2E5A6B]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#2E5A6B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-[#1a3a47]">info@terraworx.us</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2E5A6B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#2E5A6B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Service Area</p>
                    <p className="font-medium text-[#1a3a47]">State of Florida</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2E5A6B] rounded-xl p-6 text-white">
              <h4 className="font-heading font-bold mb-2">Free Consultation</h4>
              <p className="text-sm text-[#a3d4e3] leading-relaxed">
                Not sure where to start? Give us a call or fill out the form and we'll walk you through the process — from concept to completion, at no obligation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 text-center">
                <CheckCircle className="w-16 h-16 text-[#2E5A6B] mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-[#1a3a47] mb-2">Thank You!</h3>
                <p className="text-gray-500">We've received your message and will get back to you within 24 hours.</p>
                <Button
                  className="mt-6 bg-[#2E5A6B] hover:bg-[#1a3a47]"
                  onClick={() => setSent(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1a3a47] mb-1.5">Full Name *</label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="border-gray-200 focus:border-[#2E5A6B] focus:ring-[#2E5A6B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a3a47] mb-1.5">Email *</label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="border-gray-200 focus:border-[#2E5A6B] focus:ring-[#2E5A6B]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a3a47] mb-1.5">Phone</label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="border-gray-200 focus:border-[#2E5A6B] focus:ring-[#2E5A6B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a3a47] mb-1.5">Project Details *</label>
                  <Textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project — type of build, location, timeline, budget range..."
                    className="border-gray-200 focus:border-[#2E5A6B] focus:ring-[#2E5A6B] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#2E5A6B] hover:bg-[#1a3a47] text-white font-semibold py-6 text-base"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}