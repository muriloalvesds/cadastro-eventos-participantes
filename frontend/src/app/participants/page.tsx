import axios from 'axios';

const API_URL = 'http://localhost:3333';

export default async function ParticipantsPage() {
  const res = await axios.get(`${API_URL}/participants`);
  const participants = res.data;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-[#1D1D1B]">Participantes</h1>
      <ul>
        {participants.map((p: any) => (
          <li key={p.id} className="border-b py-2">
            <span className="font-semibold">{p.name}</span> - {p.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
