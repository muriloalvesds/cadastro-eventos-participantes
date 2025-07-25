import { Request, Response } from 'express';
import { participantService } from '../services/participantService';
import { magicStrings, errorCodes } from '../config/magicStrings';

export const participantController = {
  async create(req: Request, res: Response) {
    const { name, email, phone } = req.body;
    console.log('Creating participant:', { name, email, phone });

    if (!name || !email || !phone) return res.status(errorCodes.badRequest).json({ error: magicStrings.invalidData });
    const participant = await participantService.create({ name, email, phone });
    res.status(201).json(participant);
  },
  async list(req: Request, res: Response) {
    const all = await participantService.list();
    res.json(all);
  },
};
