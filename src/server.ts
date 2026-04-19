import * as http from "http";
import {createApp} from "./app";

const server = createApp();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});

