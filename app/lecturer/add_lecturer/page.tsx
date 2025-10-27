'use client';

import { useActionState } from 'react';
import { FormState, createLecturer } from '@/actions/lecturer';

export default function AddLecturerPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(createLecturer, initialState);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="NID">
          NID
          <input type="text" className="block w-full p-2 text-white border rounded my-3" name="NID" required />
        </label>
        {state.errors.NID && <p className="text-red-500">{state.errors.NID}</p>}
      </div>

      <div>
        <label htmlFor="name">
          Full Name
          <input type="text" className="block w-full p-2 text-white border rounded my-3" name="name" required />
        </label>
        {state.errors.name && <p className="text-red-500">{state.errors.name}</p>}
      </div>

      <div>
        <label htmlFor="age">
          Age
          <input type="number" className="block w-full p-2 text-white border rounded my-3" name="age" required />
        </label>
        {state.errors.age && <p className="text-red-500">{state.errors.age}</p>}
      </div>

      <div>
        <label htmlFor="address">
          Address
          <input type="text" className="block w-full p-2 text-white border rounded my-3" name="address" required />
        </label>
        {state.errors.address && <p className="text-red-500">{state.errors.address}</p>}
      </div>

      <div>
        <label htmlFor="phone">
          Phone Number
          <input type="text" className="block w-full p-2 text-white border rounded my-3" name="phone" required />
        </label>
        {state.errors.phone && <p className="text-red-500">{state.errors.phone}</p>}
      </div>

      <button type="submit" className="block w-full p-2 bg-blue-500 hover:bg-blue-800 hover:cursor-pointer" disabled={isPending}>
        Submit
      </button>
    </form>
  );
}
