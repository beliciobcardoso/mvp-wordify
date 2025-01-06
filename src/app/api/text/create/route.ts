import  prisma from '@/lib/bd/prisma';
import { ImageTextConverterEntity } from '@prisma/client';

export async function POST(req: Request) {
  const data = await req.json() as ImageTextConverterEntity;
  try {
    const result = await prisma.imageTextConverterEntity.create({
      data: {
        image: data.image,
        text: data.text,
      },
    });
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('Error creating text', { status: 500 });
  }
}