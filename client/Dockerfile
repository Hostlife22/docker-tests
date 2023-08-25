FROM node:18

WORKDIR /app

COPY ./ ./

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]