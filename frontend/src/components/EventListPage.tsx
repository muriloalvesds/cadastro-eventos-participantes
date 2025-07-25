"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SubscribeModal from './SubscribeModal';

const API_URL = 'http://localhost:3333';

export default function EventListPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [participants, setParticipants] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'event'|'participant'|null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    axios.get(`${API_URL}/events`).then(res => setEvents(res.data));
    axios.get(`${API_URL}/participants`).then(res => setParticipants(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f6] p-8 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#1D1D1B] tracking-tight text-center">Painel de Eventos & Participantes</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6 border-2 border-[#D1D1D1]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#1D1D1B] flex items-center gap-2">
                Eventos
              </h2>
              <Link href="/events/new" className="bg-[#EEE416] text-[#1D1D1B] px-4 py-1 rounded font-semibold shadow hover:bg-[#e6d900] transition">Novo Evento</Link>
            </div>
            <ul>
              {events.map(event => (
                <li key={event.id} className="mb-3 text-[#1D1D1B] bg-[#fffde7] border-2 border-[#D1D1D1] rounded px-4 py-2 flex items-center justify-between">
                  <Link href={`/events/${event.id}`} className="font-semibold underline hover:text-[#EEE416] transition">
                    {event.name}
                  </Link>
                  <div className="flex items-center gap-2">
                    <button onClick={() => {setModalOpen(true); setModalType('event'); setSelectedItem(event);}} className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-[#EEE416] hover:bg-[#EEE416] hover:border-[#1D1D1B] transition" title="Inscrever participante">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1D1D1B" viewBox="0 0 24 24"><path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-2 border-[#D1D1D1]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#1D1D1B] flex items-center gap-2">
                Participantes
              </h2>
              <Link href="/participants/new" className="bg-[#EEE416] text-[#1D1D1B] px-4 py-1 rounded font-semibold shadow hover:bg-[#e6d900] transition">Novo Participante</Link>
            </div>
            <ul>
              {participants.map(participant => (
                <li key={participant.id} className="mb-3 text-[#1D1D1B] bg-[#fffde7] border-2 border-[#D1D1D1] rounded px-4 py-2 flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-2">
                    {participant.name}
                  </span><br />
                  <span className="text-sm">{participant.email} — {participant.phone}</span>
                    <button onClick={() => {setModalOpen(true); setModalType('participant'); setSelectedItem(participant);}} className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-[#EEE416] shadow hover:bg-[#EEE416] hover:border-[#1D1D1B] transition" title="Inscrever em evento">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1D1D1B" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13zm0-15H5V5h14v1zm-7 7h2v2h2v2h-2v2h-2v-2H9v-2h2v-2z"/></svg>
                    </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {modalOpen && modalType === 'event' && (
          <SubscribeModal
            open={modalOpen}
            title={`Inscrever participante em "${selectedItem?.name}"`}
            items={participants.map(p => ({id: p.id, name: p.name}))}
            onClose={() => {setModalOpen(false); setSelectedItem(null);}}
            onSubmit={async (participantId) => {
              await axios.post(`${API_URL}/events/${selectedItem.id}/participants`, { participantId });
              setModalOpen(false);
              setSelectedItem(null);
            }}
          />
        )}
        {modalOpen && modalType === 'participant' && (
          <SubscribeModal
            open={modalOpen}
            title={`Inscrever "${selectedItem?.name}" em evento`}
            items={events.map(e => ({id: e.id, name: e.name}))}
            onClose={() => {setModalOpen(false); setSelectedItem(null);}}
            onSubmit={async (eventId) => {
              await axios.post(`${API_URL}/events/${eventId}/participants`, { participantId: selectedItem.id });
              setModalOpen(false);
              setSelectedItem(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
