import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";

import AppBuilder from "./appBuilder";
import errorMiddleware from "./middleware/error.middleware";

dotenv.config();
const app = express();
const appBuilder = new AppBuilder(app);

const port = process.env.PORT || "8080";
const portNumber = parseInt(port);

appBuilder
  .addMiddleware(express.json())
  .initializeControllers()
  .addMiddleware(errorMiddleware)
  .build(portNumber, () => console.log("Listing on Port", portNumber));
