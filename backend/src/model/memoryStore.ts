import { v4 as uuid } from 'uuid';

export type Event = {
  id: string;
  name: string;
  description: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type Participant = {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
};

export type EventParticipant = {
  id: string;
  eventId: string;
  participantId: string;
  createdAt: Date;
};

export const events: Event[] = [];
export const participants: Participant[] = [];
export const eventParticipants: EventParticipant[] = [];

export const memoryUtils = { uuid };
