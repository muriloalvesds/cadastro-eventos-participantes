import { Router } from 'express';
import { eventController } from '../controllers/eventController';
import { participantController } from '../controllers/participantController';
import { subscriptionController } from '../controllers/subscriptionController';

const router = Router();

router.get('/', (req, res) => res.status(200).send('API online'));
router.post('/events', eventController.create);
router.get('/events', eventController.list);
router.get('/events/:eventId', eventController.details);
router.post('/participants', participantController.create);
router.get('/participants', participantController.list);
router.post('/events/:eventId/participants', subscriptionController.subscribe);
router.get('/events/:eventId/participants', subscriptionController.list);

export { router };
