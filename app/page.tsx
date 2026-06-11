import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-[#f0f0f0] flex items-center justify-center p-5">
      <section className="relative w-full max-w-[1536px] h-screen rounded-[3rem] overflow-hidden flex flex-col items-center bg-white/10">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4" type="video/mp4" />
        </video>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col">
          {/* Navbar */}
          <nav className="flex items-center justify-between py-6 px-10 w-full">
            <div className="flex-1 hidden md:block" />
            <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
              <li className="cursor-pointer hover:opacity-70 transition-opacity">Tutorial Programmes</li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity">Students Performance</li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity">Mock Papers</li>
              <li className="cursor-pointer hover:opacity-70 transition-opacity">FAQ</li>
            </ul>
            <div className="md:hidden">
              <span className="text-xl text-[rgba(30,50,90,0.9)]">Dr Jon</span>
            </div>
            <div className="flex-1 flex justify-end">
              <motion.a
                href="https://wa.me/447770898727"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full px-6 py-2 gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm">Book Lesson</span>
              </motion.a>
            </div>
          </nav>

          {/* Hero Text */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mb-6 w-fit mx-auto"
            >
              <Sparkles className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
              <span className="text-[14px] text-[rgba(30,50,90,0.9)]">Physics PhD • 15+ Years</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[80px] font-normal text-[#5E6470] mb-4 tracking-tight leading-tight"
            >
              Expert A-Level & GCSE Tuition
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-[#5E6470] opacity-80 max-w-2xl leading-relaxed"
            >
              Physics PhD with 15+ years of experience. Data-driven exam preparation with 5000+ questions database. Personalized tuition for GCSE, A-Level, and Oxbridge admissions.
            </motion.p>
          </div>
        </div>

        {/* Bottom Left Card */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-10 left-10 p-5 rounded-2xl bg-white/30 backdrop-blur-xl flex flex-col gap-3 w-fit"
        >
          <div>
            <span className="text-3xl font-normal text-[rgba(30,50,90,0.9)]">5000+</span>
            <span className="block text-xs text-[rgba(30,50,90,0.6)] uppercase tracking-wider mt-1">Questions DB</span>
          </div>
          <motion.a
            href="https://wa.me/447770898727"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 w-fit"
          >
            <div className="bg-[rgba(30,50,90,0.1)] p-1 rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)]" />
            </div>
            <span className="text-sm text-[rgba(30,50,90,0.9)]">WhatsApp</span>
          </motion.a>
        </motion.div>

        {/* Bottom Right Corner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-0 right-0 p-6 bg-[#f0f0f0] rounded-tl-3xl flex items-center gap-6"
        >
          <div className="bg-[rgba(30,50,90,0.05)] w-14 h-14 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]">
            <ArrowUpRight className="w-6 h-6 text-[rgba(30,50,90,0.8)]" />
          </div>
          <div>
            <p className="text-xl font-normal text-[rgba(30,50,90,0.95)] m-0">Contact</p>
            <a 
              href="mailto:drjon@drjontutorial.com"
              className="text-sm text-[rgba(30,50,90,0.6)] hover:text-[rgba(30,50,90,0.8)] flex items-center gap-1 mt-1"
            >
              drjon@drjontutorial.com
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
