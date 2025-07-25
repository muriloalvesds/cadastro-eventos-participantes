
import { events, participants, eventParticipants, EventParticipant, memoryUtils } from '../model/memoryStore';

export const subscriptionService = {
  async subscribe(eventId: string, participantId: string) {
    const event = events.find(e => e.id === eventId);
    const participant = participants.find(p => p.id === participantId);
    if (!event || !participant) return null;
    const exists = eventParticipants.find(
      ep => ep.eventId === eventId && ep.participantId === participantId
    );
    if (exists) return 'already';
    const ep: EventParticipant = {
      id: memoryUtils.uuid(),
      eventId,
      participantId,
      createdAt: new Date(),
    };
    eventParticipants.push(ep);
    return true;
  },
  async list(eventId: string) {
    const event = events.find(e => e.id === eventId);
    if (!event) return null;
    return eventParticipants
      .filter(ep => ep.eventId === eventId)
      .map(ep => {
        const participant = participants.find(p => p.id === ep.participantId);
        return participant ? { ...participant } : null;
      })
      .filter(Boolean);
  },
};
