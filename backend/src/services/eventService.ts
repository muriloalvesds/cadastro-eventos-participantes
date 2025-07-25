
import { prisma } from '../model/prismaClient';

export const eventService = {
  async create({ name, description, date }: { name: string; description: string; date: string }) {
    return await prisma.event.create({
      data: { name, description, date: new Date(date) }
    });
  },
  async list() {
    return await prisma.event.findMany();
  },
  async details(eventId: string) {
    return await prisma.event.findUnique({
      where: { id: eventId },
      include: { participants: true }
    });
  },
};
