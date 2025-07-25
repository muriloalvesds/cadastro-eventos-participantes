import EventDetailsPage from '@/components/EventDetailsPage';

export default function EventDetails({ params }: { params: { id: string } }) {
  return <EventDetailsPage eventId={params.id} />;
}
