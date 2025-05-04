'use client';

import React from 'react';

export default function ProjetosPage() {
  const projetos = [
    {
      title: "Sistema de Gestão Escolar",
      equipe: "Equipe Jungle + Freelas",
      cliente: "Escola Futuro Brilhante"
    },
    {
      title: "Plataforma de Cursos Online",
      equipe: "Time Full Stack",
      cliente: "EdTech Brasil"
    },
    {
      title: "Portal de Notícias Locais",
      equipe: "Jungle News Team",
      cliente: "Jornal Cidade Conectada"
    },
    // Adicione mais projetos aqui
  ];

  return (
    <div className="bg-[#0A1E14] text-white min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Projetos Realizados</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-1">{projeto.title}</h3>
            <p className="text-gray-400 text-sm mb-2">Feito por: {projeto.equipe}</p>
            <p className="text-sm text-gray-300">Cliente: {projeto.cliente}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
