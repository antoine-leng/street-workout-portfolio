import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

prisma.$use(async (params, next) => {
  try {
    return await next(params);
  } catch (error: any) {
    if (error.code === 'P1001' || error.code === 'P2024') {
      console.log('Database connection lost, reconnecting...');
      await prisma.$connect();
      return await next(params);
    }
    throw error;
  }
});

export { prisma };