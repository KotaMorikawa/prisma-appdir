// userをidで指定用のAPIRoute

import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(user);
}
