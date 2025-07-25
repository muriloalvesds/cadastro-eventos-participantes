"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const API_URL = 'http://localhost:3333';

function formatDateBR(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export default function EventDetailsPage({ eventId }: { eventId: string }) {
  const [event, setEvent] = useState<any>(null);
  const [participants, setParticipants] = useState<any[]>([]);
  useEffect(() => {
    axios.get(`${API_URL}/events/${eventId}`).then(res => setEvent(res.data));
    axios.get(`${API_URL}/events/${eventId}/participants`).then(res => setParticipants(res.data));
  }, [eventId]);
  return (
    <div className="min-h-screen bg-[#f9f9f6] flex flex-col items-center justify-center p-8">
      <button type="button" onClick={() => window.location.href = '/'} className="fixed top-8 left-8 z-50 px-4 py-2 bg-[#1D1D1B] text-white rounded font-semibold shadow flex items-center gap-2 hover:bg-[#333] transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M10 19l-7-7 7-7v4h8v6h-8v4z"/></svg>
        Voltar
      </button>
      <div className="bg-white rounded-lg shadow p-8 border-2 border-[#1D1D1B] max-w-lg w-full mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-[#1D1D1B] text-center">Detalhes do Evento</h1>
        {event && (
          <div className="mb-4 text-[#1D1D1B]">
            <div><b>Nome:</b> {event.name}</div>
            <div><b>Descrição:</b> {event.description}</div>
            <div><b>Data:</b> {formatDateBR(event.date)}</div>
          </div>
        )}
        <Link href={`/events/${eventId}/subscribe`} className="bg-[#EEE416] text-[#1D1D1B] px-4 py-2 rounded mb-4 inline-block font-semibold shadow hover:bg-[#e6d900] transition">Inscrever Participante</Link>
        <h2 className="text-xl font-bold mt-6 mb-2 text-[#1D1D1B]">Participantes</h2>
        <ul>
          {participants.map(p => (
            <li key={p.id} className="border-b border-[#1D1D1B] py-2 text-[#1D1D1B] font-semibold">{p.name} ({p.email})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
