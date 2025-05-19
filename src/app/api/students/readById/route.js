import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get('id'));

  if (!id) {
    return new Response(
      JSON.stringify({ error: 'Missing id parameter' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const student = await prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      return new Response(
        JSON.stringify({ error: 'Student not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify(student), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch student' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
