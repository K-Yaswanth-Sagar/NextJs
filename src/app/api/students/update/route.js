import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get('id'));
  const body = await request.json();
  const { name, email, age } = body;

  try {
    const updated = await prisma.student.update({
      where: { id },
      data: { name, email, age: Number(age) },
    });

    return new Response(JSON.stringify(updated), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to update' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
