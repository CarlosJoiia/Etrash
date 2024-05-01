import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function listController() {
  const Cooperativas = await prisma.cooperativa.findMany({
    where: {
      status: "Verificado",
    },
    select: {
      id: true,
      name: true,
      category: true,
      contact: true,
      description: true,
      latitude: true,
      longitude: true,
    },
  });

  const Empresas = await prisma.empresas.findMany({
    where: {
      status: "Verificado",
    },
    select: {
      id: true,
      name: true,
      category: true,
      contact: true,
      description: true,
      latitude: true,
      longitude: true,
    },
  });

  return { Cooperativas, Empresas };
}
