'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
      name: '',
      email: '',
      phone: '',
      requirements: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent drop-shadow-lg mb-4 text-center font-display"
        >
          Quick <span className="from-lime-400 to-lime-600 bg-gradient-to-r bg-clip-text text-transparent">Contact</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-lime-100/90 mb-12 text-center"
        >
          Need a custom PC, laptop, or have a quick question? Reach out and our experts will get back to you fast!
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1  bg-gradient-to-br from-lime-950 via-neutral-900 to-lime-950 rounded-2xl border border-lime-400 shadow-lg p-8 flex flex-col justify-center mb-8 md:mb-0"

          >
            <h3 className="text-2xl font-bold text-lime-300 mb-6 font-display">Contact Information</h3>
            <ul className="space-y-5 text-lime-100/90 text-base">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-lime-400 mt-1" />
                <span>Computers Market, Sanjay Palace, Agra</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-lime-400 mt-1" />
                <a href="tel:+9190909090" className="hover:underline hover:text-lime-300 transition">
                  +91-90909090
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-lime-400 mt-1" />
                <a href="mailto:support@bmcomputers.com" className="hover:underline hover:text-lime-300 transition">
                  support@bmcomputers.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-lime-300 mb-2">Business Hours</h4>
              <p className="text-lime-200">Mon - Sat: 10:00 AM - 8:00 PM</p>
              <p className="text-lime-200">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex-1  bg-gradient-to-br from-lime-950 via-neutral-900 to-lime-950 rounded-2xl border border-lime-400 shadow-lg p-8 flex flex-col justify-center"

          >
            <h3 className="text-2xl font-bold text-lime-50 mb-6 font-display">Quick Enquiry Form</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lime-100 font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-lime-300 bg-zinc-950/60 text-lime-100 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition placeholder:text-lime-400"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block text-lime-100 font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-lime-300 bg-zinc-950/60 text-lime-100 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition placeholder:text-lime-400"
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-lime-100 font-semibold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-lime-300 bg-zinc-950/60 text-lime-100 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition placeholder:text-lime-400"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="block text-lime-100 font-semibold mb-2" htmlFor="requirements">
                  Computer Requirement
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-lime-300 bg-zinc-950/60 text-lime-100 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition placeholder:text-lime-400"
                  type="text"
                  id="requirements"
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Gaming PC, Office Laptop"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-lime-100 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-lime-300 bg-zinc-950/60 text-lime-100 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 outline-none transition min-h-[100px] resize-y placeholder:text-lime-400"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more about your requirements or ask a question..."
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: '#a3e635', color: '#222' }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-lime-400 text-zinc-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-300"
              disabled={submitted}
            >
              <Send className="w-5 h-5" />
              {submitted ? 'Submitted!' : 'Send Message'}
            </motion.button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lime-400 font-semibold text-center mt-4"
              >
                Thank you! We have received your enquiry.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
