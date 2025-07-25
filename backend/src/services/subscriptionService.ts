
import { events, participants, eventParticipants, EventParticipant, memoryUtils } from '../model/memoryStore';
import { prisma } from '../model/prismaClient';

export const subscriptionService = {
  async subscribe(eventId: string, participantId: string) {
    const event = await prisma.event.findUnique({ where: { id: eventId } });
    const participant = await prisma.participant.findUnique({ where: { id: participantId } });
    if (!event || !participant) return null;
    const already = await prisma.eventParticipant.findFirst({ where: { eventId, participantId } });
    if (already) return 'already';
    await prisma.eventParticipant.create({ data: { eventId, participantId } });
    return true;
  },
  async list(eventId: string) {
    const event = await prisma.event.findUnique({ where: { id: eventId } });
    if (!event) return null;
    const eventParticipants = await prisma.eventParticipant.findMany({ where: { eventId } });
    const participantIds = eventParticipants.map(ep => ep.participantId);
    return await prisma.participant.findMany({ where: { id: { in: participantIds } } });
  },
};
