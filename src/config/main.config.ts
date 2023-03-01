import { config } from "dotenv";

export const CONFIG = process.env.CONFIG;
config({ path: CONFIG });
export const PORT = process.env.PORT;
export const RABBITMQ_URL = process.env.RABBITMQ_URL;
export const LISTEN_QUEUE = process.env.LISTEN_QUEUE;
export const SEND_QUEUE = process.env.SEND_QUEUE;
export const HELLO_MESSAGE = process.env.HELLO_MESSAGE;