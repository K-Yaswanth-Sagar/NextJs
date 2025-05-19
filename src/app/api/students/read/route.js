import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const students = await prisma.student.findMany();

  return new Response(JSON.stringify(students), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
