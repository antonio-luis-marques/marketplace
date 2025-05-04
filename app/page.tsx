'use client'

import React, { useState } from 'react';
import { Button, Tab, Tabs, TextField } from "@mui/material";
import { ArrowRight, Briefcase, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function MarketplacePage() {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({
    company: '',
    email: '',
    projectDescription: '',
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para backend ou API
    alert('Solicitação enviada com sucesso!');
    setForm({ company: '', email: '', projectDescription: '' });
  };
  return (
    <>
      {/* Header */}
      

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-24">
        <h1 className="text-4xl font-bold mb-4">Transforme sua ideia em um projeto digital</h1>
        <p className="text-lg mb-8 text-gray-300">
          Soluções criadas por talentos que formamos com excelência. Peça sistemas, apps, websites ou treinamentos.
        </p>
        <Link href="#formulario">
          <Button variant="outlined" color="success" endIcon={<ArrowRight size={16} />}>
            Solicitar Projeto
          </Button>
        </Link>
      </section>

      {/* Freelancers */}
      <section id="freelas" className="mb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">Freelancers Disponíveis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name: "João Silva",
            title: "Desenvolvedor Front-End",
            skills: "React, Tailwind, Firebase",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            bio: "Especialista em interfaces modernas e responsivas com foco em performance e acessibilidade."
          }, {
            name: "Ana Costa",
            title: "UI/UX Designer",
            skills: "Figma, Adobe XD, Prototipagem",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "Designer apaixonada por criar experiências que encantam e funcionam de verdade."
          }, {
            name: "Carlos Mendes",
            title: "Desenvolvedor Full Stack",
            skills: "Node.js, Next.js, PostgreSQL",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            bio: "Cria sistemas robustos com backend escalável e frontend intuitivo."
          }].map((freela, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <img src={freela.image} alt={freela.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{freela.name}</h3>
              <p className="text-sm text-gray-400 mb-1">{freela.title}</p>
              <p className="text-sm text-gray-300 mb-2">{freela.skills}</p>
              <p className="text-sm text-gray-400 italic mb-4">{freela.bio}</p>
              <Link href="#formulario">
                <Button variant="outlined" color="success" size="small">Solicitar esse freelancer</Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/freelas">
            <Button variant="text" color="success">Ver mais freelancers</Button>
          </Link>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="mb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">Projetos Realizados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-1">Sistema de Gestão Escolar</h3>
              <p className="text-gray-400 text-sm mb-2">Feito por: Equipe Jungle + Freelas</p>
              <p className="text-sm text-gray-300">Cliente: Escola Futuro Brilhante</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/projects">
            <Button variant="text" color="success">Ver mais projetos</Button>
          </Link>
        </div>

      </section>

      {/* Treinamentos */}
      <section id="treinamentos" className="mb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">Treinamentos Ministrados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-1">Curso de Lógica de Programação</h3>
              <p className="text-gray-400 text-sm mb-2">Instrutor: Ana Costa</p>
              <p className="text-sm text-gray-300">Instituição: Instituto Jovem Código</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/trainings">
            <Button variant="text" color="success">Ver mais treinamentos</Button>
          </Link>
        </div>

      </section>

      {/* Formulário de Requisição */}
      <section id="formulario" className="mb-24">
        <div className="bg-white text-black rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
          <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} indicatorColor="primary" textColor="primary">
            <Tab icon={<Briefcase />} label="Solicitar Freelancer" />
            <Tab icon={<UserPlus />} label="Contratar Talento" />
          </Tabs>

          <div className="mt-6">
            <TextField
              label="Nome da Empresa"
              name="company"
              value={form.company}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email para Contato"
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="email"
            />
            <TextField
              label="Descrição do Projeto ou Perfil Desejado"
              name="projectDescription"
              value={form.projectDescription}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <div className="mt-4 text-right">
              <Button variant="contained" color="success" onClick={handleSubmit}>Enviar Solicitação</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      
    </>
  );
}