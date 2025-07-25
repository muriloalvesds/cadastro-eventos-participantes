import { Request, Response } from 'express';
import { subscriptionService } from '../services/subscriptionService';
import { magicStrings, errorCodes } from '../config/magicStrings';

export const subscriptionController = {
  async subscribe(req: Request, res: Response) {
    const { eventId } = req.params;
    const { participantId } = req.body;
    if (!eventId || !participantId) return res.status(errorCodes.badRequest).json({ error: magicStrings.invalidData });
    const result = await subscriptionService.subscribe(eventId, participantId);
    if (result === 'already') return res.status(errorCodes.badRequest).json({ error: magicStrings.alreadyRegistered });
    if (!result) return res.status(errorCodes.notFound).json({ error: magicStrings.eventNotFound });
    res.status(201).json({ message: magicStrings.success });
  },

  async list(req: Request, res: Response) {
    const { eventId } = req.params;
    const participants = await subscriptionService.list(eventId);
    if (!participants) return res.status(errorCodes.notFound).json({ error: magicStrings.eventNotFound });
    res.json(participants);
  },
};
