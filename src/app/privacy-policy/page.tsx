"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from "@/components/Navbar";

const floatingLogos = [
  { src: "/m-logos/image.png", size: 450, top: "10%", left: "-5%", delay: 0 },
  { src: "/m-logos/m-1.png", size: 600, top: "40%", right: "-10%", delay: 2 },
  { src: "/m-logos/m-2.png", size: 350, bottom: "10%", left: "15%", delay: 4 },
];

export default function PrivacyPolicy() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile / iOS — disable heavy GPU effects on these devices
    const mobile =
      /iPad|iPhone|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768;
    setIsMobile(mobile);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-black">
        {/* Floating Background Logos — disabled on mobile to prevent iOS GPU freeze */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
        >
          {!isMobile &&
            floatingLogos.map((logo, i) => (
              <motion.div
                key={i}
                className="absolute opacity-20"
                style={{
                  top: logo.top,
                  left: logo.left,
                  right: logo.right,
                  bottom: logo.bottom,
                  width: logo.size,
                  height: logo.size,
                  filter: "blur(8px)", // reduced from 20px
                  willChange: "transform",
                }}
                animate={{
                  y: [0, -40, 40, 0],   // reduced range
                  x: [0, 80, -80, 0],    // reduced range
                  rotate: [0, 20, 0],    // reduced rotation
                }}
                transition={{
                  duration: 50 + i * 8,  // slower = fewer repaints
                  repeat: Infinity,
                  ease: "easeInOut",      // easeInOut is cheaper than linear
                  delay: logo.delay,
                }}
              >
                <Image src={logo.src} fill alt="" className="object-contain" />
              </motion.div>
            ))}

          {/* Pink Glows — no mix-blend-mode, reduced blur */}
          {!isMobile && (
            <>
              <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px]" />
              <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[80px]" />
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto font-rosario text-white/80">
          <h1 className="text-4xl font-heading font-black text-white mb-2">Privacy Policy of Monarch TV Studios</h1>
          
          <p className="mb-12 text-sm text-white/50">Updated the 11th of May 2026</p>

          <div className="space-y-8">
            <section>
              <p className="leading-relaxed">
                Monarch TV Studios is currently under establishment in France, committed to protecting your privacy
                and ensuring the confidentiality of your personal data in accordance with the General Data
                Protection Regulation (GDPR) and French data protection laws (Loi Informatique et Libertés).
                Additionally, Monarch TV Studios will have two subsidiaries in Tunisia: <strong className="text-white">Monarch TV Pictures</strong>,
                dedicated to fiction series, documentaries, and entertainment shows production, and <strong className="text-white">Monarch TV Records</strong>, focused on scores, music, and soundtrack production. Both subsidiaries are under
                establishment in Tunisia via the FIPA Tunisian organization. The group will also own three satellite
                and streaming FAST TV channels—<strong className="text-white">Monarch TV Channel</strong>, <strong className="text-white">Monarch TV Crypto</strong>, and <strong className="text-white">Monarch TV Novels</strong>—all broadcasting in English for a global audience.
              </p>
            </section>

            <section>
              <p className="leading-relaxed">
                This privacy policy explains how we collect, process, and safeguard your personal information when
                you visit our website. We collect only the data you voluntarily provide, such as when you contact us,
                subscribe to newsletters, or use our services. This data may include your name, email address, phone
                number, and other relevant information.
              </p>
            </section>

            <section>
              <p className="leading-relaxed">
                We use your data solely for purposes such as responding to your inquiries, managing your account,
                providing updates about our services, or complying with legal obligations. Your personal data will not
                be shared with third parties without your explicit consent unless required by law or for legitimate
                interests such as service improvements.
              </p>
            </section>

            <section>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data against
                unauthorized access, alteration, disclosure, or destruction. You have rights under the GDPR, including
                access, rectification, deletion, opposition, and data portability, which you can exercise by contacting
                us at business@monarchtvstudios.com.
              </p>
            </section>

            <hr className="border-white/10 my-10" />

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Cookies</h3>
              <p className="leading-relaxed">
                Our website uses cookies to enhance your browsing experience. Cookies are small files stored on
                your device that help us analyze site traffic and personalize content. You can manage your cookie
                preferences through your browser settings. Disabling cookies may affect your experience on our
                website.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Data Retention</h3>
              <p className="leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
                policy unless a longer retention period is required by law. When your data is no longer needed, we
                securely delete or anonymize it.
              </p>
            </section>

            <hr className="border-white/10 my-10" />

            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Details</h3>
              <p className="leading-relaxed mb-4">
                For questions, requests, or to exercise your rights regarding your personal data, please contact us at:
              </p>
              <ul className="space-y-2">
                <li><strong className="text-white">Email:</strong> business@monarchtvstudios.com</li>
                <li><strong className="text-white">Phone:</strong> TBA</li>
                <li><strong className="text-white">Address:</strong> Futuroscope-Poitiers Avenue René Monory, 86360 Chasseneuil-du-Poitou, France.</li>
              </ul>
            </section>

            <section className="pt-8">
              <p className="leading-relaxed italic text-white/70">
                By using our website, you agree to the terms of this privacy policy. If you have any concerns or
                require further information, please do not hesitate to contact us.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
