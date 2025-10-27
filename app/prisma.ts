import { PrismaClient } from './generated/prisma';
const prisma = new PrismaClient();

const seedLecturer = async () => {
  const count = await prisma.lecturer.count();
  if (count === 0) {
    await prisma.lecturer.createMany({
      data: [
        {
          NID: '111111',
          name: 'Purbaya Srilaka',
          age: 37,
          address: 'Jl. Serangkai No. 42',
          phone: '082249245235',
        },
        {
          NID: '222222',
          name: 'Prabowo Subianto',
          age: 43,
          address: 'Jl. Mahakarya No. 33',
          phone: '082239428353',
        },
        {
          NID: '333333',
          name: 'Kurman Sriwijaya',
          age: 29,
          address: 'Jl. Tebing Muda No. 2A',
          phone: '081294285924',
        },
      ],
    });
  }
};

seedLecturer();

export async function getAllLecturers() {
  return prisma.lecturer.findMany();
}

export async function getSingleLecturer(id: string) {
  return prisma.lecturer.findUnique({
    where: { id },
  });
}

export async function addLecturer(NID: string, name: string, age: number, address: string, phone: string) {
  return prisma.lecturer.create({
    data: { NID, name, age, address, phone },
  });
}
