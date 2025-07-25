
import { participants, Participant, memoryUtils } from '../model/memoryStore';

export const participantService = {
  async create({ name, email, phone }: { name: string; email: string; phone: string }) {
    const now = new Date();
    const participant: Participant = {
      id: memoryUtils.uuid(),
      name,
      email,
      phone,
      createdAt: now,
      updatedAt: now,
    };
    participants.push(participant);
    return participant;
  },
  async list() {
    return participants;
  },
};
