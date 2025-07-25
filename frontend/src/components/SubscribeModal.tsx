"use client";
import { useState } from "react";

interface SubscribeModalProps {
  open: boolean;
  title: string;
  items: { id: string; name: string }[];
  onClose: () => void;
  onSubmit: (selectedId: string) => void;
}

export default function SubscribeModal({ open, title, items, onClose, onSubmit }: SubscribeModalProps) {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string>("");

  if (!open) return null;

  const filtered = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-10 w-full max-w-2xl border-2 border-[#1D1D1B] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-[#1D1D1B]">{title}</span>
          <button onClick={onClose} className="text-[#1D1D1B] font-bold text-lg">×</button>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <input
            className="border-2 border-[#1D1D1B] text-[#1D1D1B] rounded px-2 py-1 w-full placeholder-[#1D1D1B]"
            placeholder="Buscar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <span className="material-icons text-[#1D1D1B]">search</span>
        </div>
        <div className="max-h-60 overflow-y-auto mb-4">
          {filtered.map(item => (
            <label key={item.id} className="flex items-center gap-2 mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedId === item.id}
                onChange={() => setSelectedId(item.id)}
              />
              <span className="text-[#1D1D1B] font-semibold">{item.name}</span>
            </label>
          ))}
        </div>
        <button
          className="bg-[#EEE416] text-[#1D1D1B] px-4 py-2 rounded font-semibold w-full disabled:opacity-50"
          disabled={!selectedId}
          onClick={() => onSubmit(selectedId)}
        >
          OK
        </button>
      </div>
    </div>
  );
}
