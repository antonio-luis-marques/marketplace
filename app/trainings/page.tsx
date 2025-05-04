'use client';

import React from 'react';

export default function TreinamentosPage() {
  const treinamentos = [
    {
      curso: "Curso de Lógica de Programação",
      instrutor: "Ana Costa",
      instituicao: "Instituto Jovem Código"
    },
    {
      curso: "Introdução ao React",
      instrutor: "João Silva",
      instituicao: "DevSchool"
    },
    {
      curso: "UX Design para Iniciantes",
      instrutor: "Ana Costa",
      instituicao: "DesignLab"
    },
    // Adicione mais treinamentos se desejar
  ];

  return (
    <div className="bg-[#0A1E14] text-white min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Treinamentos Ministrados</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {treinamentos.map((treino, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-1">{treino.curso}</h3>
            <p className="text-gray-400 text-sm mb-2">Instrutor: {treino.instrutor}</p>
            <p className="text-sm text-gray-300">Instituição: {treino.instituicao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
