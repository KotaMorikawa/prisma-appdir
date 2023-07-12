import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

// pagination用のAPIRoute
export async function GET(
  req: NextRequest,
  { params }: { params: { page: number } }
) {
  const itemsPerPage = 10;
  const skip = (params.page - 1) * itemsPerPage;

  const [users, totalCount] = await Promise.all([
    prisma.user.findMany({
      orderBy: { id: "asc" },
      take: itemsPerPage,
      skip: skip,
    }),
    prisma.user.count(),
  ]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const buildTimestamp = Math.random();

  const response = {
    users,
    totalPages,
    buildTimestamp,
  };

  return NextResponse.json(response);
}
