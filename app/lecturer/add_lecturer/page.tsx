import { addLecturer } from '@/app/prisma';
import { redirect } from 'next/navigation';

const AddLecturerPage = () => {
  async function createLecturer(formData: FormData) {
    'use server';

    const NID = formData.get('NID') as string;
    const name = formData.get('name') as string;
    const age = Number(formData.get('age'));
    const address = formData.get('address') as string;
    const phone = formData.get('phone') as string;

    if (!NID || !name || !age || !address || !phone) {
      throw new Error('Semua field wajib diisi!');
    }

    await addLecturer(NID, name, age, address, phone);

    redirect('/lecturer');
  }
  return (
    <form action={createLecturer}>
      <label htmlFor="NID" >
        NID
        <input type="text" className="block w-full p-2 text-white border rounded my-3" name='NID' required />
      </label>
      <label htmlFor="name" >
        Full Name
        <input type="text" className="block w-full p-2 text-white border rounded my-3" name='name' required />
      </label>
      <label htmlFor="age" >
        Age
        <input type="number" className="block w-full p-2 text-white border rounded my-3" name='age' required />
      </label>
      <label htmlFor="address" >
        Address
        <input type="text" className="block w-full p-2 text-white border rounded my-3" name='address' required />
      </label>
      <label htmlFor="phone" >
        Phone Number
        <input type="text" className="block w-full p-2 text-white border rounded my-3" name='phone' required />
      </label>
      <button type='submit' className='block w-full p-2 bg-blue-500 hover:bg-blue-800 hover:cursor-pointer'>Submit</button>
    </form>
  );
};

export default AddLecturerPage;
