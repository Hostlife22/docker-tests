import { prisma } from "../src/prisma";

(async () => {
  return await prisma.user.create({ data: { name: 'Egor' } })
})().then((user) => console.log('done', user))