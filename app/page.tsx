'use client'

import React, { useState } from 'react';
import { Button, MenuItem, Select, SelectChangeEvent, Tab, Tabs, TextField } from "@mui/material";
import { LayoutGrid, Wrench, MonitorSmartphone, Globe, GraduationCap, Settings, ArrowRight, Briefcase, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function MarketplacePage() {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({
    company: '',
    email: '',
    projectDescription: '',
    service: '', // Adicionando campo para selecionar o serviço
    talentProfile: '', // Adicionando campo para selecionar o perfil de talento
  });

  const handleChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para backend ou API
    alert('Solicitação enviada com sucesso!');
    setForm({ company: '', email: '', projectDescription: '', service: '', talentProfile: '' });
  };
  return (
    <>

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-24">
        <h1 className="text-4xl font-bold mb-4">Serviços de Software e Treinamentos</h1>
        <p className="text-lg mb-8 text-gray-300">Soluções criadas por talentos que formamos com excelência. Peça sistemas, apps, websites ou treinamentos.</p>
        <Link href="#formulario">
          <Button variant="outlined" color="success" endIcon={<ArrowRight size={16} />}>Solicitar Servico</Button>
        </Link>
      </section>

      {/* Serviços */}
      <section id="services" className="mb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">Serviços Disponíveis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: <Wrench size={28} />, title: 'Sistemas Web', desc: 'Soluções robustas e escaláveis para sua empresa.'
          }, {
            icon: <MonitorSmartphone size={28} />, title: 'Aplicativos Mobile', desc: 'Apps Android e iOS com performance e design.'
          }, {
            icon: <Globe size={28} />, title: 'Sites e Lojas', desc: 'Presença digital com foco em conversão.'
          }, {
            icon: <GraduationCap size={28} />, title: 'Treinamentos', desc: 'Cursos e workshops personalizados para equipes.'
          }, {
            icon: <Settings size={28} />, title: 'Consultorias', desc: 'Análise e orientação técnica especializada.'
          }].map(({ icon, title, desc }, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-green-400 mb-4 mx-auto w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      {/* <section id="como-funciona" className="mb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">Como Funciona</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-300 max-w-2xl mx-auto">
          <li>Você descreve o serviço que precisa.</li>
          <li>Nós selecionamos formandos capacitados.</li>
          <li>Supervisionamos a execução do projeto.</li>
          <li>Você recebe a solução pronta com suporte.</li>
        </ol>
      </section> */}

      <section id="projetos" className="mb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">Projectos Realizados</h2>
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

      <section id="formulario" className="mb-24">
        <div className="bg-white text-black rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
          <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} indicatorColor="primary" textColor="primary">
            <Tab icon={<Briefcase />} label="Solicitar Servico" />
            <Tab icon={<UserPlus />} label="Contratar Talento" />
          </Tabs>

          <div className="mt-6">
            <TextField
              label="Nome da Empresa"
              name="company"
              value={form.company}
              onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email para Contato"
              name="email"
              value={form.email}
              onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
              fullWidth
              margin="normal"
              type="email"
            />
            <TextField
              label="Descrição do Projeto ou Perfil Desejado"
              name="projectDescription"
              value={form.projectDescription}
              onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />

            {/* Adicionando Select para escolher o serviço ou perfil de talento */}
            {tab === 0 ? (
              <Select
                name="service"
                value={form.service}
                onChange={handleChange}
                fullWidth
                // margin="normal"
                displayEmpty
              >
                <MenuItem value="" disabled>Escolha o serviço</MenuItem>
                <MenuItem value="web">Sistemas Web</MenuItem>
                <MenuItem value="mobile">Aplicativos Mobile</MenuItem>
                <MenuItem value="site">Sites e Lojas</MenuItem>
                <MenuItem value="training">Treinamentos</MenuItem>
                <MenuItem value="consultancy">Consultorias</MenuItem>
              </Select>
            ) : (
              <Select
                name="talentProfile"
                value={form.talentProfile}
                onChange={handleChange}
                fullWidth
                // margin="normal"
                displayEmpty
              >
                <MenuItem value="" disabled>Escolha o perfil do talento</MenuItem>
                <MenuItem value="frontend">Front-End</MenuItem>
                <MenuItem value="fullstack-java">Full Stack (Java)</MenuItem>
                <MenuItem value="backend">Back-End</MenuItem>
                <MenuItem value="fullstack-node">Full Stack (Node.js)</MenuItem>
                <MenuItem value="designer">Designer</MenuItem>
                <MenuItem value="qa">QA (Quality Assurance)</MenuItem>
                <MenuItem value="devops">DevOps</MenuItem>
                <MenuItem value="mobile">Mobile Developer</MenuItem>
              </Select>
            )}

            <div className="mt-4 text-right">
              <Button variant="contained" color="success" onClick={handleSubmit}>Enviar Solicitação</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Formulário simples de requisição */}
      {/* <section id="formulario" className="mb-24">
        <h2 className="text-2xl font-semibold mb-6 text-center">Solicite seu Projeto</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input placeholder="Nome" className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400" />
          <input placeholder="Email para contato" className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400" />
          <textarea placeholder="Descreva o projeto que você precisa" rows={4} className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-400" />
          <Button type="submit" variant="contained" color="success" className="w-full">Enviar Solicitação</Button>
        </form>
      </section> */}

      {/* Rodapé */}
      {/* <footer id="contato" className="text-center text-sm text-gray-500 border-t border-white/10 pt-8">
        <p>© {new Date().getFullYear()} Jungle Mídia. Todos os direitos reservados.</p>
      </footer> */}
    </>
  );
}