FROM node:18

WORKDIR /app

COPY ./package.json ./package.json

RUN yarn install

COPY ./src ./src

COPY ./prisma ./prisma

COPY ./tsconfig.json ./tsconfig.json

RUN npx prisma generate

EXPOSE 5000

CMD ["yarn", "dev"]