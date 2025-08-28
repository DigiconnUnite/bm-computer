"use client";
import { useState } from "react";
import Background from "@/components/ui/Backround";
import { motion } from "framer-motion";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        budget: "",
        message: "",
        computerType: "",
        urgency: "",
        subscribe: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || 'Failed to send');
            }
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                service: "",
                budget: "",
                message: "",
                computerType: "",
                urgency: "",
                subscribe: false
            });
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen relative">
            <Background />

            <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                {/* Decorative elements */}
                <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-lime-400/30 via-lime-500/20 to-transparent opacity-30 blur-3xl animate-float-slow z-0" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-lime-400/20 via-lime-500/10 to-transparent opacity-20 blur-3xl animate-float-slow z-0" aria-hidden="true" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent drop-shadow-lg mb-4 font-display">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-lime-100/90 max-w-2xl mx-auto">
                        Have questions about our products or services? Reach out to the BM Computers team at Computer Market, Sanjay Place, Agra, India — we're here to help with all your tech needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-gradient-to-br from-zinc-900/80 via-zinc-800/80 to-zinc-950/80 border border-lime-400/20 rounded-2xl shadow-lg backdrop-blur-sm p-8 h-fit"
                    >
                        <h2 className="text-2xl font-bold text-lime-300 mb-6">Get in Touch</h2>

                        <div className="space-y-5">
                            <div className="flex items-start">
                                <div className="bg-lime-400/10 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lime-200">Phone</h3>
                                    <p className="text-lime-100/80">+91 98370 12345</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-lime-400/10 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lime-200">Email</h3>
                                    <p className="text-lime-100/80">bmcomputers.agra@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-lime-400/10 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lime-200">Address</h3>
                                    <p className="text-lime-100/80">BM Computers, Shop No. 12, Computer Market, Sanjay Place, Agra, Uttar Pradesh 282002, India</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-lime-400/10 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lime-200">Hours</h3>
                                    <p className="text-lime-100/80">Mon-Sat: 10am - 8pm</p>
                                    <p className="text-lime-100/80">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-lime-400/20">
                            <h3 className="font-semibold text-lime-200 mb-3">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/bmcomputersagra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-lime-400/10 hover:bg-lime-400/20 p-2 rounded-lg transition"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="w-5 h-5 text-lime-400" />
                                </a>
                                <a
                                    href="https://twitter.com/bmcomputersagra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-lime-400/10 hover:bg-lime-400/20 p-2 rounded-lg transition"
                                    aria-label="X (Twitter)"
                                >
                                    <FaXTwitter className="w-5 h-5 text-lime-400" />
                                </a>
                                <a
                                    href="https://www.instagram.com/bmcomputersagra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-lime-400/10 hover:bg-lime-400/20 p-2 rounded-lg transition"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="w-5 h-5 text-lime-400" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/bmcomputersagra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-lime-400/10 hover:bg-lime-400/20 p-2 rounded-lg transition"
                                    aria-label="LinkedIn"
                                >
                                    <FaYoutube className="w-5 h-5 text-lime-400" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-gradient-to-br from-zinc-900/80 via-zinc-800/80 to-zinc-950/80 border border-lime-400/20 rounded-2xl shadow-lg backdrop-blur-sm p-8"
                    >
                        <h2 className="text-2xl font-bold text-lime-300 mb-6">Send us a Message</h2>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-lime-400/10 border border-lime-400/30 rounded-xl p-6 text-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-lime-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-bold text-lime-300 mb-2">Message Sent Successfully!</h3>
                                <p className="text-lime-100/80">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {error && (
                                    <div className="text-red-400 bg-red-400/10 border border-red-400/30 rounded-md p-3">
                                        {error}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-lime-200 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-zinc-800/50 border border-lime-400/20 rounded-lg py-3 px-4 text-lime-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30 transition"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-lime-200 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-zinc-800/50 border border-lime-400/20 rounded-lg py-3 px-4 text-lime-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30 transition"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="phone" className="block text-lime-200 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            pattern="[6-9]{1}[0-9]{9}"
                                            className="w-full bg-zinc-800/50 border border-lime-400/20 rounded-lg py-3 px-4 text-lime-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30 transition"
                                            placeholder="e.g. 9837012345"
                                        />
                                        <span className="text-xs text-lime-100/60">Enter a valid 10-digit Indian mobile number</span>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-lime-200 mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-zinc-800/50 border border-lime-400/20 rounded-lg py-3 px-4 text-lime-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30 transition"
                                            placeholder="What is this regarding?"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="service" className="block text-lime-200 mb-2">Service Needed</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-800/50 border border-lime-400/20 rounded-lg py-3 px-4 text-lime-100 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30 transition"
                                        >
                                                <option value="">Select a service</option>
                                                <option value="new-purchase">New Purchase</option>
                                            <option value="repair">Computer Repair</option>
                                            <option value="custom-build">Custom PC Build</option>
                                            <option value="upgrade">Hardware Upgrade</option>
                                            <option value="network">Networking Setup</option>
                                            <option value="data-recovery">Data Recovery</option>
                                            <option value="virus-removal">Virus Removal</option>
                                            <option value="consultation">IT Consultation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="computerType" className="block text-lime-200 mb-2">Computer Type</label>
                                        <select
                                            id="computerType"
                                            name="computerType"
                                            value={formData.computerType}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-800/50 border border-lime-400/20 rounded-lg py-3 px-4 text-lime-100 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30 transition"
                                        >
                                            <option value="">Select type</option>
                                            <option value="desktop">Desktop PC</option>
                                            <option value="laptop">Laptop</option>
                                            <option value="gaming">Gaming PC</option>
                                            <option value="workstation">Workstation</option>
                                            <option value="server">Server</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                
                                <div>
                                    <label htmlFor="message" className="block text-lime-200 mb-2">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-zinc-800/50 border border-lime-400/20 rounded-lg py-3 px-4 text-lime-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-lime-400/30 transition"
                                        placeholder="Please describe your inquiry in detail..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-zinc-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-lime-400/20 hover:shadow-lime-400/30 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Sending…' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}