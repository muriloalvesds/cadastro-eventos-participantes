
import { prisma } from '../model/prismaClient';

  async create({ name, email, phone }: { name: string; email: string; phone: string }) {
    return await prisma.participant.create({
      data: { name, email, phone }
    });
  },
  async list() {
    return await prisma.participant.findMany();
  },
};
