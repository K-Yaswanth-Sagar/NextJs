import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get('id'));

  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing id' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    await prisma.student.delete({
      where: { id },
    });
    return new Response(null, { status: 204 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to delete' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
