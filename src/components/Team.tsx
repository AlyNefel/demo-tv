"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Elias Thorne",
    role: "Creative Director",
    image: "/team/team-img-1.jpg"
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Visual Effects",
    image: "/team/team-img-2.jpg"
  },
  {
    name: "Dr. Aris Vane",
    role: "Lead Narrative Designer",
    image: "/team/team-img-3.jpg"
  },
  {
    name: "Luna Vesper",
    role: "Cinematographer",
    image: "/team/team-img-4.jpg"
  }
];

const Team = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black/50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image src="/canvas/5.png" fill alt="" className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-black text-white italic tracking-tighter mb-4">
            MEET THE <span className="text-primary">TEAM</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            The visionaries behind the most ambitious storytelling in television history.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-full aspect-[3/4] mb-6 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                <Image 
                  src={member.image} 
                  fill 
                  alt={member.name} 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-bold text-primary tracking-widest uppercase mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-black text-white tracking-tighter">
                    {member.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
