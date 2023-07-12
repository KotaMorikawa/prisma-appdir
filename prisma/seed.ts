import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "hoge1",
    email: "hoge1@example.com",
    memo: "demo",
  },
  {
    name: "hoge2",
    email: "hoge2@example.com",
    memo: "demo",
  },
  {
    name: "hoge3",
    email: "hoge3@example.com",
    memo: "demo",
  },
  {
    name: "hoge4",
    email: "hoge4@example.com",
    memo: "demo",
  },
  {
    name: "hoge5",
    email: "hoge5@example.com",
    memo: "demo",
  },
  {
    name: "hoge6",
    email: "hoge6@example.com",
    memo: "demo",
  },
  {
    name: "hoge7",
    email: "hoge7@example.com",
    memo: "demo",
  },
  {
    name: "hoge8",
    email: "hoge8@example.com",
    memo: "demo",
  },
  {
    name: "hoge9",
    email: "hoge9@example.com",
    memo: "demo",
  },
  {
    name: "hoge10",
    email: "hoge10@example.com",
    memo: "demo",
  },
  {
    name: "hoge11",
    email: "hoge11@example.com",
    memo: "demo",
  },
  {
    name: "hoge12",
    email: "hoge12@example.com",
    memo: "demo",
  },
  {
    name: "hoge13",
    email: "hoge13@example.com",
    memo: "demo",
  },
  {
    name: "hoge14",
    email: "hoge14@example.com",
    memo: "demo",
  },
  {
    name: "hoge15",
    email: "hoge15@example.com",
    memo: "demo",
  },
  {
    name: "hoge16",
    email: "hoge16@example.com",
    memo: "demo",
  },
  {
    name: "hoge17",
    email: "hoge17@example.com",
    memo: "demo",
  },
  {
    name: "hoge18",
    email: "hoge18@example.com",
    memo: "demo",
  },
  {
    name: "hoge19",
    email: "hoge19@example.com",
    memo: "demo",
  },
  {
    name: "hoge20",
    email: "hoge20@example.com",
    memo: "demo",
  },
  {
    name: "hoge21",
    email: "hoge21@example.com",
    memo: "demo",
  },
  {
    name: "hoge22",
    email: "hoge22@example.com",
    memo: "demo",
  },
  {
    name: "hoge23",
    email: "hoge23@example.com",
    memo: "demo",
  },
  {
    name: "hoge24",
    email: "hoge24@example.com",
    memo: "demo",
  },
  {
    name: "hoge25",
    email: "hoge25@example.com",
    memo: "demo",
  },
  {
    name: "hoge26",
    email: "hoge26@example.com",
    memo: "demo",
  },
  {
    name: "hoge27",
    email: "hoge27@example.com",
    memo: "demo",
  },
  {
    name: "hoge28",
    email: "hoge28@example.com",
    memo: "demo",
  },
  {
    name: "hoge29",
    email: "hoge29@example.com",
    memo: "demo",
  },
  {
    name: "hoge30",
    email: "hoge30@example.com",
    memo: "demo",
  },
  {
    name: "hoge31",
    email: "hoge31@example.com",
    memo: "demo",
  },
  {
    name: "hoge32",
    email: "hoge32@example.com",
    memo: "demo",
  },
  {
    name: "hoge33",
    email: "hoge33@example.com",
    memo: "demo",
  },
  {
    name: "hoge34",
    email: "hoge34@example.com",
    memo: "demo",
  },
  {
    name: "hoge35",
    email: "hoge35@example.com",
    memo: "demo",
  },
  {
    name: "hoge36",
    email: "hoge36@example.com",
    memo: "demo",
  },
  {
    name: "hoge37",
    email: "hoge37@example.com",
    memo: "demo",
  },
  {
    name: "hoge38",
    email: "hoge38@example.com",
    memo: "demo",
  },
  {
    name: "hoge39",
    email: "hoge39@example.com",
    memo: "demo",
  },
  {
    name: "hoge40",
    email: "hoge40@example.com",
    memo: "demo",
  },
  {
    name: "hoge41",
    email: "hoge41@example.com",
    memo: "demo",
  },
  {
    name: "hoge42",
    email: "hoge42@example.com",
    memo: "demo",
  },
  {
    name: "hoge43",
    email: "hoge43@example.com",
    memo: "demo",
  },
  {
    name: "hoge44",
    email: "hoge44@example.com",
    memo: "demo",
  },
  {
    name: "hoge45",
    email: "hoge45@example.com",
    memo: "demo",
  },
  {
    name: "hoge46",
    email: "hoge46@example.com",
    memo: "demo",
  },
  {
    name: "hoge47",
    email: "hoge47@example.com",
    memo: "demo",
  },
  {
    name: "hoge48",
    email: "hoge48@example.com",
    memo: "demo",
  },
  {
    name: "hoge49",
    email: "hoge49@example.com",
    memo: "demo",
  },
  {
    name: "hoge50",
    email: "hoge50@example.com",
    memo: "demo",
  },
];

const transfer = async () => {
  const users = [];
  for (const u of userData) {
    const user = prisma.user.create({
      data: u,
    });
    users.push(user);
  }
  return await prisma.$transaction(users);
};

const main = async () => {
  console.log(`Start seeding ...`);

  await transfer();

  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
