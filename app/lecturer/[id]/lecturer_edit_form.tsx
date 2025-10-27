'use client';

import { useState } from 'react';
import editLecturer, { FormState } from '@/actions/lecturer';
import { Lecturer } from '../page';

export default function EditLecturerForm({ lecturer }: { lecturer: Lecturer }) {
  const [state, setState] = useState<FormState>({ errors: {} });
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const result = await editLecturer(lecturer.id, state, formData);

    setState(result);
    setIsPending(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="NID">
          NID
          <input type="text" className="block w-full p-2 text-white border rounded my-3" name="NID" defaultValue={lecturer.NID} />
        </label>
        {state.errors.NID && <p className="text-red-500">{state.errors.NID}</p>}
      </div>

      <div>
        <label htmlFor="name">
          Full Name
          <input type="text" className="block w-full p-2 text-white border rounded my-3" name="name" defaultValue={lecturer.name} />
        </label>
        {state.errors.name && <p className="text-red-500">{state.errors.name}</p>}
      </div>

      <div>
        <label htmlFor="age">
          Age
          <input type="number" className="block w-full p-2 text-white border rounded my-3" name="age" defaultValue={lecturer.age} />
        </label>
        {state.errors.age && <p className="text-red-500">{state.errors.age}</p>}
      </div>

      <div>
        <label htmlFor="address">
          Address
          <input type="text" className="block w-full p-2 text-white border rounded my-3" name="address" defaultValue={lecturer.address} />
        </label>
        {state.errors.address && <p className="text-red-500">{state.errors.address}</p>}
      </div>

      <div>
        <label htmlFor="phone">
          Phone Number
          <input type="text" className="block w-full p-2 text-white border rounded my-3" name="phone" defaultValue={lecturer.phone} />
        </label>
        {state.errors.phone && <p className="text-red-500">{state.errors.phone}</p>}
      </div>

      <button type="submit" className="block w-full p-2 bg-blue-500 hover:bg-blue-800 hover:cursor-pointer" disabled={isPending}>
        Update
      </button>
    </form>
  );
}
