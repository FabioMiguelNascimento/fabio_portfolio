'use server'

import { getVisitorId } from "@/lib/get-visitor-ip";
import prisma from "@/lib/prisma";
import { Types } from "@/prisma/generated/enums";
import { revalidatePath } from "next/cache";

export async function addStamp(data: { x: number, y: number, content: string, type: Types, rotation: number, scale: number }) {
  const visitorId = await getVisitorId();

  const lastStamp = await prisma.stamp.findFirst({
    where: { visitorId: visitorId },
    orderBy: { createdAt: 'desc' }
  });

  if (lastStamp) {
    const now = new Date();
    const diffInSeconds = (now.getTime() - lastStamp.createdAt.getTime()) / 1000;
    
    if (diffInSeconds < 60) {
      return { 
        success: false, 
      };
    }
  }

  const totalStamps = await prisma.stamp.count();
  if (totalStamps >= 50) {
    const oldest = await prisma.stamp.findFirst({ orderBy: { createdAt: 'asc' } });
    if (oldest) await prisma.stamp.delete({ where: { id: oldest.id } });
  }

  await prisma.stamp.create({
    data: {
      ...data,
      visitorId: visitorId,
    }
  });

  revalidatePath('/');
  return { success: true };
}

export async function getAllStamps() {
  return await prisma.stamp.findMany({
    orderBy: {
      createdAt: "asc"
    },
    take: 50
  })
}