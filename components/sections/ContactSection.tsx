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
    // Here you would typically send the form data to your backend or an email service
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
      className="relative py-20  overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-emerald-600 mb-4 text-center font-display"
        >
          Quick <span className="text-emerald-700">Contact</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 mb-12 text-center"
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
            className="flex-1 bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col justify-center mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-emerald-700 mb-6 font-display">Contact Information</h3>
            <ul className="space-y-5 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                <span>Computers Market, Sanjay Palace, Agra</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 mt-1" />
                <a href="tel:+9190909090" className="hover:underline hover:text-emerald-700 transition">
                  +91-90909090
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-600 mt-1" />
                <a href="mailto:support@bmcomputers.com" className="hover:underline hover:text-emerald-700 transition">
                  support@bmcomputers.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-emerald-700 mb-2">Business Hours</h4>
              <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex-1 bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-emerald-700 mb-6 font-display">Quick Enquiry Form</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
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
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
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
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
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
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="requirements">
                  Computer Requirement
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
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
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition min-h-[100px] resize-y"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more about your requirements or ask a question..."
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: '#059669', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              disabled={submitted}
            >
              <Send className="w-5 h-5" />
              {submitted ? 'Submitted!' : 'Send Message'}
            </motion.button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-700 font-semibold text-center mt-4"
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
