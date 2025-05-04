'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

const freelancers = [
  {
    name: "João Silva",
    title: "Desenvolvedor Front-End",
    skills: "React, Tailwind, Firebase",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Especialista em interfaces modernas e responsivas.",
  },
  {
    name: "Ana Costa",
    title: "UI/UX Designer",
    skills: "Figma, Adobe XD",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Apaixonada por criar experiências incríveis.",
  },
  {
    name: "Carlos Mendes",
    title: "Full Stack Dev",
    skills: "Next.js, Node, PostgreSQL",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Soluções escaláveis de ponta a ponta.",
  },
  // Adicione mais se desejar
];

export default function FreelasPage() {
  return (
    <div className="bg-[#0A1E14] text-white min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Todos os Freelancers</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {freelancers.map((freela, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <img src={freela.image} alt={freela.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{freela.name}</h3>
            <p className="text-sm text-gray-400 mb-1">{freela.title}</p>
            <p className="text-sm text-gray-300 mb-2">{freela.skills}</p>
            <p className="text-sm text-gray-400 italic mb-4">{freela.bio}</p>
            <Link href="/#formulario">
              <Button variant="outlined" color="success" size="small">Solicitar esse freelancer</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
