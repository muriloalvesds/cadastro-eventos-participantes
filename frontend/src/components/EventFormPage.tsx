"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const API_URL = 'http://localhost:3333';

export default function EventFormPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post(`${API_URL}/events`, { name, description, date });
    router.push('/');
  };
  return (
    <div className="min-h-screen bg-[#f9f9f6] flex flex-col items-center justify-center p-8">
      <button type="button" onClick={() => window.history.back()} className="fixed top-8 left-8 z-50 px-4 py-2 bg-[#1D1D1B] text-white rounded font-semibold shadow flex items-center gap-2 hover:bg-[#333] transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M10 19l-7-7 7-7v4h8v6h-8v4z"/></svg>
        Voltar
      </button>
      <form className="bg-white rounded-lg shadow p-8 border-2 border-[#1D1D1B] max-w-md w-full mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-[#1D1D1B] text-center">Novo Evento</h1>
        <input className="border-2 border-[#1D1D1B] text-[#1D1D1B] rounded p-2 mb-2 w-full placeholder-[#1D1D1B]" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
        <input className="border-2 border-[#1D1D1B] text-[#1D1D1B] rounded p-2 mb-2 w-full placeholder-[#1D1D1B]" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} required />
        <input className="border-2 border-[#1D1D1B] text-[#1D1D1B] rounded p-2 mb-2 w-full placeholder-[#1D1D1B]" type="date" value={date} onChange={e => setDate(e.target.value)} required />
        <button className="bg-[#EEE416] text-[#1D1D1B] px-4 py-2 rounded mt-2 w-full font-semibold shadow hover:bg-[#e6d900] transition" type="submit">Criar Evento</button>
      </form>
    </div>
  );
}
