import SubscribeFormPage from '@/components/SubscribeFormPage';

export default function SubscribePage({ params }: { params: { id: string } }) {
  return <SubscribeFormPage eventId={params.id} />;
}
