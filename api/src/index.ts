import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { prisma } from "./prisma";

const app = express();

app.use(cors());
// app.use(
//   bodyParser.json({
//     // TODO: size?
//     limit: process.env.API_PAYLOAD_LIMIT || "10mb",
//   })
// );

app.get('/', async (req, res) => {
  const user = await prisma.user.findFirst();
  return res.send({
    message: user
  }).status(200);
})

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  // logStart('api', PORT);
  console.log("api", PORT);
});
