import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
    // @ts-expect-error typescript throwing error because does not have global context, defined later so adding annotation to pass build
  if (!global.prisma) {
    // @ts-expect-error typescript throwing error because does not have global context, defined later so adding annotation to pass build
    global.prisma = new PrismaClient();
  }
    // @ts-expect-error typescript throwing error because does not have global context, defined later so adding annotation to pass build
  prisma = global.prisma;
}

export default prisma;