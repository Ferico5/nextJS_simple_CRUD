import { getSingleLecturer } from '@/app/prisma';
import EditLecturerForm from './lecturer_edit_form';
import { Lecturer } from '../page';
import { notFound } from 'next/navigation';

export default async function EditLecturerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lecturer: Lecturer | null = await getSingleLecturer(id);

  if (!lecturer) {
    notFound();
  }

  return <EditLecturerForm lecturer={lecturer} />;
}
