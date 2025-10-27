'use server';

import { addLecturer } from '@/app/prisma';
import { redirect } from 'next/navigation';

export type Errors = {
  NID?: string;
  name?: string;
  age?: string;
  address?: string;
  phone?: string;
};

export type FormState = {
  errors: Errors;
};

export async function createLecturer(prevState: FormState, formData: FormData) {
  'use server';

  const NID = formData.get('NID') as string;
  const name = formData.get('name') as string;
  const age = Number(formData.get('age'));
  const address = formData.get('address') as string;
  const phone = formData.get('phone') as string;

  const errors: Errors = {};

  if (!NID) {
    errors.NID = 'NID wajib diisi!';
  }

  if (!name) {
    errors.name = 'Nama wajib diisi!';
  }

  if (!age) {
    errors.age = 'Umur wajib diisi!';
  }

  if (!address) {
    errors.address = 'Alamat wajib diisi!';
  }

  if (!phone) {
    errors.phone = 'Nomor Telepon wajib diisi!';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addLecturer(NID, name, age, address, phone);

  redirect('/lecturer');
}
