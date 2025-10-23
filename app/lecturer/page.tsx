import { getAllLecturers } from '../prisma';

type Lecturer = {
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
      <h1 className="text-2xl font-bold mb-4">Lecturers&apos; Data</h1>

      <table className="border border-white w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-800 text-center">
            <th className="border border-white p-2">NIS</th>
            <th className="border border-white p-2">Name</th>
            <th className="border border-white p-2">Age</th>
            <th className="border border-white p-2">Address</th>
            <th className="border border-white p-2">Phone Number</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
