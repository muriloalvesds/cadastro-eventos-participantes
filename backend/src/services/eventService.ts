
import { events, Event, memoryUtils, eventParticipants, participants } from '../model/memoryStore';

export const eventService = {
  async create({ name, description, date }: { name: string; description: string; date: string }) {
    const now = new Date();
    const event: Event = {
      id: memoryUtils.uuid(),
      name,
      description,
      date: new Date(date),
      createdAt: now,
      updatedAt: now,
    };
    events.push(event);
    return event;
  },
  async list() {
    return events;
  },
  async details(eventId: string) {
    const event = events.find(e => e.id === eventId);
    if (!event) return null;
    const participantsList = eventParticipants
      .filter(ep => ep.eventId === eventId)
      .map(ep => {
        const participant = participants.find(p => p.id === ep.participantId);
        return participant ? { ...participant } : null;
      })
      .filter(Boolean);
    return { ...event, participants: participantsList };
  },
};
