"use client";
import Background from "@/components/ui/Backround";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen relative">
      <Background />

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Decorative lime orb */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-lime-400/30 via-lime-500/20 to-transparent opacity-30 blur-3xl animate-float-slow z-0"
          aria-hidden="true"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent drop-shadow-lg mb-6 text-center font-display"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg md:text-xl text-lime-100/90 mb-10 text-center max-w-2xl mx-auto"
        >
          Your privacy is important to us at <span className="font-semibold text-lime-300">BM Computers</span>. This policy explains how we collect, use, and protect your information when you interact with our website and services.
        </motion.p>

        <div className="bg-gradient-to-br from-zinc-900/80 via-zinc-800/80 to-zinc-950/80 border border-lime-400/20 rounded-3xl shadow-lg backdrop-blur-sm p-8 md:p-12 space-y-8 text-lime-100/90">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-lime-300 mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold text-lime-200">Personal Information:</span> Name, email address, phone number, and other details you provide when contacting us or making a purchase.
              </li>
              <li>
                <span className="font-semibold text-lime-200">Usage Data:</span> Information about how you use our website, such as pages visited, time spent, and device/browser details.
              </li>
              <li>
                <span className="font-semibold text-lime-200">Cookies:</span> We use cookies to enhance your browsing experience and analyze site traffic.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-lime-300 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our products and services.</li>
              <li>To respond to your inquiries and process your orders.</li>
              <li>To send important updates, offers, or newsletters (with your consent).</li>
              <li>To analyze website usage and enhance user experience.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-lime-300 mb-2">3. Data Protection & Security</h2>
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. Your information is stored securely and only accessible to authorized personnel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-lime-300 mb-2">4. Sharing Your Information</h2>
            <p>
              We do <span className="font-semibold text-lime-200">not</span> sell, trade, or rent your personal information to third parties. We may share data with trusted partners who assist us in operating our website or servicing you, provided they agree to keep your information confidential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-lime-300 mb-2">5. Your Rights & Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can request access, correction, or deletion of your personal data at any time.</li>
              <li>You may opt out of marketing communications by following the unsubscribe link in our emails.</li>
              <li>Cookies can be managed through your browser settings.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-lime-300 mb-2">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-lime-300 mb-2">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy, please{" "}
              <a
                href="/contact"
                className="text-lime-300 underline hover:text-lime-400 transition"
              >
                contact us
              </a>
              . We are here to help!
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
