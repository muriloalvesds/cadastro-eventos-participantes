import { Request, Response } from 'express';
import { eventService } from '../services/eventService';
import { magicStrings, errorCodes } from '../config/magicStrings';

export const eventController = {
  async create(req: Request, res: Response) {
    const { name, description, date } = req.body;
    if (!name || !description || !date) return res.status(errorCodes.badRequest).json({ error: magicStrings.invalidData });
    const event = await eventService.create({ name, description, date });
    res.status(201).json(event);
  },

  async list(req: Request, res: Response) {
    const events = await eventService.list();
    res.json(events);
  },

  async details(req: Request, res: Response) {
    const { eventId } = req.params;
    const event = await eventService.details(eventId);
    if (!event) return res.status(errorCodes.notFound).json({ error: magicStrings.eventNotFound });
    res.json(event);
  },
};
