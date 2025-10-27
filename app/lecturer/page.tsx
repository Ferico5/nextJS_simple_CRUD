import { getAllLecturers } from '../prisma';
import Link from 'next/link';

export type Lecturer = {
  id: string;
  NID: string;
  name: string;
  age: number;
  address: string;
  phone: string;
};

export default async function LecturerPage() {
  const lecturers: Lecturer[] = await getAllLecturers();
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold mb-4">Lecturers&apos; Data</h1>
        <Link href="/lecturer/add_lecturer" className="p-2 bg-blue-900">
          Add Lecturer
        </Link>
      </div>

      <table className="border border-white w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-800 text-center">
            <th className="border border-white p-2">NIS</th>
            <th className="border border-white p-2">Name</th>
            <th className="border border-white p-2">Age</th>
            <th className="border border-white p-2">Address</th>
            <th className="border border-white p-2">Phone Number</th>
            <th className="border border-white p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {lecturers.map((lecturer) => (
            <tr key={lecturer.id}>
              <td className="border border-white p-2 text-center">{lecturer.NID}</td>
              <td className="border border-white p-2">{lecturer.name}</td>
              <td className="border border-white p-2 text-center">{lecturer.age}</td>
              <td className="border border-white p-2">{lecturer.address}</td>
              <td className="border border-white p-2">{lecturer.phone}</td>
              <td className='border border-white p-2 flex justify-around'>
                <Link href={`/lecturer/${lecturer.id}`} className='px-2 bg-blue-500 hover:cursor-pointer'>Edit</Link>
                <button className='px-2 bg-red-500 hover:cursor-pointer'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
