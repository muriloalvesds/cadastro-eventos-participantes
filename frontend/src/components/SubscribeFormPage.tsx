"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import SubscribeModal from './SubscribeModal';

const API_URL = 'http://localhost:3333';

export default function SubscribeFormPage({ eventId }: { eventId: string }) {
  const [participants, setParticipants] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    axios.get(`${API_URL}/participants`).then(res => setParticipants(res.data));
  }, []);

  return (
    <>
      <button type="button" onClick={() => router.back()} className="fixed top-8 left-8 z-50 px-4 py-2 bg-[#1D1D1B] text-white rounded font-semibold shadow flex items-center gap-2 hover:bg-[#333] transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M10 19l-7-7 7-7v4h8v6h-8v4z"/></svg>
        Voltar
      </button>
      <SubscribeModal
        open={modalOpen}
        title={`Inscrever participante em evento`}
        items={participants.map(p => ({ id: p.id, name: p.name }))}
        onClose={() => { setModalOpen(false); router.push(`/events/${eventId}`); }}
        onSubmit={async (participantId) => {
          await axios.post(`${API_URL}/events/${eventId}/participants`, { participantId });
          setModalOpen(false);
          router.push(`/events/${eventId}`);
        }}
      />
    </>
  );
}
