"use client";
import Background from "@/components/ui/Backround";
import { motion } from "framer-motion";

const termsSections = [
    {
        title: "1. Acceptance of Terms",
        content: (
            <p>
                By accessing and using the BM Computers website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.
            </p>
        ),
    },
    {
        title: "2. Use License",
        content: (
            <>
                <p className="mb-2">Permission is granted to temporarily use the materials on BM Computers' website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>modify or copy the materials;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                </ul>
            </>
        ),
    },
    {
        title: "3. Products and Services",
        content: (
            <p>
                All products and services offered by BM Computers are subject to availability. We reserve the right to discontinue any products or services at any time. Prices for our products are subject to change without notice. We are not liable to you or any third-party for any modification, price change, suspension, or discontinuance of products or services.
            </p>
        ),
    },
    {
        title: "4. Account Creation",
        content: (
            <p>
                To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
        ),
    },
    {
        title: "5. Purchases and Payment",
        content: (
            <ul className="list-disc pl-6 space-y-2">
                <li>All purchases are subject to product availability and we reserve the right to limit quantities.</li>
                <li>We accept various forms of payment as indicated on our website. You represent and warrant that you have the legal right to use any payment method.</li>
                <li>Prices are shown in the currency indicated and do not include taxes or shipping charges, which will be added during checkout.</li>
            </ul>
        ),
    },
    {
        title: "6. Returns and Refunds",
        content: (
            <p>
                Please review our Return Policy, which is incorporated into these Terms. We reserve the right to refuse returns that do not comply with our policy. Refunds will be issued to the original payment method and may take several business days to process.
            </p>
        ),
    },
    {
        title: "7. Intellectual Property",
        content: (
            <p>
                All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of BM Computers or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.
            </p>
        ),
    },
    {
        title: "8. User Content",
        content: (
            <p>
                If you submit any content to our website (such as reviews, comments, or suggestions), you grant BM Computers a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, publicly perform, display, reproduce, and distribute such content on and through our website.
            </p>
        ),
    },
    {
        title: "9. Disclaimer",
        content: (
            <p>
                The materials on BM Computers' website are provided on an 'as is' basis. BM Computers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
        ),
    },
    {
        title: "10. Limitations",
        content: (
            <p>
                In no event shall BM Computers or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BM Computers' website, even if BM Computers or a BM Computers authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
        ),
    },
    {
        title: "11. Revisions and Errata",
        content: (
            <p>
                The materials appearing on BM Computers' website could include technical, typographical, or photographic errors. BM Computers does not warrant that any of the materials on its website are accurate, complete, or current. BM Computers may make changes to the materials contained on its website at any time without notice.
            </p>
        ),
    },
    {
        title: "12. Links",
        content: (
            <p>
                BM Computers has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BM Computers of the site. Use of any such linked website is at the user's own risk.
            </p>
        ),
    },
    {
        title: "13. Modifications to Terms",
        content: (
            <p>
                BM Computers may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
        ),
    },
    {
        title: "14. Governing Law",
        content: (
            <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where BM Computers is established and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
        ),
    },
    {
        title: "15. Contact Information",
        content: (
            <p>
                Questions about the Terms of Service should be sent to us at{" "}
                <a
                    href="/contact"
                    className="text-lime-300 underline hover:text-lime-400 transition"
                >
                    our contact page
                </a>.
            </p>
        ),
    },
];

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen relative">
            <Background />

            <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                {/* Decorative lime orb */}
                <div
                    className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-lime-400/30 via-lime-500/20 to-transparent opacity-30 blur-3xl animate-float-slow z-0"
                    aria-hidden="true"
                />
                <h1
                    className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent drop-shadow-lg mb-6 text-center font-display"
                >
                    Terms and Conditions
                </h1>
                <p

                    className="text-lg md:text-xl text-lime-100/90 mb-10 text-center max-w-2xl mx-auto"
                >
                    Welcome to BM Computers. These terms and conditions outline the rules and regulations for the use of our website and services.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    {termsSections.map((section, idx) => (
                        <div
                            className="bg-gradient-to-br from-zinc-900/80 via-zinc-800/80 to-zinc-950/80 border border-lime-400/20 rounded-2xl shadow-lg backdrop-blur-sm p-6 flex flex-col"
                        >
                            <h2 className="text-2xl font-bold text-lime-300 mb-3">{section.title}</h2>
                            <div className="text-lime-100/90">{section.content}</div>
                        </div>
                    ))}
                </div>

                <div

                    className="mt-12 text-center text-lime-200/80 italic"
                >
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </section>
        </main>
    );
}