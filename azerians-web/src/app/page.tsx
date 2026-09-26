"use client";

import React from 'react';
import { Terminal, Shield, Crosshair, Users, Trophy, Flag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const achievements2026 = [
    { event: "0xV01D CTF", place: 621, points: "75.000", rating: "0.188" },
    { event: "THJCC CTF", place: 269, points: "100.000", rating: "0.000" },
    { event: "0xFUN CTF", place: 1088, points: "3.000", rating: "0.019" },
    { event: "PascalCTF", place: 672, points: "329.000", rating: "1.101" },
    { event: "UofTCTF", place: 1039, points: "64.000", rating: "0.480" }
  ];

  const achievements2025 = [
    { event: "LakeCTF Quals", place: 293, points: "300.000", rating: "5.626" }
  ];

  return (
    <main className="min-h-screen bg-black text-neutral-300 font-mono relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        
        {/* Header / Hero */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-b border-neutral-800 pb-16 mb-16"
        >
          <div className="flex items-center gap-4 mb-4 text-white">
            <Terminal size={32} />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter glitch" data-text="AZERIANS">AZERIANS</h1>
          </div>
          <p className="text-xl text-neutral-400 max-w-2xl mt-6 font-sans">
            A new elite CTF team initiated by <span className="text-white font-mono font-bold">Azerian (UID 01)</span>. 
            Currently operating solo, but aggressively recruiting top-tier talent.
          </p>
          
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 border border-white text-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer">
            <Users size={16} />
            <span>Join the Team</span>
          </div>
        </motion.header>

        {/* The Leader Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2 border-l-4 border-white pl-4 uppercase tracking-wider">
              <Shield size={24} /> UID 01: Azerian
            </h2>
            <div className="space-y-4 text-neutral-400 font-sans leading-relaxed">
              <p>
                I am Azerian, a relentless CTF player with a proven track record. 
                Beyond my solo achievements, I was previously a core member of my former teams, <strong>0xV01D</strong> and <strong>Team CTC</strong>.
              </p>
              <div className="bg-neutral-900 p-6 border border-neutral-800 rounded-sm">
                <div className="flex items-center gap-2 text-white font-mono mb-2">
                  <Flag size={18} /> Former Team: 0xV01D Stats
                </div>
                <ul className="space-y-2 text-sm font-mono mt-4">
                  <li className="flex justify-between border-b border-neutral-800 pb-2">
                    <span>Global Rating (2026)</span>
                    <span className="text-white">#45 (490.772 pts)</span>
                  </li>
                  <li className="flex justify-between border-b border-neutral-800 pb-2">
                    <span>Country (Jordan)</span>
                    <span className="text-white">#2</span>
                  </li>
                </ul>
                <p className="text-xs mt-4 text-neutral-500 italic">"We are 0xV01D... but we used O as the 0 because the name was unavailable it must have been stolen by noobs ^_^"</p>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-800 p-6 relative group">
            <div className="absolute top-0 left-0 w-2 h-2 bg-white"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-white"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-white"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-white"></div>
            <h3 className="text-xl text-white mb-4 flex items-center gap-2"><Crosshair size={20} /> Objective</h3>
            <p className="text-neutral-400 font-sans mb-4">
              Building <strong>Azerians</strong> into a formidable force in the global CTF landscape. The goal is simple: dominate leaderboards, unravel complex challenges, and establish a legacy.
            </p>
            <p className="text-white font-mono uppercase text-sm border-t border-neutral-800 pt-4 mt-8">
              Status: <span className="animate-pulse text-green-500">Recruiting</span>
            </p>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl text-white font-bold mb-8 flex items-center gap-2 border-l-4 border-white pl-4 uppercase tracking-wider">
            <Trophy size={24} /> Solo Track Record
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-lg text-white mb-4 bg-neutral-900 inline-block px-3 py-1">2026 Season</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-neutral-800 text-neutral-500 uppercase tracking-widest text-xs">
                      <th className="py-3 pr-6 font-normal">Place</th>
                      <th className="py-3 px-6 font-normal">Event</th>
                      <th className="py-3 px-6 font-normal text-right">CTF Points</th>
                      <th className="py-3 pl-6 font-normal text-right">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {achievements2026.map((ach, idx) => (
                      <tr key={idx} className="border-b border-neutral-900 hover:bg-neutral-900/50 transition-colors">
                        <td className="py-4 pr-6 text-white">{ach.place}</td>
                        <td className="py-4 px-6 text-neutral-300">{ach.event}</td>
                        <td className="py-4 px-6 text-right font-mono text-neutral-400">{ach.points}</td>
                        <td className="py-4 pl-6 text-right font-mono text-neutral-400">{ach.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg text-white mb-4 bg-neutral-900 inline-block px-3 py-1">2025 Season</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-neutral-800 text-neutral-500 uppercase tracking-widest text-xs">
                      <th className="py-3 pr-6 font-normal">Place</th>
                      <th className="py-3 px-6 font-normal">Event</th>
                      <th className="py-3 px-6 font-normal text-right">CTF Points</th>
                      <th className="py-3 pl-6 font-normal text-right">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {achievements2025.map((ach, idx) => (
                      <tr key={idx} className="border-b border-neutral-900 hover:bg-neutral-900/50 transition-colors">
                        <td className="py-4 pr-6 text-white">{ach.place}</td>
                        <td className="py-4 px-6 text-neutral-300">{ach.event}</td>
                        <td className="py-4 px-6 text-right font-mono text-neutral-400">{ach.points}</td>
                        <td className="py-4 pl-6 text-right font-mono text-neutral-400">{ach.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <footer className="mt-32 border-t border-neutral-800 pt-16 pb-8 text-center">
          <h2 className="text-3xl text-white font-bold mb-6 tracking-tight">READY TO HACK?</h2>
          <p className="text-neutral-400 font-sans mb-8 max-w-lg mx-auto">
            Azerians is actively recruiting members who are passionate about CTF, reverse engineering, pwn, web exploitation, and crypto.
          </p>
          <a href="mailto:contact@azerians.team" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-300 transition-colors">
            Contact UID 01
          </a>
          
          <div className="mt-24 text-xs text-neutral-600 flex justify-center items-center gap-4 uppercase tracking-widest">
            <span>© {new Date().getFullYear()} Azerians</span>
            <span>|</span>
            <span>UID 01</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
