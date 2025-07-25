"use client";

import { useEffect } from "react";
import { AppProvider, useAppContext } from "../context/AppContext";


function HomeContent() {
  const { events, setEvents } = useAppContext();
  useEffect(() => {
    fetch("http://localhost:3333/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [setEvents]);
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8" style={{ color: "#EEE416" }}>Eventos</h1>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <ul className="divide-y divide-gray-200">
          {events.length === 0 && <li className="py-4 text-center text-gray-400">Nenhum evento cadastrado</li>}
          {events.map((event: any) => (
            <li key={event.id} className="py-4 flex flex-col gap-1">
              <span className="font-semibold text-lg" style={{ color: "#1D1D1B" }}>{event.name}</span>
              <span className="text-sm text-gray-600">{event.description}</span>
              <span className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <HomeContent />
    </AppProvider>
  );
}
