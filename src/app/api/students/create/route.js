// app/api/students/create/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  const { name, email, age } = await request.json();

  try {
    const student = await prisma.student.create({
      data: { name, email, age: Number(age) },
    });

    return new Response(JSON.stringify(student), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create student' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
